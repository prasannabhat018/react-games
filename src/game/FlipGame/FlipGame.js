import React,{Component} from 'react'
import GameGrid from './GameGrid'
import Data from './FlipGameData'

class FlipGame extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    increment=()=>{
        this.setState(prev=>{
            return({
                count:prev.count+1
            })
        })
    }
    
    render(){
        return(
            <div class="GameDiv">
            
                <h1>Card Flip Game</h1>

                <GameGrid i={this.state.count} increment={this.increment} />
                {(this.state.count===Data.length/2)?
                <h2>Congratulations!!</h2>:
                <h2>SCORE : {this.state.count}</h2>
            }
            </div>
        )
    }
}

export default FlipGame