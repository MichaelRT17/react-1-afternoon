import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();

        this.state={
            userInput:'',
            palindrome:''
        }
    }

    whenInputting(input) {
        this.setState( {userInput:input} )
    }

    whenClicking(str) {
        let reverse = str.split('')
        let check = reverse.reverse().join('')
        if(str === check) {
            this.setState( {palindrome:'true'} )
        }
        else {
            this.setState( {palindrome:'false'} )
        }
    }
    
    render() {
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine'
                    onChange={e => this.whenInputting(e.target.value)}
                />
                <button className='confirmationButton'
                    onClick={e => this.whenClicking(this.state.userInput)}>Check
                </button>
                <span className='resultsBox palindromeRB'
                    >Palindrome: {JSON.stringify(this.state.palindrome)}
                </span>
            </div>
        )
    }
}

export default Palindrome