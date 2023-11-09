import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/red">Red</Link>
            <Link to="/yellow">Yellow</Link>
            <Link to="/orange">Orange</Link>
            <Link to="/green">Green</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/purple">Purple</Link>
        </div>
    );
}

export default NavBar;
