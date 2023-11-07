import { Text, View } from 'react-native'
import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UseFetch = () => {

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const FetchPackages = async () => {
        setLoading(true);
        const id = JSON.parse(await AsyncStorage.getItem("userID"));
        try {
            const response = await axios.get(`https://sendit-bcknd.onrender.com/api/package/${id}`)
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
        console.log(data);
    };

    React.useEffect(()=> {
        FetchPackages();
    }, []);

    const Refresh = () => {
        setLoading(true)
        FetchPackages();
    }

  return {data, loading, Refresh, error}
}

export default UseFetch;
