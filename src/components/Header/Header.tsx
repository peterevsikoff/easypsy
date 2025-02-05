import { NavLink } from "react-router-dom";
import "./header.scss";
import { User } from "../User";
import { Burger } from "../media";
import { useState } from "react";

const Header = () => {
    const [show, setShow] = useState(false);

    return(
        <header className={`header${show ? " header-active" : ""}`}>
            <div className="container">
                <div className="section-tile">
                    <div className="header-wrap">
                        Logo
                        <div className={`header-right-side${show ? " nav-active" : ""}`} onClick={() => {if(show) setShow(false)}}>
                            <nav className="navigation">
                                <NavLink to="/" className={({ isActive }) => `${isActive ? "a-active" : ""}`}>{"Home"}</NavLink>
                                <NavLink to="/works" className={({ isActive }) => `${isActive ? "a-active" : ""}`}>{"Works"}</NavLink>
                                <NavLink to="/about" className={({ isActive }) => `${isActive ? "a-active" : ""}`}>{"About"}</NavLink>
                                <NavLink to="/admin" className={({ isActive }) => `${isActive ? "a-active" : ""}`}>{"Admin"}</NavLink>
                            </nav>
                            <User/>
                        </div>
                        <button className={`btn-burger${show ? " btn-burger-active" : ""}`} onClick={() => setShow(!show)}>
                            <Burger/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header };