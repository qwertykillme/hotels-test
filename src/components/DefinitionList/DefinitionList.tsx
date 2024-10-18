import styles from "./styles.module.scss";

import React, { useState } from "react";

interface DefinitionListProps {
  items: { [key: string]: string | number }[];
  title?: string;
}

const DefinitionList: React.FC<DefinitionListProps> = ({ items, title }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (value: number) => {
    navigator.clipboard.writeText(value.toString());
    setCopied(value.toString());
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <dl className={styles.dl}>
      <div className={styles.title}> {title} </div>
      {items.map((item, index) =>
        Object.entries(item).map(([key, value]) => (
          <div key={index + key} className={styles.wrapper}>
            <dt className={styles.dt}>{key}:</dt>
            <dd className={styles.dd}>
              {typeof value === "number" ? (
                <span
                  className={styles.numberValue}
                  onClick={() => handleCopy(value)}
                >
                  {value}
                  {copied === value.toString() && <span> (скопировано!)</span>}
                </span>
              ) : (
                <span className={styles.textValue}>{value}</span>
              )}
            </dd>
          </div>
        ))
      )}
    </dl>
  );
};

export default DefinitionList;
