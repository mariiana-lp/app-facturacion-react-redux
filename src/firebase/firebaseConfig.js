
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv2JmFANAJ_1X04977N1Cps8jhAyxByKE",
  authDomain: "app-facturacion-react-redux.firebaseapp.com",
  projectId: "app-facturacion-react-redux",
  storageBucket: "app-facturacion-react-redux.appspot.com",
  messagingSenderId: "983218003405",
  appId: "1:983218003405:web:ff0ae1fbbfd6fc5f773884"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
 

