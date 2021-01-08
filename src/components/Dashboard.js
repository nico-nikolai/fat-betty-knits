import { Component } from 'react';
import Header from './Header';
import Shop from './Shop';

class Dashboard extends Component {


    render() {
        return (
            <div>
                <Header />
                <Shop />
            </div>
        )
    }
}

export default Dashboard;