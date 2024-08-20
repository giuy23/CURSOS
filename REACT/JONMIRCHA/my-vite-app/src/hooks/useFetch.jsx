//Cuando es un Hook el nombre del archivo se empieza por minúscula para que react entienda qu es un hook

import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                let res = await fetch(url);

                if (!res.ok) {
                    throw {error:true, status:res.status, statusText:!res.statusText ? "Ocurrió un error": res.statusText}
                }

                let data = await res.json();

                setIsPending(false);
                setData(data);
                setError({error:false});
            } catch (error) {
                setIsPending(true);
                setError(error);
            }
        };

        getData(url);
    },[url]);

    return {data, isPending, error};
}
