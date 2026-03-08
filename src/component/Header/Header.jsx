import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className='flex justify-between mb-3 px-5 align-middle border-b-mist-400 shadow' >
                <div className="left-section">
                    <Link to="/">

                        <img src="/src/assets/logo.png" alt="" className='w-20 ' /></Link>
                </div>
                <div className="right-section flex flex-row-reverse justify-center align-middle gap-10">
                    <span className='ri-sun-line flex m-auto font-bold text-xl color-mod border text-center justify-center align-middle pt-1.25 w-10 h-10 rounded-full' />
                    <div className='flex justify-between gap-20 mt-7'>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header