import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Cabecera extends Component {
  render(){
  return(<nav className="navbar navbar-expand-md navbar-ligth bg-dark">
  <div className="container">
  <span className="float-left"> 
                        <a className="navbar-brand" href="#">
                            <img src="imagenes/logo.png" with="250" height="50" alt=""/>
                        </a>
                    </span>
      <div className="collapse navbar-collapse text-center" id="navabarsExample09" >
          <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                  <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/cliente/0">Cliente</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/empleado/0">Empleado</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/sede/0">Sede</Link>
              </li>

          </ul>
      </div>
     

  </div>
</nav>)
}

};

export default Cabecera;