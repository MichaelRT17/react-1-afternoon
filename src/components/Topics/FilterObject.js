import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();

        this.state={
            unFilteredArray:[
                {name:'Apple',color:'red',healthy:'true'},
                {name:'Pizza',color:'yellow',healthy:'false',favoriteTopping:'Pepperoni'},
                {name:'Michael',age:23,favoriteColor:'blue'}
            ],
            userInput:'',
            filteredArray:[]
        }
    }

    whenInputting(input) {
        this.setState( {userInput:input} )
    }

    whenClicking(input) {
        let result = []
        let middle = this.state.unFilteredArray
        for(var i = 0; i < middle.length; i++) {
            if(middle[i].hasOwnProperty(input)) {
                result.push(middle[i])
            }
        }
        this.setState( {filteredArray:result} )
    }
    
    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'
                    >Original: {JSON.stringify(this.state.unFilteredArray)}
                </span>
                <input className='inputLine'
                    onChange={e => this.whenInputting(e.target.value)}
                />
                <button className='confirmationButton'
                    onClick={e => this.whenClicking(this.state.userInput)}> Filter
                </button>
                <span className='resultsBox filterObjectRB'
                    >Filtered: {JSON.stringify(this.state.filteredArray)}
                </span>
            </div> 
        )
    }
}

export default FilterObject