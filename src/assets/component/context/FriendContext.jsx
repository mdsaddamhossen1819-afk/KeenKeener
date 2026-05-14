import React, { toast, useEffect, useState } from 'react';
import { createContext } from 'react-router';
export const DataContext = createContext();

const FriendContext = ({children}) => {
    const [call,setcall] =useState([]);
    const [text ,settext]= useState([]);
    const [video,setvideo]=useState([]);
    const [active,setactive]=useState("call");
useEffect(()=>{
    fetch('/friends.json')
    .then(res=>res.json())
    .then(data =>{
       setcall(
        data.filter(i=>i.category==="call")
       );
       settext(
        data.filter(i=>i.category==="text")
       );
       setvideo(
        data.filter(i=>i.category==="video")
       )
    })
},[]);

const handlecall =()=>{
    setactive("call");
     toast.success("Call data selected");
}
const hadletext=()=>{
    setactive("text");
     toast.info("Text data selected");
}
const hadlevideo=()=>{
    setactive("video");
     toast.success("Video data selected");
}
    return (
       <DataContext.Provider value={{call,text,video,active,hadletext,hadlevideo,handlecall}}>{children}</DataContext.Provider>
    );
};

export default FriendContext;