import React, { Component } from 'React'; 
// const Component = React.Component;


// const Component = React.Component;

// const searchBar = () => {
//     return <input />
// };

// class searchBar extends React.component
class searchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }


    render() {
        return (
        <div>    
            
            <input onChange={this.onInputChange} />
            value of the input: {this.state.term}
        </div>    
        );
    }

    onInputChange(eventObject) {
        console.log(this);
        return this.setState({ term: eventObject.target.value })
    }
}

export default searchBar;