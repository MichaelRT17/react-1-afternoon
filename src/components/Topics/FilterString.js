import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state={
            unFilteredArray:['my','name','is','michael','thurman','and','i','love','my','wife'],
            userInput:'',
            filteredArray:[]
        }
    }

    whenInputting(input) {
        this.setState( {userInput:input} )
    }

    whenClicking(input) {
        let result = []
        let arr = this.state.unFilteredArray
        for(var i = 0; i < arr.length; i++) {
            if(arr[i].includes(input)) {
                result.push(arr[i])
            }
        }
        this.setState( {filteredArray:result} )
    }
    
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'
                    >Strings : {JSON.stringify(this.state.unFilteredArray)}
                </span>
                <input className='inputLine'
                    onChange={e => this.whenInputting(e.target.value)}
                />
                <button className='confirmationButton'
                    onClick={e => this.whenClicking(this.state.userInput)}>Filter
                </button>
                <span className='resultsBox filterStringRB'
                    >Filtered: {JSON.stringify(this.state.filteredArray)}
                </span>
            </div> 
        )
    }
}

export default FilterString