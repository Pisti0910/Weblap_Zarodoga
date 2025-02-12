import { useState,useEffect } from "react";
import Navbar from "./Navbar";

const Rangok=()=>{
    const [adatok,setAdatok] =useState([])

    const letoltes=async ()=>{
        let x=await fetch("http://localhost:3000/Rangok")
        let y=await x.json()
        setAdatok(y)            
    }
  
    useEffect(()=>{
        letoltes()
    },[])

    return (
        <div>
            <Navbar />
            <div styles={{textAlign:'center',border:'5px solid black',margin:'5px'}}>
                <h1>Rangok</h1>
                <p>Felhasználók:</p>
                </div>
                {
                       adatok.map((item, key)=>(
                        <div key={key} style={{textAlign:'center',border:'5px solid black',margin:'5px', padding:'5px' }}>{item.felh_email} <p>{item.rang_ertek}</p></div>
                    )
                    )
                }
            </div>
    )
    
}
const styles = {
    content: {
      padding: '20px',
      textAlign: 'center',
      border: '5px'


    },
    mapcontent:{
        padding:'20px',
        textAlign:'center',
        border:'5px',
        
        
      },
  };
export default Rangok
