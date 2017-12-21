import ReactDOM from 'react-dom';
import React from 'react';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCaP7vlIojytCl-6k3OGRA_grobsE7fnMc';

// Create a new Compponent. This component should produce some HTML

const App = function() {
    return (
        <div> 
            <SearchBar />
        </div>
    );
}


// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />,
  document.querySelector('.container')
)

//  AIzaSyCaP7vlIojytCl-6k3OGRA_grobsE7fnMc