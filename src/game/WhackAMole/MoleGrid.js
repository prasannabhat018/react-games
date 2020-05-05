import React from 'react'

class MoleGrid extends React.Component{
    constructor(){
        super()
        this.state={
            score:0,
            time:10,
            molePosition:-1,
            id:-1,
            id1:-1
        }
    }

    componentDidMount(){
        var tid=setInterval(this.randomNumberGenerator,1000)
        var tid1=setInterval(this.decrementTimer,1000)
        this.setState(prev=>{
            return({
                ...prev,
                id:tid,
                id1:tid1
            })
        })
    }

    decrementTimer=()=>{
        this.setState(prev=>{
            return({
                ...prev,
                time:prev.time-1
            })
        })
    }


    randomNumberGenerator=()=>{
        let x=this.state.molePosition
        while(x===this.state.molePosition){
            x=Math.floor(Math.random()*25)
        }

        this.setState((prev)=>
        {    return({
                ...prev,
                molePosition:x
            })
        })
    }


    checkMatch=(event)=>{
        this.setState(prev=>{
            return({
                ...prev,
                score:prev.score+1
            })
        })
    }

    finalCleanUp=()=>{
        this.setState(prev=>{
            return({
                ...prev,
                molePosition:-1
            })
        })
    }



    render()
    {
        if(this.state.time===0 && this.state.molePosition!==-1){
            clearInterval(this.state.id)
            clearInterval(this.state.id1)
            this.finalCleanUp()
            alert("Game Completed!! Your Score : "+[this.state.score]+" Refresh to play Once More")
        }        
        let MoleDiv=[]
        for(let i=0;i<25;i++){
            if(this.state.molePosition!==i)
                MoleDiv.push(<div className="MoleDiv" id={i}></div>)
            else
                MoleDiv.push(<div className="MoleDiv mole" id={i} onMouseUp={this.checkMatch}></div>)
        }
        return (
            <div>
                <div className="MoleGrid">
                    {MoleDiv}
                </div>
                <div>
                    <h1>Time Left : {this.state.time}</h1>
                    <h1>Score : {this.state.score}</h1>
                </div>
            </div>
        )
       
    }
}

export default MoleGrid