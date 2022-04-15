import logo from '../../assets/HRnet_logo.png'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'

function Header() {
    return (
        <div className='header-container'>
            <img className='header-logo' src={logo} alt='logo HRnet'/>
            <Link className='header-link' to={'/list'}>View current employee</Link>
        </div>
    )
}

export default Header