import React from 'react'
import Data from "./FlipGameData"

class GameGrid extends React.Component
{
    constructor(props)
    {
        super(props)
        const Initial=[]
        for(let i=0;i<Data.length;i++){
            Initial.push("./media/card_back.jpg")
        }
        const InitialHidden=Data.map((source)=>
            source
        )
        
        InitialHidden.sort(()=>Math.random()-0.5)

        this.state={
            sourceArray:Initial,
            hiddenArray:InitialHidden,
            chosenIds:[],
        }
    }


    checkMatch=()=>{
        if(this.state.hiddenArray[this.state.chosenIds[0]].name===this.state.hiddenArray[this.state.chosenIds[1]].name)
        {

            const newSourceArray=this.state.sourceArray
            newSourceArray[this.state.chosenIds[0]]="./media/card_joker.jpg"
            newSourceArray[this.state.chosenIds[1]]="./media/card_joker.jpg"
            this.setState(prev=>{
                return({
                    ...prev,
                    chosenIds:[],
                    sourceArray:newSourceArray
                })
            })
            this.props.increment()
        }
        else{
            const newSourceArray=this.state.sourceArray
            newSourceArray[this.state.chosenIds[0]]="./media/card_back.jpg"
            newSourceArray[this.state.chosenIds[1]]="./media/card_back.jpg"
            this.setState(prev=>{
                return({
                    ...prev,
                    chosenIds:[],
                    sourceArray:newSourceArray
                })
            })
        }
    }

    flipCard=(event)=>{
        if([event.target.src]!=="./media/card_joker.jpg" && (this.state.chosenIds.length===0 || this.state.chosenIds[0]!==event.target.id))
        {    
            const {id}=event.target
            const newSourceArray=this.state.sourceArray
            newSourceArray[id]=[this.state.hiddenArray[id].src]
            const newChosenIds=this.state.chosenIds
            newChosenIds.push(id)
            this.setState(prev=>{
                return({
                    ...prev,
                    sourceArray: newSourceArray,
                    chosenIds:newChosenIds
                })
            })
            if(this.state.chosenIds.length===2)
            {setTimeout(this.checkMatch,500)}
        }
    }

    render()
    {
        const ImageCardComponent=this.state.sourceArray.map((source,i)=>{
        if((source!=="./media/card_joker.jpg") && !this.state.chosenIds.includes(i))
            return(<img 
                src={[source]} 
                id={i}  
                alt="Sry for this disturbance!"
                onClick={this.flipCard}
            />)
        else return(
            <img 
            src={[source]} 
            id={i}  
            alt="Sry for this disturbance!"
        /> 
        )
        })

        return(
            <div class="GameGrid">
                {ImageCardComponent}
            </div>
        )
    }
} 

export default GameGrid


//class GameGrid extends React.Component
// {   
//     constructor(){
//         super()
//         const initialData=[]
//         for(let i=0;i<2*Data.length;i++){
//             initialData.push("./media/card_back.jpg")    
//         }
//         this.state={
//             imageSource:initialData
//         }
//     }
    
//     handleChanges=(cardsChosen,cardsChosenId,HiddenCardComponents)=>
//     {
//         if(cardsChosen.length===2){
//             if(cardsChosen[0]===cardsChosen[1]){
//                 alert("A MATCH FOUND!!")
//                 cardsChosen=[]
//                 HiddenCardComponents[cardsChosenId[0]]="./media/card_joker.jpg"
//                 HiddenCardComponents[cardsChosenId[1]]="./media/card_joker.jpg"
//                 this.show(cardsChosenId[0])
//                 this.show(cardsChosenId[1])
//             }
//         }
//     }
    
//     show=(id,cardsChosen,cardsChosenId,HiddenCardComponents)=>
//     {
//         cardsChosen.push([HiddenCardComponents[id]])
//         cardsChosenId.push(id)
//         let newCards=[]
//         for(let i=0;i<this.state.imageSource.length;i++){
//             if(i===id){
//                 newCards.push(this.HiddenCardComponents[i])
//             }
//             else{
//                 newCards.push(this.state.imageSource[i])
//             }
//         }
//         this.setState(()=>
//             {
//                 return(
//                 {imageSource:newCards}
//                 )    
//             }
//         )
//         this.handleChanges(cardsChosen,cardsChosenId,HiddenCardComponents)
//     }
    
//     render()
//     {
//         let HiddenCardComponents=[]
//         for(let i=0;i<2*(Data.length);i++){
//             HiddenCardComponents.push(Data[i%Data.length].src)
//         }
//         HiddenCardComponents.sort(()=>Math.random()-0.5)
//         var cardsChosen=[]
//         var cardsChosenId=[]
        
//         let DisplayCardComponent=this.state.imageSource.map((source,i)=><img 
//             src={[source]} 
//             width={100} 
//             height={150} 
//             onClick={()=>this.show(i,cardsChosen,cardsChosenId,HiddenCardComponents)}
//             alt="Sorry for this!"

//         />)

//         return(
//             <DisplayCardComponent/>
//         )
//     }
// }