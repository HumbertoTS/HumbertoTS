import React, {Component} from 'react'
import Cabecera from '../Comp01Estatitos/Componente';
import Pie from './componentepie';

class Homepage extends Component {
render (){
    return (<div>
        <Cabecera/>
        Bienvenido 
        <Pie/>
    </div>)
}
}

  
  export default Homepage;
  