import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const content = 'text.';
// const element = <p>This is a line of {content}</p>;

function List(props){
	return (<div><input></input><button>{props.label}</button></div>);
}

function App(){
return(	
	<div>
	<List label = "mango" />
	<List label = "apple" />
	<List label = "banana" />
	<List label = "orange" />
	</div>);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
