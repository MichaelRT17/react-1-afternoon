import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        
        this.state = {
            unFilteredArray: [
                {
                    name:'Michael',
                    age:23,
                    favColor: 'blue'
                },
                {
                    name:'Carissa',
                    age:26,
                    favColor: 'green',
                    title: 'Mrs.'
                },
                {
                    name:'Xavier',
                }
            ],
            userInput: '',
            filteredArray: []

        }
    }

    typingIn(val) {
        this.setState( {userInput:val} )
    }

    clickChange(input) {
        var people = this.state.unFilteredArray
        var filteredPeople = []

        for(var i = 0; i < people.length; i++) {
            if(people[i].hasOwnProperty(input)) {
                filteredPeople.push(people[i])
            }
            console.log(filteredPeople)
        }
        this.setState( {filteredArray:filteredPeople} )
    }

    render() {
        console.log(this.state.filteredArray)
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'
                    >Original: { JSON.stringify( this.state.unFilteredArray ) }
                </span>
                <input className='inputLine' 
                    onChange={e => this.typingIn(e.target.value)}
                />
                <button className='confirmationButton' 
                    onClick={e => this.clickChange(this.state.userInput)}> Filter
                </button>
                <span className='resultsBox filterObjectRB'
                    >Filtered: { JSON.stringify( this.state.filteredArray) }
                </span>
            </div> 
        )
    }
}

export default FilterObject