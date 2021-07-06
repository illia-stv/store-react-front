import React from 'react'

function Home(props) {
    const click = () =>{
        console.log(props.myJwt)
    }
    return (
        <div>
           <h1 onClick={click}>Home😊😊😊</h1> 
        </div>
    )
}

export default Home
