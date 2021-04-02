import React from 'react';
import Spinner from '../../asssets/images/load.gif'

const Loader = () => {
    return (
        <div style={{ backgroundColor: 'gray', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Spinner} width={80} height={80} />
        </div>
    )
}

export default Loader;