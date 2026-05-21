import { Outlet } from "react-router-dom";
import {HeaderComponent} from '../components/HeaderComponent'
import {FooterComponent} from '../components/FooterComponent'

export function DefaultLayout() {
    return (
        <>
            <HeaderComponent/>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
                <Outlet />
            </main>
            <FooterComponent/>
        </>
    )
}