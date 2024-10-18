import { useEffect, useState } from 'react';


const useTelegram = () => {
  const [user, setUser] = useState<WebAppUser | null>(null); 
  const tg = typeof window !== 'undefined' ? window.Telegram?.WebApp : null;

  useEffect(() => {
    if (tg) {
      tg.ready();
      console.log('tg.initDataUnsafe:', tg.initDataUnsafe);
      setUser(tg?.initDataUnsafe?.user || null);
    }
  }, [tg]);

  const onClose = () => {
    tg?.close();
  };

  const onToggleButton = () => {
    if (tg?.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg?.MainButton.show();
    }
  };

  return { 
    onClose, 
    onToggleButton, 
    tg, 
    user 
  };
};

export default useTelegram;
