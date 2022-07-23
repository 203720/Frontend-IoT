import style from '../style/navbar.css'


const logout =()=>{
    localStorage.removeItem('user')
}


export const Navbar = () => {
    return (
        <div className={style.container}>
            <nav className={style.nav}>
                <a className={style.aMenu} href="http://localhost:3000/dashboard">Dashboard</a>     
                {/* <a className={style.a} href="http://localhost:3000/menu/Historial">Historiales</a> */}
                <div className={style.btnLogout} >
                    <a className='btn btn-danger' href="http://localhost:3000/" onClick={logout} >Logout</a>
                </div>
            </nav>
        </div>
    )
}