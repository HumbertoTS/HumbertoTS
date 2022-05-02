import React,{Component} from "react";
import dataJsonlistagimnasio from '../DataJson/dataJsonlistagimnasio.json'
import { Link } from 'react-router-dom'


class listaimnasioJson extends Component{
    render ()
    {
        return <div className="col-3">
            <p className="h5 text-secondary">Gimnasio ({dataJsonlistagimnasio.length})  </p>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><a href="#" className="text-secondary">Gimnasio</a></li>
                    {  dataJsonlistagimnasio.map( (gimnasio,indice) => {
                       
                        
                        return <li className="list-group-item"  key={gimnasio.idgym}> 
                                    <Link className="text-secondary" to={`/gimnasio/${gimnasio.idgym}`}>{gimnasio.direccion}</Link>
                               </li>

                        }

                        )
                    }

                </ul>

            </div>
        </div>

    }
}

export default listaimnasioJson