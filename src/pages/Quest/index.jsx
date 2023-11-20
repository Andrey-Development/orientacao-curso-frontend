import React, { useLayoutEffect, useState } from 'react';
import api from '../../services/api';

function Quest() {
const [test, setTest] = useState();

useLayoutEffect(() => {
    async function fetchData() {
        try{
            const response = await api.get('/test');
            // setTest(response.data);
            console.log(response.data);
            setTest(response.data);
        } catch (e){
            console.error(e);
        }
      }
  
      fetchData();
}, []);

  return (
    <div style={{color: 'white'}}>
      {test ? test : 'carregando'}
    </div>
  )
}

export default Quest;
