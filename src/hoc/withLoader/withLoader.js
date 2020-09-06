import React, {useEffect, useMemo, useState} from 'react';
import Spinner from "../../components/Spinner/Spinner";

const withLoader = (WrappedComponent, axios) => {
    return props => {
        const [spinner, setSpinner] = useState(false);

        const icReq = useMemo(() => {
            return axios.interceptors.request.use(req => {
                setSpinner(true);
                return req;
            });
        }, []);

        const icRes = useMemo(() => {
            return axios.interceptors.response.use(res => {
                setSpinner(false);
                return res;
            });
        }, []);

        useEffect(() => {
            return () => axios.interceptors.request.eject(icReq);
        }, [icReq]);

        useEffect(() => {
            return () => axios.interceptors.response.eject(icRes);
        }, [icRes]);


        return (
            <>
                {spinner ? <Spinner/> : null}
                <WrappedComponent {...props}/>
            </>
        )
    }
};

export default withLoader;