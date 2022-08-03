import React from "react";
import MenuHeader from "../components/MenuHeader.js";
import TopHated from "./TopHated.js";
import ProductMenu from "./ProductMenu.js";

export default function Menu(){
    return(
        <section className="menu">
            <MenuHeader />
            <TopHated />
            <ProductMenu />
            <ProductMenu />
        </section>
    )
}