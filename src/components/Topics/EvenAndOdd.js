import React, { Component } from 'react'

class EvenAndOdd extends Component{
    constructor(){
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        
    }

    handleChange(val){
        this.setState({ userInput: val})
    }

    assignEvenAndOdds(userInputString){
        var arrSplit = userInputString.split(',')

        var arrUse = arrSplit.map((element) => (parseInt(element , 10)))

        var evensTemp = arrUse.filter((element) => {
            return element % 2 === 0
        })
        var oddsTemp = arrUse.filter((element) => {
            return element % 2 !== 0
        })

        this.setState({
            evenArray: evensTemp, 
            oddArray: oddsTemp
        })
    }
    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd