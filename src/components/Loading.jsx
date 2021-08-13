import React from 'react'
import Loader from './Loader.css'

const Loading = () => {
    return (
       <main>
        <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
       </main> 
    )
}

export default Loading
