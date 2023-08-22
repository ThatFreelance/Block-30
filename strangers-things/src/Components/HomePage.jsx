import { useState, useEffect } from "react";
import API_URL from "../API";


function HomePage() {

    
    
      useEffect(() => {   
      async function summonUserData () {
    
        try {
          const response = await fetch(`${API_URL}/users/me`);
          const result = await response.json();
          console.table(result);
          return result
        } catch (error) 
        
       
      }
    




      summonUserData();

        main
    }, []);

    return (
    
        <div>
        
          </div>
      )
    }
    
    
    export default HomePage
