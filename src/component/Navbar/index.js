import "./index.css";
import FrameLogo from "../../assets/FrameLogo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={FrameLogo} alt="logo" />
      <ul>
        <li><a href="#">Product</a></li>
        <li><a href="#">Invest</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <div className="early-access"><span>Early access</span></div>
    </nav>
  );
}

export default Navbar;
