import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();

        this.state={
            evenArray:[],
            oddArray:[],
            userInput:''
        }
    }

    whenInputting(input) {
        this.setState( {userInput:input} )
    }

    whenClicking(value) {
        let arr = value.split(',').map(num => parseInt(num))
        let evens = arr.filter(num => num % 2 === 0)
        let odds = arr.filter(num => num % 2 !== 0)
        this.setState( {evenArray:evens} )
        this.setState( {oddArray:odds} )
    }
    
    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine'
                    onChange={e => this.whenInputting(e.target.value)} 
                />
                <button className='confirmationButton'
                    onClick={e => this.whenClicking(this.state.userInput)}> Split
                </button>
                <span className='resultsBox'
                    >Evens: {JSON.stringify(this.state.evenArray)}
                </span>
                <span className='resultsBox'
                    >Odds: {JSON.stringify(this.state.oddArray)}
                </span>
            </div> 
           
        )
    }
}

export default EvenAndOdd