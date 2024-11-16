import "@/styles/globals.css";

//INTERNAL IMPORT//
import { NavBar, Footer } from "../Components";
import {Pledge_Fund_Context, Pledge_Fund_Provider} from '../Context/Plegde_Fund'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Pledge_Fund_Provider>
        <NavBar/>
        <Component {...pageProps} />;
        <Footer/>
      </Pledge_Fund_Provider>
    </>
  );
}
