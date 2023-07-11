import React, { useEffect, useState } from "react";
import Axios from './Axios/Axios'
import AxiosNav from './Axios/AxiosNav'
import { Route, Routes } from 'react-router'
import IzbrannAxios from './Axios/IzbrannAxios'
import axios from 'axios'
export default function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setApiData(res.data);
    });
  }, [ ]);
  
  return (
    <div>
      <AxiosNav/>
      <Routes>
        <Route path='/' element={<Axios apiData={apiData}/ >}/>
        <Route path= 'izbrann' element={<IzbrannAxios/>}/>
      </Routes>
    </div>
  )
}
