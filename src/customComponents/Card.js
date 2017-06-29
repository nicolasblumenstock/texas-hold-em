import React from 'react';

function Card(bawks){
	var theCard = `/cards/${bawks.card}.png`
	return(
		<div className='col-sm-2 card'>
			<img src={theCard} alt='bawk' />
		</div>
	)
}

export default Card;