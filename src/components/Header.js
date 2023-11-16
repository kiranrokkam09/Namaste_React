import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return (<div className='header'>
        <div className='logocontainer'>
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className='navlinks'>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>)
}

export default Header;