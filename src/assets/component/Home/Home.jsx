import { useEffect, useState } from "react";
import { data, Link } from "react-router";
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
        <Link to="/homedetails">
         <h1 className="text-3xl font-semibold pb-8">Your Friends : {friends.length}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                friends.map(friend=>(
                    <div key={friend.id} className="card bg-base-100 shadow-2xl pb-10 px-10">
                        <div>
                            <img src="public/assets/twitter.png"
                             alt="" 
                             className="w-full  rounded-full p-19"/>
                        </div>
                        <h1 className="text-center text-xl font-semibold ">{friend.name}</h1>
                        <p className="text-center text-gray-400 font-semibold pt-3">{friend.days_since_contact}d ago</p>
                      <div className="flex justify-center bg-amber-300 rounded-3xl mt-4">
                         {
                        friend.tags.find(tag=>
                           <button>{tag.tags}</button>
                        )
                       }
                      </div>
                        <div className="flex justify-center mt-4">
                            <button className="btn btn-accent rounded-3xl">{friend.status}</button>
                        </div>

                    </div>
                ))
            }
          </div>
        </Link>

       </div>
    );
};

export default Home;