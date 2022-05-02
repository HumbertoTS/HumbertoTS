import React,{Component} from "react";
import dataJsonlistaclientes from '../DataJson/dataJsonlistaclientes.json'

const Complitacliente = (props)=>{
    
    //    console.log("idcat",props.idcat);
    
    const lstclientes =dataJsonlistaclientes.filter(x=>x.idcliente.toString()===props.idcliente.toString());
    
    return  <div className='col-9 row'> 
                { 
                   
                lstclientes.map((cliente,index)=>{
                    
                    var dirimage='../imagenes/nophoto.png'; 
                    if (cliente.url!=null) dirimage='../imagenes/'+cliente.url;    
                    return <div class="col-sm-6 col-lg-4" >
                            <div class="card h-100">
                            <a href="#">
                            <img src={dirimage} class="card-img-top" alt="..."/>
                            </a>
                            <div class="card-body">
                                <a class="text-primary" href="#">
                                    <h5 class="card-title">{cliente.nombres}</h5>
                                </a>
                                <p class="card-text">{cliente.apellidos}</p>
                                
                            </div>
                    </div>
                </div>
    
    
                        }
                    )
                }
            </div>
    
    }
    
    export default Complitacliente
    