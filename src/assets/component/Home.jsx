import React, { useEffect, useState } from 'react';
import Bannar from './bannar/Bannar';
import Selectcard from './select/Selectcard';

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
            <Selectcard></Selectcard>

           <div className='max-w-10/12 mx-auto'>
             <h1 className='font-semibold text-xl text-green-900'>Your Friends : {users.length}</h1>


           </div>
            
          
           
           
          
        </div>
    );
};

export default Home;