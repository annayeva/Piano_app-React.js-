import React from 'react';
import './Key.css';

export class Key extends React.Component  {
	constructor(){
		super();
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	componentDidMount(){
		var noteURL = 'https://itu.dk/people/tiwr/piano/' + this.props.pianoKey.note + '.mp3';
		this.noteSound = new Audio(noteURL);
	}

	componentDidUpdate(){
		if (this.props.pianoKey.isPlaying){
			this.noteSound.play();
		}
		else {
			this.noteSound.pause();
			this.noteSound.currentPosition = 0;
		}
	}

	handleKeyDown(){
		this.props.handleKeyDown(this.props.pianoKey);
	}

	handleKeyUp() {
		this.props.handleKeyUp(this.props.pianoKey);
	}

	render(){
		return(
			<button 
				className={"key " + this.props.pianoKey.keyType + ' ' + (this.props.pianoKey.isPlaying ? 'pressed' : '')} // class example: "key black pressed"
				onMouseDown={this.handleKeyDown} 
				onMouseUp={this.handleKeyUp}>
				{this.props.pianoKey.note}
			</button>
		)
	}
}
