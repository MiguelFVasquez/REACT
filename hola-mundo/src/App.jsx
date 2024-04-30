import './App.css'
import React from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

export  function App (){
    const formatUserName= (userName) => `@${userName}`
    return(
    
        <section className='App'>
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName={"MrFloweers"} 
            name ={"Miguel Florez"} 
            />

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName={"Shuh3n"} 
            name ={"Santiago Orozco"} 
            />

            <TwitterFollowCard  formatUserName={formatUserName} 
            userName={"Elonmusk"} 
            name={"Elon Musk"} 
            />
        </section>
        
    )

} 