import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
    <nav>    
        <div className='logo-name'>
            hello
        </div> 
        <div className='links'>
            <ul>
                <li>
                    <Link className='linkBtn'to="/"> BUY </Link>
                </li>
                <li>
                    <Link className='linkBtn'to="/">SELL</Link>
                </li>
                <li>
                    <Link className='linkBtn'to="/">ABOUT</Link>
                </li>
                <li>
                    <Link className='linkBtn'to="/">SOCIAL</Link>
                </li>
                <li>
                    <Link className='linkBtn'to="/">CONTACT</Link>
                </li>
            </ul>
        </div> 
    </nav>

)

export default Navbar