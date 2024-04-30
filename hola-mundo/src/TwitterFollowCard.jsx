import { useState } from "react"

export function TwitterFollowCard({formatUserName, userName, name }){

    const [isFollowing, setIsFollowing]= useState(false)
    //Funciona para cambiar el estado del boton
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    const imageSrc= `https://unavatar.io/${userName}`
    const text= !isFollowing ? 'Seguir' : 'Siguiendo'
    const buttonClaseName= isFollowing ?
    'tw-followCard-button is-following' : 'tw-followCard-button'
    return (

        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-Avatar'
                src= {imageSrc }/>
                
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-userName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClaseName} onClick={handleClick}>
                    
                    <span className="tw-followCard-text"> {text}</span>
                    <span className='tw-followCard-unfollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}