import style from '../style/navbar.css'


const logout =()=>{
    localStorage.removeItem('user')
}


export const Navbar = () => {
    return (
        <div>
            <nav className='barra'>
            <a className='logo barra-link'>VortexSoft</a>
            <button className='nav-toggle' aria-label="Abrir menú">
                <i className='fa-solid fa-bars'></i>
            </button>
            <ul className='nav-menun'>
                <li className='nav-menu-seccion'><a className='nav-menu-liga barra-link' href="http://localhost:3000/dashboard">Tablero</a></li> 
                <li className='nav-menu-seccion'><a className='nav-menu-liga barra-link' href="http://localhost:3000/dashboard">Historial</a></li>   
                <li className='nav-menu-seccion'><a className='nav-menu-liga barra-link' href="http://localhost:3000/calculos">Muestras</a></li>   
                <li className='nav-menu-seccion'><a className='nav-menu-liga barra-link' href="http://localhost:3000/" onClick={logout}>Cerrar sesión</a></li>    
            </ul>
            </nav>
        </div>
    )
}