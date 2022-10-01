import React from "react"
import Nav from "./components/nav"
import Hero from "./components/hero"
import data from "./data"

export default function App() {
    const content = data.map( item => {
        return (
        <Hero
            key={item.data}
            item={item}
         />
    )
    })
    
    return (
    <div className="body">
        <Nav />
            {content}
    </div>)
}
