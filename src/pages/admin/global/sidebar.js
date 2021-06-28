import React, { PureComponent } from 'react';
import { Samy } from 'react-samy-svg';
import Logo from '../../../styles/images/logo_white.svg'

class sidebar extends PureComponent {
    render() {
        return (
            <div className='sidebar-admin'>
                <Samy path={Logo}/>
                
            </div>
        );
    }
}

export default sidebar;