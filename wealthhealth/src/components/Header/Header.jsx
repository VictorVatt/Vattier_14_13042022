import logo from '../../assets/HRnet_logo.png'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'

function Header() {
    return (
        <div className='header-container'>
            <img className='header-logo' src={logo} alt='logo HRnet'/>
        </div>
    )
}

export default Header