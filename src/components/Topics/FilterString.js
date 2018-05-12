import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        
        this.state = {
            unFilterArray: ['Hello','My','Name','Is','Michael','Thurman'],
            userInput: '',
            filteredArry: []
        }
    }

    whenTyping(input) {
        this.setState( {userInput:input} )
    }

    whenClicked(input) {
        let str = this.state.unFilterArray
        let arr = []
        for(var i = 0; i < str.length; i++) {
            if(str[i].includes(input)) {
                arr.push(str[i])
            }
        }
        this.setState( {filteredArry:arr} )
    }
    
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'
                    >{JSON.stringify(this.state.unFilterArray)}
                </span>
                <input className='inputLine'
                    onChange={e => this.whenTyping(e.target.value)}
                />
                <button className='confirmationButton'
                    onClick={e => this.whenClicked(this.state.userInput)}> Filter  
                </button>
                <span className='resultsBox filterStringRB'
                    >Filtered: {JSON.stringify(this.state.filteredArry)}
                </span>
            </div> 
        )
    }
}

export default FilterString