import React,{Component} from "react";
import dataJsonlistaempleado from '../DataJson/dataJsonlistaempleado.json'
import { Link } from 'react-router-dom'


class listaempleadoJson extends Component{
    render ()
    {
        return <div className="col-3">
            <p className="h5 text-secondary">Empleado ({dataJsonlistaempleado.length})  </p>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href="#" className="text-secondary">Empleado</a></li>
                    {  dataJsonlistaempleado.map( (empleado,indice) => {
                       
                        
                        return <li className="list-group-item"  key={empleado.idempleado}> 
                                    <Link className="text-secondary" to={`/cliente/${empleado.idempleado}`}>{empleado.nombres}</Link>
                               </li>

                        }

                        )
                    }

                </ul>

            </div>
        </div>

    }
}

export default listaempleadoJson