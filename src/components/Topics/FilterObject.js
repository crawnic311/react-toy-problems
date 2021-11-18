export default class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            unfilteredArray: [
                {
                 name: "Cloud",
                 game: "FF7",
                 age: 24,
                },
                {
                 name: "Tifa",
                 game: "FF7",
                 age: 22,
                },
                {
                 name: "Wakka",
                 game: "FF10",
                 age: 32
                }
            ],
            
            userInput = "",
            filteredArray = []
        }
    }

    handleChange(e) {
        this.setState({userInput: e})
    }

    selectCharacter(prop) {
        let characters = this.state.unfilteredArray
        let filteredArray = []

        for(let i = 0; i < unfilteredArray.length; i++) {
            if(employees[i].hasOwnProperty(prop)) {
                filteredArray.push(unfilteredArray[i])
            }
        }
        
        this.setState({filteredArray: filteredArray})
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>"Filter Object</h4>
                <span className="puzzleText">Characters: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => selectCharacter(this.state.userInput)}></button>
                <span className="resultsBox filterObjectRB">Selected Characters: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}