export default class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            favoriteWords = [
                "candle",
                "vapid",
                "corn",
                "pills"
            ],

            userInput = '',

            filteredWords = []
        }
    }

    changeHandler(e) {
        this.setState({userInput: e})
    }

    filterFavoriteWords(userInput) {
        let words = this.state.favoriteWords
        let filteredWords = []

        for(let i = 0; i < favoriteWords.length; i++) {
            if(words[i].includes(userInput)) {
                filteredWords.push(names[i])
            }
        }

        this.setState({filteredWords: filteredWords})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Favorite Words: {JSON.stringify(this.state.favoriteWords, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => changeHandler(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => filterFavoriteWords(this.state.userInput)}></button>
                <span className="resultsBox filterStringRB">Filtered Words: {JSON.stringify(this.state.filteredWords)}</span>
            </div>
        )
    }
}