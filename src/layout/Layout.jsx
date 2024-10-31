import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from '../shared/navbar/Navbar'
//import Footer from '../shared/footer/Footer'
import { ReactLenis, useLenis } from 'lenis/react'

export default function Layout() {

  return (
    <>
    <ReactLenis root>
        <Navbar/>
        <Outlet/>
        <ScrollRestoration />
    </ReactLenis>
    </>
  )
}
