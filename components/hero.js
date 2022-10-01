import React from "react"


export default function Hero(props) {
    return (
    <div className="container">
            <div>
                <img className="img" src={`../images/${props.item.img}`} />         
            </div>
            <div>
                <div className = "top">
                    <span className="location"> <img src="../images/location.png"/> LOST ARK </span>
                    <a href="https://www.playlostark.com/en-us" className="link">VISIT!</a>
                </div>
                    <p className="name">{props.item.name}</p>
                    <p className="DATE">{props.item.date}</p>
                    <p className="content">{props.item.content}</p>
                </div>

    </div>
    )
}
