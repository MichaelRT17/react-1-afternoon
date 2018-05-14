import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();

        this.state={
            number1:0,
            number2:0,
            sum:null
        }
    }

    whenInputting1(input) {
        let num1 = parseInt(input)
        this.setState( {number1:num1} )
    }

    whenInputting2(input) {
        let num2 = parseInt(input)
        this.setState( {number2:num2} )
    }

    whenClicking(num1, num2) {
        this.setState( {sum:num1 + num2} )
    }
    
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine'
                    onChange={e => this.whenInputting1(e.target.value)}
                />
                <input className='inputLine'
                    onChange={e => this.whenInputting2(e.target.value)}
                />
                <button className='confirmationButton'
                    onClick={e => this.whenClicking(this.state.number1,this.state.number2)}>Add 
                </button>
                <span className='resultsBox sumRB'
                    >Sum: {this.state.sum}
                </span>
            </div> 
        ) 
    }
}

export default Sum