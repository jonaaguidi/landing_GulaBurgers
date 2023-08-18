import "./Navbar.css"
import Logo from "../../assets/imgs/logo1.png"

const Navbar = () => {
    return (
        <nav className="navBar">
            <img src={Logo} alt="logotipo" className="logo" />
            
        </nav>
    )
}

export default Navbar