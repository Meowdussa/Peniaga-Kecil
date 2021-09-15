import React from 'react';
//import "../components/Popup.css";
import Registerform from './Registerform';
import "../components/Registerform.css";

function Popup(props) {
	return props.trigger ? (
		<div className="popup">
			<div className="inner-popup">
				<button
					className="close-button"
					onClick={() => props.setTrigger(false)}
				>
					X
				</button>
				{/* {props.children} */}
				<Registerform/>
            
			</div>
		</div>
	) : (
		""
	);
}

export default Popup;
