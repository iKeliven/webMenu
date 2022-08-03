import React from "react";
import Header from "./Header.js";
import Menu from "./Menu.js";
import Navbar from "../components/Navbar.js"


export default function Home(){
    return(
        <main>
            <Navbar />
            <Header />
            <Menu />
        </main>
    )
}