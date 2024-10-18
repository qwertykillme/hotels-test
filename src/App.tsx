import { useEffect } from "react";
import AppRoutes from "./router";
import "@styles/globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store/store";

function App() {

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      console.log('Telegram WebApp initialized');
      window.Telegram.WebApp.ready();
    } else {
      console.error('Telegram WebApp not found');
    }
  }, []);
  
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
