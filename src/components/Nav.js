import whiteLogo from "../images/tinder_logo_white.png"
import colorLogo from "../images/color-logo-tinder.png"


const Nav = ({minimal, authToken, setShowModal}) => {
    
    const handleClick = () => {
        setShowModal(true)
    }
    return (
    <nav>
        <div className = "logo-container">
            <img className="logo" src = {minimal ? colorLogo : whiteLogo}/>
        </div>


        {!authToken && !minimal && <button className = 'nav-button' onClick = {handleClick}>Log In</button>}

    </nav>

    );
  }
  
  export default Nav;
  