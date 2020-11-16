import React from "react"
import "./Scroll.css"

function  Scroll(props) {
    return(
        <div className="martins">
         {props.children}
        </div>
    )
}
export default Scroll;