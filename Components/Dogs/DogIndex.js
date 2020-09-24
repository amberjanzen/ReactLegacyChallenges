import React, {Component} from 'react'

export default class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dog: 'https://images.dog.ceo/breeds/hound-blood/n02088466_4907.jpg'
        }
        this.randomDog = this.randomDog.bind(this)
    }
   randomDog(e) {
        e.preventDefault();
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(json => this.setState({
            dog: json.message
        })).catch(err=>console.log(err))
    }

    render(){
        return(
            <div>
                <img src={this.state.dog} alt="No dogs allowed" />
                <button onClick={this.randomDog}>Who let the dogs out?</button>
            </div>
        )
    }
}