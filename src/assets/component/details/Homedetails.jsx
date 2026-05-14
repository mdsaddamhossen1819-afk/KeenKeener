
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { DataContext } from '../context/FriendContext';

const Homedetails = () => {
  const {handlecall,handletext,handlevideo}= useContext(DataContext)
    const {id} = useParams();
    const data =useLoaderData();
    const friend = data.find(h=>h.id == id);
    return (
       <div className="max-w-10/12 mx-auto p-5 bg-gray-50 rounded-xl font-sans text-slate-700 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        
        <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100">
          <img 
            src={friend.image} 
            alt={name} 
            className=""
          />
        
          <div className="flex gap-2 my-2">
            <span className="px-3 py-0.5 bg-red-500 text-white text-xs rounded-full">{friend.name}</span>
    
          </div>
          <p className="text-sm italic text-gray-500 mt-2">"{friend.bio}"</p>
          <p className="text-[10px] text-gray-400 mt-1">Preferred: {friend.email}</p>
          
      
          <div className="w-full mt-6 space-y-2">
            <button className="w-full flex items-center justify-center gap-2 py-2 shadow-2xl">
               Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-2 shadow-2xl">
               Archive
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-2 text-red-500 shadow-2xl">
             Delete
            </button>
          </div>
        </div>

    
        <div className="md:col-span-9 space-y-4">
          
        
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-2xl font-bold text-slate-800">62</div>
              <div className="text-xs text-gray-400">Days Since Contact</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-2xl font-bold text-slate-800">30</div>
              <div className="text-xs text-gray-400">Goal (Days)</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-2xl font-bold text-teal-700">Feb 27 , 2026</div>
              <div className="text-xs text-gray-400">Next Due</div>
            </div>
          </div>

        
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold text-slate-700">Relationship Goal</h3>
              <p className="text-sm text-gray-500 mt-1">Connect every <span className="font-bold text-slate-800"> days</span></p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition border border-gray-100">
            Edit
            </button>
          </div>

        
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={handlecall} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl">
            
                <span className="text-sm font-medium">Call</span>
              </button>
              <button onClick={handletext} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl">
                
                <span className="text-sm font-medium">Text</span>
              </button>
              <button onClick={handlevideo} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl ">
                
                <span className="text-sm font-medium">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};



export default Homedetails;