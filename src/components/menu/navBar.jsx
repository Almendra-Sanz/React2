import CartWidget from './CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <img src="/public/Logo.png" alt="logo" className='logo'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">tata ArT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Variedades
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Grabados</a></li>
            <li><a className="dropdown-item" href="#">Pinturas al oleo</a></li>
            <li><a className="dropdown-item" href="#">Esculturas</a></li>
          </ul>
        </li>
      </ul>
      <CartWidget/>
     </div>
  </div>
</nav>
  )
}

export default NavBar