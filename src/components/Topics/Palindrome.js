export default class Palindrome extends Component {
    constructor() {
        
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    changeHandler(e) {
        this.setState({userInput: e})
    }

    updatePalindrome(userInput) {
        let forward = userInput
        let backward = userInput
        backward = backward.split('')
        backward = backward.reverse()
        backward = backward.join('')

        if(forward === backward) {
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => changeHandler(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => updatePalindrome(this.state.userInput)}></button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
            
        )
    }
}