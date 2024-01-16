import React, { useEffect } from 'react'
import Banner from '../components/banner/Banner'
import Foodlist from '../components/foodlist/Foodlist'
import { fetchFoods} from "../lib/api"

import useHttp from '../lib/hooks/useHttp'

const AllFoods = () => {
     const { data: foods, status, error, sendRequest } = useHttp(fetchFoods);
    
    useEffect(() => {
        sendRequest();
    }, []);

    if (error && status === 'completed') {
        return <p>{ error }</p>
    }

    if (!error && status === 'pending') {
        return <p> Loading...... </p>
    }
  return (
    <>
      <Banner /> 
      <Foodlist foods={foods}/>
    </>
  )
}

export default AllFoods
