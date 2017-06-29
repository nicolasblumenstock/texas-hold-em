import React from 'react';

function ThePot(props){
	return(
		<div className='col-sm-4 col-sm-offset-4 text-center'>
			<div className='bawkbawk'>Wager: <span className='spin'>$</span>{props.wager}</div>
		</div>
	)
}

export default ThePot;