import { useState, useEffect } from "react";
import API_URL from "../API";


function Home() {

    
    
      useEffect(() => {   
      async function summonUserData () {
    
        try {
          const response = await fetch(`${API_URL}/users/me`);
          const result = await response.json();
         return result
        } catch (error) 
        
       
      }
    
      summonUserData();
    }, []);

    return (
    
        <div>
        
          </div>
      )
    }
    
    
    export default HomePage
