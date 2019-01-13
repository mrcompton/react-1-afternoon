import React, { Component } from 'react'

class FilterString extends Component {
    constructor(){
        super()

        this.state = {
            unfilteredArray: ['Banjo', 'Book', 'Buffoonery', 'Banana', 'Bandito', 'Buffalo', 'Bagpipes'],
            userInput: '',
            filteredArray: []
        }
    }   
    
    handleChange(val){
        this.setState({userInput: val})
    }

    filterArray(userInput){
        var newArr = this.state.unfilteredArray.filter((element)=>(element.includes(userInput)))
        this.setState({filteredArray: newArr})
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB"> 
                <h4>Filter String</h4>
                <span className="puzzleText" > Names: { JSON.stringify(this.state.unfilteredArray) } </span>
                <input className="inputLine" onChange={ (e)=>this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB" > Filtered Names: { JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString