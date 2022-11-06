import {NavLink, Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {
  return (
    <>
      <header className="app-header">
        <div className="app-header__wrapper">
          {/*<NavLink to="/" className={({isActive}) => isActive ? "active-link" : "app-link"}>Home</NavLink>*/}
          {/*<NavLink to="/posts" className={({isActive}) => isActive ? "active-link" : "app-link"}>Blog</NavLink>*/}
          {/*<NavLink to="/about" className={({isActive}) => isActive ? "active-link" : "app-link"}>About</NavLink>*/}
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/posts">Blog</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer>2022</footer>
    </>
  );
};

export default Layout;
