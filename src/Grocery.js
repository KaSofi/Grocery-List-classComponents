import { Component } from "react";


export class Grocery extends Component {
    constructor() {
        super();

        this.state = {
        userInput: '',
        groceryList: []
        }
    } 

    changeEvent(e) {
        this.setState({
            userInput: e
        })
    }

    addItem(input) {
        if( input === '' ) {
            alert('please, enter an item')
        } else {
            let listArray = this.state.groceryList;
            listArray.unshift(input);
            this.setState({groceryList: listArray, userInput: ''})
            console.log(listArray)
        }
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed')
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray.length = 0;
        this.setState({
            groceryList: listArray
        })
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
            <form onSubmit={ this.onFormSubmit }>
                <input onChange={ (e) => {this.changeEvent(e.target.value)} } 
                        value={this.state.userInput} 
                        type="text" 
                        placeholder="what do you want to buy?"/>
                <div className="butonsPosition">
                    <button onClick={ ()=> this.addItem(this.state.userInput) } className="greenButton"> ADD </button>
                    <button onClick={ () => this.deleteItem() } className="redButton"> DELETE ALL </button>
                </div>
                <ul>
                {this.state.groceryList.map((item, index) => (
                    <li key={index}
                        onClick={ this.crossedWord }>{item}</li>
                ))}
                </ul>
            </form>
        </div>

        ) 
    }
}