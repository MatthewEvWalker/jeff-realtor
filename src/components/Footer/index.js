import { NavLink } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {

    return (

        <footer className='footer'>    
                <ul>
                    <li>
                        <NavLink exact="true" activeclassName='active' className='link-btn'to="/"> ABOUT </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" activeclassName='active' className='link-btn'to="/buy"> CAREERS </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" activeclassName='active' className='link-btn'to="/sell">CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" activeclassName='active' className='link-btn'to="/about">PLACEHOLDER</NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" activeclassName='active' className='link-btn'to="/social">SOMETHING</NavLink>
                    </li>
                </ul> 
        </footer>

    )
}

