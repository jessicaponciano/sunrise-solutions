import React, { PureComponent } from 'react';
import Navbar from './global/navbar'
import Sidebar from './global/sidebar'

class dashboard extends PureComponent {

    render() {
        return (
            <div>
                <Navbar/>
                <Sidebar/>
            </div>
        );
    }
}

export default dashboard;