import { NavLink } from "react-router-dom";
import "./user.scss";

const User = () => {
    return(
        <div className="user">
            <NavLink to="/signIn" className={({ isActive }) => `${isActive ? "a-active" : ""}`}>{"Sign In"}</NavLink>
            <NavLink to="/signUp" className={({ isActive }) => `${isActive ? "a-active" : ""}`}>{"Sign Up"}</NavLink>
        </div>
    )
}

export { User };