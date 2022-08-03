import React from "react";
import SearchArea from "./SearchArea.js"
import DropdownMenu from "./DropdownMenu.js"
import "../styles/styles.scss"

export default function MenuHeader(){
    return(
        <component className="menu-header web-menu--body--space-between">
            <DropdownMenu />
            <SearchArea />
        </component>
    )
}