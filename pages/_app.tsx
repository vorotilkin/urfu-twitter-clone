import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Layout from '@/components/Layout'
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import {Toaster} from 'react-hot-toast'
import EditModal from "@/components/modals/EditModal";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Toaster/>
            <EditModal/>
            <RegisterModal/>
            <LoginModal/>
            <Layout>
                <Component {...pageProps} />;
            </Layout>
        </>

    )


}
