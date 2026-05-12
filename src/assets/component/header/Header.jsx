import { NavLink } from "react-router";


const Header = () => {
    const links = (
        <>
        <li className="text-2xl"><NavLink to={'/'}   
        className={({ isActive }) =>
          isActive ? "text-green-500 font-bold" : ""
        }>Home</NavLink></li>
        <li className="text-2xl"><NavLink to={'/time'}
          className={({ isActive }) =>
          isActive ? "text-green-500 font-bold" : ""
        }
        >Timeline</NavLink>
        </li>
        <li className="text-2xl"><NavLink to={'/stats'}
          className={({ isActive }) =>
          isActive ? "text-green-500 font-bold" : ""
        }
        >Stats</NavLink></li>
        </>
    )
    return (
       <div className="navbar bg-base-100 shadow-sm px-15">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
   <h1 className="text-green-900 text-3xl font-semibold"><span className="font-bold">Keen</span>Keeper</h1>
  </div>
  <div className="navbar-end hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
 
</div>
    );
};

export default Header;