import React, {Component} from 'react';
import Card from './Card';

class PokerHand extends Component{
	// constructor(props) {
	// 	super(props);
	// }
	render(){
	var hand = [];
	this.props.cards.map((card, bawk)=>{
		hand.push(<Card key={bawk} card={card} />)
		return 'bawk bawk'
	})
		return(
			<div className='col-sm-12 poker-hand'>
				{hand}
			</div>
		)
	}
}

export default PokerHand;