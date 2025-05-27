import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return(
        <div>
            <h1>
                My App
            </h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const nextElement = (
    <a href="https://google.com" target="_blank">Visit google</a>
)

const anotherUser = "utsov 2"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
