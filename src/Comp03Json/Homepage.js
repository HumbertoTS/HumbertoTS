import React, {Component} from 'react'
import Cabecera from '../Comp01Estatitos/Componente';
import Pie from '../Comp01Estatitos/componentepie';
import listaclienteJson from "../Comp03Json/CompclienteJson";
import listaempleadoJson from "../Comp03Json/CompempleadoJson";
import listagymJson from "../Comp03Json/CompgimnasioJson";
import Clientelista from "../Comp03Json/Clientelista";
import { BrowserRouter as Router, Routes, Route, Navlink, Link, useParams } from "react-router-dom";


class Homepage extends Component {
    render() {
        return <Router>
            <div>
                <Cabecera/>
            <main role="main" className="container">
            
            <Routes>
            <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/cliente" element={<Cliente/>}/>
                <Route path="/empleado" element={<Empleado/>}/>
                <Route path="/sede" element={<Sede/>}/>
            </Routes>
            </main>
            <Pie/>
            </div>
        </Router>
    } 
}

  
export default Homepage;
  
  function Cliente(){
    const {idcliente}=useParams();

    return  <div className="container">
                
                    <div className="row">
                        <Clientelista idcliente={idcliente}/> 
                        
                     </div>
                
            </div> 
}

  function Empleado(){
    const {idempleado}=useParams();

    return  <div className="container">
                
                    <div className="row">
                        <listaempleadoJson idempleado={idempleado}/> 
                        
                     </div>
                
            </div> 
}
function Sede(){
    const {idgym}=useParams();

    return  <div className="container">
                
                    <div className="row">
                        <listagymJson idgym={idgym}/> 
                        
                     </div>
                
            </div> 
}



function Inicio(){
    return <h2>Bienvenido</h2>
}


  