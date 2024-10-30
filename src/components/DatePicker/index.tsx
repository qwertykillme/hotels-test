import React, {
    useEffect, useMemo, useState,
} from 'react';
import styles from './styles.module.scss';
import moment from 'moment';
import getMonthsArray from "helpers/getMonthsArray";
import 'moment/locale/ru'
import clsx from 'clsx';
const MONTHS = getMonthsArray();
moment.locale('ru');
const ListNameDayInWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
type TypeStartDateList = 'week' | 'month';
type TypeSelectDay = 'init' | 'last';
interface IDay {
    date: moment.Moment,
    formatDate: string,
    isChecked: boolean,
    weekDayCount: number
}
interface IPorpDatePicker {
    onChange: (date: [moment.Moment | null, moment.Moment | null]) => void;
    value?: [moment.Moment | null, moment.Moment | null]
}
type Week = (IDay | null)[];
type CalendarMatrix = Week[];
const DatePicker: React.FunctionComponent<IPorpDatePicker> = ({ onChange, value }): JSX.Element => {
    moment.locale('ru');
    const [calendars, setCalendars] = useState<CalendarMatrix[]>([]);
    const [initDate, setInitDate] = useState<moment.Moment | null>(() => {
        if (!value) return null;
        return value[0];
    });

    // useEffect(() => {
    //     setInitDate(value ? value[0] : null);
    //     setLastDate(value ? value[1] : null);
    // }, [value]);


    const [lastDate, setLastDate] = useState<moment.Moment | null>(() => {
        if (!value) return null;
        return value[1];
    });
    useEffect(() => {
        onChange([initDate, lastDate])
    }, [initDate, lastDate])
    const [typeSelect, setTypeSelect] = useState<TypeSelectDay>('init');
    const getFormatDay = (day: any, format?: string):string => day.format(format || 'DD.MM.YYYY dddd');
    const getStartMonth = (day: any) => moment(day).clone().startOf('month');
    const getEndMonth = (day: any) => moment(day).clone().endOf('month');
    const getStartWeek = (day: any) => moment(day).startOf('week');
    const getEndWeek = (day: any) => moment(day).endOf('week');
    const getListDayFromPeriod = (initialStartDay: moment.Moment, initialEndDay: moment.Moment) => {
        const startDay = initialStartDay.clone();
        const endDay = initialEndDay.clone();
        const day = startDay.clone();
        const result:CalendarMatrix = [];
        while (day.isBefore(endDay)) {
            // todo
            const cloneDay = day.clone();
            const currentDay:IDay = {
                date: cloneDay,
                formatDate: getFormatDay(day),
                isChecked: false,
                weekDayCount: cloneDay.weekday(),
            };
            if (!result.length) {
                result.push([currentDay]);
            } else {
                const lastWeek = result.length ? result[result.length - 1] : null;
                const lastDay = lastWeek?.length ? lastWeek[lastWeek.length - 1] : null;
                if (lastDay?.weekDayCount === 6) {
                    result.push([currentDay]);
                } else {
                    lastWeek?.push(currentDay);
                }
            }
            day.add(1, 'd');
        }
        return result;
    };
    const getDateList = (day: any, typeStart?: TypeStartDateList) => {
        const startMonthDay = getStartMonth(day);
        const endMonthDay = getEndMonth(day);
        if (typeStart === 'week') {
            const startInitialWeek = getStartWeek(startMonthDay);
            const endLastWeek = getEndWeek(endMonthDay);
            return getListDayFromPeriod(startInitialWeek, endLastWeek);
        }
        return getListDayFromPeriod(startMonthDay, endMonthDay);
    };
    const getIsHide = (day: IDay, dayInMidMonth: moment.Moment) => {
        const endMonth = getEndMonth(dayInMidMonth);
        const startMonth = getStartMonth(dayInMidMonth);
        return !day.date.isBetween(startMonth.clone().subtract(1, 'days'), endMonth.clone())
    };
    const getDayClasses = (day: IDay, dayInMidMonth: moment.Moment) => {
        const { date } = day;
        return clsx({
            [styles.labelDay]: true,
            [styles.selectDay]: date.isAfter(initDate) && date.isBefore(lastDate),
            [styles.hide]: getIsHide(day, dayInMidMonth),
            [styles.initDay]: date.isSame(initDate),
            [styles.lastDay]: date.isSame(lastDate),
            [`${styles.lastDay} ${styles.initDay}`]: lastDate?.isSame(initDate) && lastDate?.format('DD.MM.YYYY') === day.date.format('DD.MM.YYYY')
        })
    };
    const selectPeriodState = (day: IDay): any => {
        // eslint-disable-next-line no-useless-return
        const { date } = day;
        // if (getIsHide(day, 1)) return;
        if (!initDate && !lastDate) {
            setInitDate(date);
            setLastDate(date);
            setTypeSelect('last');
            return;
        }
        if (typeSelect === 'init') {
            if (date.isSame(lastDate) || date.isSame(initDate)) {
                setInitDate(date);
                setTypeSelect('init');
            } else if (date.isBefore(lastDate)) {
                setInitDate(date);
                setTypeSelect('last');
            } else if (date.isAfter(lastDate)) {
                setInitDate((lastDate as any).clone());
                setLastDate(date);
                setTypeSelect('init');
            }
        } else if (typeSelect === 'last') {
            if (date.isSame(lastDate) || date.isSame(initDate)) {
                setLastDate(date);
                setTypeSelect('last');
            } else if (date.isAfter(initDate)) {
                setLastDate(date);
                setTypeSelect('init');
            } else if (date.isBefore(initDate)) {
                setInitDate(date);
                setTypeSelect('last');
            }
        }
    };
    const getWeek = (week: any, dayInMidMonth: moment.Moment) => {
        return week.map((day: any) => (
            <div
                className={getDayClasses(day, dayInMidMonth)}
                key={`${day.formatDate}_${day.weekDayCount}`}
                onClick={() => selectPeriodState(day, )}
            >
                {day.date.format('D')}
            </div>
        ));
    };
    const getListCalendars = useMemo(() => {
        const list = calendars.map((calendar) => calendar.map((week, index) => (
            <div className={styles.weekContainer} key={`week_${index}`}>
                {getWeek(week, calendar[2][2]!.date)}
            </div>
        )))
        const listNodes = list.map((calendar, i) => (
            <div>
                <h2>{calendars[i][2][2]?.date.format('YYYY MMMM')}</h2>
                <div className={styles.wrapper}>
                    <div className={styles.subjectCalendar}>
                        <div className={styles.weekContainer}>
                            {ListNameDayInWeek.map((day) => (
                                <div className={`${styles.labelDay} ${styles.name}`} key={day}>
                                    {day}
                                </div>
                            ))}
                        </div>
                        {calendar}
                    </div>
                </div>
            </div>
        ))
        return listNodes
    }, [calendars,initDate, lastDate])

    useEffect(() => {
        setCalendars(MONTHS.map((monts) => getDateList(monts, 'week')));
    }, []);
    return (
    <div className={styles.conatinerCalendar}>
        {getListCalendars}
    </div>
    );
};

export default DatePicker;
