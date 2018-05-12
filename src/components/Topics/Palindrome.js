import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput:'',
            palindrome:''
        }
    }

    whenTyping(input) {
        this.setState( {userInput:input} )
    }

    whenClicking(value) {
        let reverse = value.split('').reverse().join('')
        console.log(reverse)
        if(reverse === value) {
            this.setState( {palindrome:'true'} )
        }
        else {
            this.setState( {palindrome:'false'} )
        }
    }

    render() {
        return (
            <div className='puzzleBox PalindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine'
                    onChange={e => this.whenTyping(e.target.value)}
                />
                <button className='confirmationButton'
                    onClick={e => this.whenClicking(this.state.userInput)} > Check
                </button>
                <span className='resultsBox'
                >Palindrome: {this.state.palindrome}
                </span>
            </div> 
        )
    }
}

export default Palindrome