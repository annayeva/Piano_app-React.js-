import React from 'react';
import './NoteDisplay.css';

export const NoteDisplay = (props) =>{
	return(
		<span id="note-indicator">{props.displayedNote}</span>
	)
} 