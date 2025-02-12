import { useState,useEffect } from "react"

const ChuckNorris=()=>{
    const [adatok,setAdatok] =useState("")

    const letoltes=async ()=>{
        let x=await fetch("https://api.chucknorris.io/jokes/random")
        let y=await x.json()
        setAdatok(y)            
    }


/*    
    async function letoltes(){
        let x=await fetch("https://api.chucknorris.io/jokes/random")
        let y=await x.json()
        setAdatok(y)
    }
*/    
    useEffect(()=>{
        letoltes()
    },[])

    return (
        <div>
            <h2> Chuck Norris poén:</h2>
            <p>{adatok.value}</p>
            <p>{adatok.updated_at}</p>
            <img src={adatok.icon_url}/>

        </div>
    )
}
export default ChuckNorris
