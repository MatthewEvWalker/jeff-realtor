import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {

    return (

        <nav className='nav'>    
            <a className='logo-name'>
                WALKER REALTY
            </a> 
                <ul>
                    <li className='active'>
                        <Link className='link-btn'to="/"> BUY </Link>
                    </li>
                    <li>
                        <Link className='link-btn'to="/">SELL</Link>
                    </li>
                    <li>
                        <Link className='link-btn'to="/">ABOUT</Link>
                    </li>
                    <li>
                        <Link className='link-btn'to="/">SOCIAL</Link>
                    </li>
                    <li>
                        <Link className='link-btn'to="/">CONTACT</Link>
                    </li>
                </ul> 
        </nav>

    )
}

