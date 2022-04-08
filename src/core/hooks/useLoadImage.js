
import { useState } from 'react';
import { fileUpload } from './../helper/fileUpload';

export const useLoadImage=()=>{

    const [loading,setLoading]=useState(false);

    const [response,setResponse]=useState(null);



    const cargarData=(file)=>{
        setLoading(true);
        return fileUpload(file).then(data=>{
            setResponse(data);
            return data;
        }).catch(err=>{
            console.log(err);
            return null;
        }).finally(()=>{
            setTimeout(()=>{
                setLoading(false);
            },0)
        });
    }

    return {
        loading,
        response,
        cargarData,
        setResponse
    }

}