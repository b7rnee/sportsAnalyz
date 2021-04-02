import React from 'react'
import Loader from '../components/Loader/loader';

const useLoader = () => {

    const [loading, setLoading] = React.useState(false);

    return [
        loading ? <Loader /> : null,
        () => setLoading(true),
        () => setLoading(false)
    ]

}

export default useLoader;