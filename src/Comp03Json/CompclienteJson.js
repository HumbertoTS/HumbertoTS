import React,{Component} from "react";
import dataJsonlistaclientes from '../DataJson/dataJsonlistaclientes.json'
import { Link } from 'react-router-dom'


class listaclienteJson extends Component{
    render ()
    {
        return <div className="col-3">
            <p className="h5 text-secondary">Clientes ({dataJsonlistaclientes.length})  </p>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href="#" className="text-secondary">Clientes</a></li>
                    {  dataJsonlistaclientes.map( (cliente,indice) => {
                       
                        
                        return <li className="list-group-item"  key={cliente.idcliente}> 
                                    <Link className="text-secondary" to={`/cliente/${cliente.idcliente}`}>{cliente.nombres}</Link>
                               </li>

                        }

                        )
                    }

                </ul>

            </div>
        </div>

    }
}

export default listaclienteJson