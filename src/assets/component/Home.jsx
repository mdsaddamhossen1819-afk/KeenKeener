import React, { useEffect, useState } from 'react';
import { data } from 'react-router';
import Bannar from './bannar/Bannar';

const Home = () => {
    const [users,setusers] =useState([]);
    useEffect(()=>{
        fetch('')
        .then(res=>res.json())
        .then(data=>setusers(data));

    },[]);
    return (
        <div>
            <Bannar></Bannar>

           <div className='max-w-10/12 mx-auto'>
             <h1>Your Friends : {users.length}</h1>


           </div>
            
          
           
           
          
        </div>
    );
};

export default Home;