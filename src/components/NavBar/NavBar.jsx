import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import userPic from "../../../src/assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

const NavBar = () => {

    const { user, loading, userSignOut, } = useContext(AuthContext);
    console.log(user);

    const [theme, SetTheme] = useState('light');

    useEffect(() => {

        localStorage.setItem('theme', theme);

        const getLocalTheme = localStorage.getItem('theme');

        document.querySelector('html').setAttribute('data-theme', getLocalTheme);

    }, [theme]);

    const handleThemeIcon = (e) => {

        if (e.target.checked) {
            SetTheme('dark');
        } else {
            SetTheme('light');
        }

    }

    if (loading) {
        return <Loader></Loader>
    }

    const handleLogOutButton = () => {
        userSignOut()
            .then(() => {
                toast('User Logout successful.');
            }).catch((error) => {
                toast(error);
            });
    }

    const links = <>
        <NavLink className={({ isActive }) => isActive ? "bg-sky-900 text-white px-2 lg:px-3 xl:px-4 py-2 rounded font-medium" : "bg-transparent px-2 lg:px-3 xl:px-4 py-2 rounded"
        } to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "bg-sky-900 text-white px-2 lg:px-3 xl:px-4 py-2 rounded font-medium" : "bg-transparent px-2 lg:px-3 xl:px-4 py-2 rounded"
        } to="/allArtAndCraftItems">All Art & Craft Items</NavLink>
        <NavLink className={({ isActive }) => isActive ? "bg-sky-900 text-white px-2 lg:px-3 xl:px-4 py-2 rounded font-medium" : "bg-transparent px-2 lg:px-3 xl:px-4 py-2 rounded"
        } to="/addCraftItem">Add Craft Item</NavLink>
        <NavLink className={({ isActive }) => isActive ? "bg-sky-900 text-white px-2 lg:px-3 xl:px-4 py-2 rounded font-medium" : "bg-transparent px-2 lg:px-3 xl:px-4 py-2 rounded"
        } to="/myArtAndCraftList">My Art & Craft List</NavLink>

    </>

    return (
        <div>
            <div className="flex justify-between items-center mb-6">

                <div className="btn">
                    <a href="/"><h6 className="font-raleway text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold"><span className="text-orange-500">C</span>
                        <span className="text-purple-500">R</span>
                        <span className="text-green-500">A</span>
                        <span className="text-yellow-500">F</span>
                        <span className="text-teal-500">T</span>
                        <span className="text-sky-900">PLANET</span>
                    </h6></a>
                </div>

                <label onChange={handleThemeIcon} className="flex cursor-pointer gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>

            </div>

            <div className="navbar font-poppins text-neutral-500 font-normal">

                <div className="navbar-start z-20">

                    <div className="dropdown">

                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 font-poppins">
                            {links}
                        </ul>

                    </div>

                    <div className="navbar-center hidden lg:flex">

                        <ul className="menu menu-horizontal text-base gap-x-2 xl:gap-x-6">
                            {links}
                        </ul>

                    </div>

                </div>

                <div className="navbar-end gap-x-2 md:gap-x-3 xl:gap-x-5">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                            <div className="w-6 md:w-8 xl:w-10 rounded-full">
                                {
                                    user ? <img alt="...Loading" src={user.photoURL} /> : <img alt="...Loading" src={userPic} />
                                }
                            </div>
                        </div>

                        {
                            user && <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36 md:w-52">
                                <li><a>{user.displayName}</a></li>
                                <li onClick={handleLogOutButton}><a>Logout</a></li>
                            </ul>
                        }

                    </div>

                    <Link to="/logIn" className={`px-2 ${user ? 'hidden': 'flex'} md:px-3 xl:px-6 py-1 md:py-2 bg-green-500 hover:bg-green-600 text-white rounded md:rounded lg:rounded-md xl:rounded-lg text-xs md:text-sm  xl:text-lg uppercase`}>LogIn</Link>
                    <Link to="/register" className="px-2 md:px-3 xl:px-6 py-1 md:py-2 bg-sky-900 hover:bg-sky-950 text-white rounded md:rounded lg:rounded-md xl:rounded-lg text-xs md:text-sm  xl:text-lg uppercase">Register</Link>
                </div>

            </div>

        </div>
    );
};

export default NavBar;



