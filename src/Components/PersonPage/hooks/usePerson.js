import { useState, useEffect } from 'react';
import axios from 'axios';

const usePerson = () => {
    const [personList, setPersonList] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const url = 'https://swapi.dev/api/people';
        axios.get(url)
            .then((response) => {
                setPersonList(response.data.results)
                setIsLoaded(true)
            });
    }, []);
    return { personList, isLoaded };
}

export default usePerson;