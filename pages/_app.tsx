import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/com/Layout"
import { useRef } from "react";
import Global from "../services/global";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Global>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Global>
     
  
   
  )
      
}
