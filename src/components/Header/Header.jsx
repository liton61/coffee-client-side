import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="nav-container flex justify-between items-center mt-3 mx-7">
            <img className="w-24" src="/logo.png" alt="" />
            <nav className="flex nav-list">
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#f09c2e] underline" : ""}>
                            Home
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/addCoffee" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#f09c2e] underline" : ""}>
                            Add Coffee
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/users" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#f09c2e] underline" : ""}>
                            Users
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/signUp" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#f09c2e] underline" : ""}>
                            Sign Up
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#f09c2e] underline" : ""}>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;