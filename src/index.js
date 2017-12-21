import ReactDOM from 'react-dom';
import React from 'react';
// Create a new Compponent. This component should produce some HTML

const App = function() {
    return <div> Hi! </div>
}


// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />,
  document.querySelector('.container')
)

