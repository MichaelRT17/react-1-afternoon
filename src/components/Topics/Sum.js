import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1:0,
            number2:0,
            sum:null
        }
    }

    alterNum1(num1) {
        let realNum = parseInt(num1)
        this.setState( {number1:realNum} )
    }

    alterNum2(num2) {
        let realNum = parseInt(num2)
        this.setState( {number2:realNum} )
    }

    setTheSum(num1, num2) {
        let ans = num1 + num2
        this.setState( {sum:ans} )
    }
    
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine'
                    onChange={e => this.alterNum1(e.target.value)}
                />
                <input className='inputLine'
                    onChange={e => this.alterNum2(e.target.value)}
                />
                <button className='confirmationButton'
                    onClick={e => this.setTheSum(this.state.number1,this.state.number2)}> Add
                </button>
                <span className='resultsBox'
                    > Sum: {this.state.sum}
                </span>
            </div> 
        )
    }
}

export default Sum