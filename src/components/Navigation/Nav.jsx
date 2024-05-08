import MainNav from "./MainNav";
import TopBar from "./TopBar";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="Nav">
      <TopBar />
      <MainNav />
    </nav>
  );
};

export default Nav;
