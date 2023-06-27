
import React from 'react'
import ReactDOM from 'react-dom/client'



import HeaderEl from "./Header"
import Main from "./Main"
import Footer from "./Footer"



function Page() {
    return (
        <div>
            <HeaderEl />   
            <Main />
            <Footer />     
        </div>
        
    )
}


ReactDOM.render(
    <Page />,
    document.getElementById('root')
)