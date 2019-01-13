import React, { Component } from 'react'

class FilterObject extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray: [
               
                {
                 name: 'Wayne Gretzky',
                 occupation: 'Hockey Player',
                 number: 99
                },

                {
                 name: 'Rosa Parks',
                 occupation: 'Activist',
                 quote: 'All I was doing was trying to get home from work.'
                },

                {
                name: 'Bob',
                occupation: 'the Builder'
                },

            ],

            userInput: '',
            filteredArray: []

        }
    }

    handleChange(val){
        this.setState( {userInput: val} )
    }

    filterArrays(prop){
        var arr = this.state.unFilteredArray.slice();
        var filtArr = []
        for(var i=0;i<arr.length;i++){
          for(var key in arr[i]){
            if(key===prop){
              filtArr.push(arr[i])
            }
            else{}
            
          }
        }
        
        this.setState( {
            filteredArray: filtArr
        })

    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } />
                <button className="confirmationButton" onClick={ () => this.filterArrays(this.state.userInput) } > Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}

export default FilterObject