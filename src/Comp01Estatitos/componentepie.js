import React ,{Component} from 'react';

class Pie extends Component{

    render(){
        return <nav className='navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark'>
            <div className='container'>
                <a className='navbar-brand'>Gold Gym</a>
                <p className='text-secondary'>&copy;2022</p>
            </div>
        </nav>
    }
}
export default Pie;