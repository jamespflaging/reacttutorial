import React from "react"

function Footer() {
    const thisThingsType = "Footer";
    const styles = {
        color: "#FF8C00", 
        backgroundColor: "#FF2D00",
        fontSize: "25px"
    }
    return (
        <footer style = {styles}>
            This is a {`${thisThingsType}`}</footer>
    )
}

export default Footer