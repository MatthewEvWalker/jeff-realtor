import { NavLink } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {

    return (

        <footer className='footer'>    
            Footer
                <ul>
                    <li>
                        <NavLink exact="true" activeclassName='active' className='link-btn'to="/"> HOME </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" activeclassName='active' className='link-btn'to="/buy"> BUY </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" activeclassName='active' className='link-btn'to="/sell">SELL</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" activeclassName='active' className='link-btn'to="/about">ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" activeclassName='active' className='link-btn'to="/social">SOCIAL</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" activeclassName='active' className='link-btn'to="/contact">CONTACT</NavLink>
                    </li>
                </ul> 
        </footer>

    )
}

