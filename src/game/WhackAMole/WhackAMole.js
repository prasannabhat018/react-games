import React from 'react'
import MoleGrid from "./MoleGrid"

class WhackAMole extends React.Component{
    render(){
        return(
            <div class="GameDiv">
                <h1>Whack-A-Mole Game</h1>
                <MoleGrid/>
            </div>
        )
    }
}

export default WhackAMole