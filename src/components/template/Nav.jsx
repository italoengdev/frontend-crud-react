import "./Nav.css"
import React from "react"
import NavA from "./NavA"

export default props =>
  <aside className="menu-area">
    <nav className="menu">
            {/* Refatorar em casa! */}
            <NavA icon="home" title="Início"
        to="/"/>
             
            <NavA icon="users" title="Usuários"
        to="/users"/>
        </nav>
  </aside>