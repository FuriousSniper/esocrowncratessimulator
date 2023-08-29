import { Link } from 'react-router-dom'
import './style.css'
const HeaderComponent = () => {
    return(
        <header className='header'>
            <Link to={'/'} className='headerLogo'>ESO Crown Crate Simulator</Link>
            <span className="badge">Beta</span>
        </header>
    )
}

export default HeaderComponent
