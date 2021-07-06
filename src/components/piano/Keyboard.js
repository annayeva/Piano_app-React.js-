import React from 'react';
import {Key} from './Key.js'
import './Keyboard.css';

export const Keyboard = (props) => {
	return (
		<div className="keyboard">
			{props.keys.map((key) => { // instead of having a static array of keys using a map
				return <Key handleKeyDown={props.handleKeyDown} handleKeyUp={props.handleKeyUp} pianoKey={key} />
			})}
		</div>
	)
}