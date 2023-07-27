import { useState, useEffect, useMemo } from 'react';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    //  console.log(url)
    const url = `http://localhost:4000/farms`
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }


                const jsonData = await response.json();
                setData(jsonData.data);
                setLoading(false);
                //  setError(null)

            } catch (error) {

                setLoading(false);
                setError(`something wrong`);

            }
        };
        fetchData();
    }, [data, url])

    return { data, loading, error };
};

export default useFetch;