import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '../store/auth/selectors/selector';
import { useCallback } from 'react';


export const useFetch = ({ initialState = {} }) => {

    const { token } = useSelector(selectAuthUser)|| {token:null} ;

    const [values, setValues] = useState(initialState);

    const [loading, setLoading] = useState(false);


    
    const dataServer =  useCallback(  async ({ data = {}, method = 'POST', url = '' }) => {
        setLoading(true);
        let option = {}
        if (method === 'GET') {
            option = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authToken': token
                }
            };
        } else {
            option = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authToken': token
                },
                method,
                body: JSON.stringify(data)
            };
        }


        return fetch(url, option).then(res => res.json())
            .then((data) => {
                setValues(data);
                return data;
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            });
    },[token]);

    return {
        values, loading, dataServer
    }
}