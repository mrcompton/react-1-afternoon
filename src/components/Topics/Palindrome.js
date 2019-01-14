import React, { Component } from 'react'

class Palindrome extends Component {
    constructor(){
        super()
        
        this.state = {
            userInput: '',
            Palindrome: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    isPalindrome(userIn){
        var arrSplit = userIn.split('')
        var arrRev = arrSplit.reverse()
        var str = arrRev.join('')

        var isPal = false

        if(str === userIn){
            isPal = true
        }
        else{
            isPal = false
        }

        var isPalString = isPal.toString()

        this.setState( {Palindrome: isPalString} )
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
                <span className="resultsBox"> Palindrome: { this.state.Palindrome }</span>
            </div>
        )
    }
}

export default Palindrome