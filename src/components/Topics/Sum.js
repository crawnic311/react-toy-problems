export default class Sum extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    changeHandler1(e) {
        this.setState({number1: parseInt(e, 10)})
    }
    
    changeHandler2(e) {
        this.setState({number2: parseInt(e, 10)})
    }

    sumNums(num1, num2) {
        this.setState({sum: num1 + num2})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={ (e) => changeHandler1(e.target.value)}></input>
                <input className="inputLine" onChange={ (e) => this.changeHandler2(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => sumNums(this.state.number1, this.state.number2)}></button>
                <span className="resultsBox">Sum: {JSON.stringify(this.state.sum)}</span>

            </div>
        )
    }
}