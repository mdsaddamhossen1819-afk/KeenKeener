import { useEffect, useState } from "react";
import {  Link, } from "react-router";
import Bannar from "../bannar/Bannar";
import Selectcard from "../select/Selectcard";


const Home = () => {
    const [friends,setfriends] = useState([]);

    useEffect(()=>{
        fetch("/friends.json")
        .then(res=>res.json())
        .then(data=> setfriends(data));
        
    },[]);

    return (
       <div className="max-w-10/12 mx-auto mt-10">

        <Bannar></Bannar>
        <Selectcard></Selectcard>
       
         <h1 className="text-3xl font-semibold pb-8">Your Friends : {friends.length}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                friends.map(friend=>(
                   <Link to={`/homedetails/${friend.id}`}>
                 <div className="max-w-10/12 mx-auto bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center">

               <div className="">
                 <img 
                   src={friend.image} 
                   alt={name} 
                   className="w-full h-full object-cover"
                 />
               </div>

      
               <h3 className="text-gray-800 font-bold text-lg mb-3">
                 {friend.name}
               </h3>
               <p className="text-gray-500 mb-2">62d ago</p>

               {
                 friend.tags.find(tag=>(
                    <h1>{tag}</h1>
                 ))
               }

      
              <div className="flex flex-col w-full items-center my-3">
                <button className={`status-btn ${friend.status === 'active' ? 'bg-green-600 text-white rounded-xl py-1 px-4' : 'bg-red-600 text-white rounded-xl py-1 px-4'}`}>
                 {friend.status}
               </button>
                </div>
                </div>
                   </Link>

                   
                ))
            }
          </div>
    

       </div>
    );
};

export default Home;