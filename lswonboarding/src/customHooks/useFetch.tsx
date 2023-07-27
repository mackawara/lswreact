import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }


                const jsonData = await response.json();


                setData(jsonData);
                setLoading(false);

            } catch (error) {
              
                setError({message:'Something went wrong'});
                setLoading(false);
            }
        };

        fetchData();
    });

    return { data, loading, error };
};

export default useFetch;