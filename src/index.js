import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {NoteDisplay} from './components/piano/NoteDisplay.js';
import {Keyboard} from './components/piano/Keyboard.js';

class MainApp extends React.Component {
	handleKeyDown(pianoKey){
		let keyIdxToChange = this.state.keys.findIndex((el) => pianoKey.note === el.note);
		let keys = [...this.state.keys];
		keys[keyIdxToChange].isPlaying = true;
		this.setState({
			noteDisplay: pianoKey.note,
			keys: keys
		});
	}

	handleKeyUp(pianoKey){
		let keyIdxToChange = this.state.keys.findIndex((el) => pianoKey.note === el.note);
		let keys = [...this.state.keys];
		keys[keyIdxToChange].isPlaying = false;
		this.setState({
			keys:keys
		});
	}

	constructor(){
		super();
		this.state = {
			noteDisplay: '',
			keys:[
			    {note: 'C4', keyType: 'white', isPlaying: false},
			    {note: 'Db4', keyType: 'black', isPlaying: false},
			    {note: 'D4', keyType: 'white', isPlaying: false},
			    {note: 'Eb4', keyType: 'black', isPlaying: false},
			    {note: 'E4', keyType: 'white', isPlaying: false},
			    {note: 'F4', keyType: 'white', isPlaying: false},
			    {note: 'Gb4', keyType: 'black', isPlaying: false},
			    {note: 'G4', keyType: 'white', isPlaying: false},
			    {note: 'Ab4', keyType: 'black', isPlaying: false},
			    {note: 'A4', keyType: 'white', isPlaying: false},
			    {note: 'Bb4', keyType: 'black', isPlaying: false},
			    {note: 'B4', keyType: 'white', isPlaying: false},
			    {note: 'C5', keyType: 'white', isPlaying: false}
			]
		};
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

  render() {
    return (
      <>
      	<NoteDisplay displayedNote={this.state.noteDisplay} />
      	<Keyboard keys={this.state.keys} handleKeyUp={this.handleKeyUp} handleKeyDown={this.handleKeyDown} />
      </>
    )
  }
}

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);

