import React, {Component} from 'react';
import $ from 'jquery';
import PokerHand from './PokerHand';
import Deck from '../utilityClasses/Deck.js';
import Buttons from './Buttons';
import ThePot from './ThePot';

var cards = new Deck();

class PokerTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dealersHands: ['deck','deck'],
			playerHands: ['deck','deck'],
			communityCards: [],
			wager: 0,
			count: 0
		}
		this.prepDeck = this.prepDeck.bind(this)
		this.playerBet = this.playerBet.bind(this)
		this.draw3 = this.draw3.bind(this)
		this.draw1 = this.draw1.bind(this)
		this.draw = this.draw.bind(this)
		this.checkHands = this.checkHands.bind(this)
	}

	prepDeck(){
		cards.createDeck()
		cards.shuffleDeck()
		var card1 = cards.deck.shift();
		var card2 = cards.deck.shift();
		var card3 = cards.deck.shift();
		var card4 = cards.deck.shift();
		var playersStartingHand = [card1,card3];
		var dealersStartingHand = [card2,card4];			
		this.setState({
			playerHands: playersStartingHand,
			dealersHands: dealersStartingHand
		})

	}

	playerBet(amount){
		var count = this.state.count;
		if (count >= 5){
			return
		}else{
			var newWager = this.state.wager + amount;
			this.setState({
				wager: newWager
			})
			this.draw()			
			var c = this.state.communityCards;
			var a = this.state.playerHands;
			var playerTHand = a.concat(c);
			var b = this.state.dealersHands;
			var dealerTHand = b.concat(c);
			console.log(c)
			console.log(playerTHand)
			console.log(dealerTHand)
			this.checkHands(playerTHand,dealerTHand)
		}
	}

	checkHands(hand,hand2){
		$.ajax({
			method: "POST",
			url: "http://localhost:5001/hand_checker",
			data: {
				hand: hand,
				hand2: hand2
			},
			success: (response)=>{
				console.log(response)
			}
		})
		// $.ajax({
		// 	method: "POST",
		// 	url: "http://localhost:3000/hand_checker",
		// 	data: {hand: hand},
		// 	success: (response)=>{
		// 		console.log(response)
		// 	}
		// })		
	}


	draw(){
		if (this.state.count >= 5){
			return
		}else if(this.state.count >= 3){
			this.draw1()
			return "ok."
		}else if(this.state.count === 0){
			this.draw3()
			return 'neat.'
		}
	}


	draw3(){
		var communityNewHand = this.state.communityCards;
		communityNewHand.push(cards.deck.shift());
		communityNewHand.push(cards.deck.shift());
		communityNewHand.push(cards.deck.shift());		
		this.setState({
			communityCards: communityNewHand,
			count: 3
		})
		if(this.state.gameOver){
			console.log('bawk bawk')
		}
	}

	draw1(){
		var count = this.state.count
		var communityNewHand = this.state.communityCards;
		communityNewHand.push(cards.deck.shift());
		this.setState({
			communityCards: communityNewHand,
			count: count +=1
		})			
	}



	render(){
		return(
			<div className='row'>
				<div className='col-sm-12 the-table'>
					<div className='row'>
						<ThePot wager={this.state.wager} />
					</div>
					<div className='row hands'>
						{/* dealer */}
						<PokerHand cards={this.state.dealersHands} />
					</div>
					<div className='row hands'>
						{/*	community */}					
						<PokerHand cards={this.state.communityCards} />
					</div>
					<div className='row hands'>
						{/* player */}					
						<PokerHand cards={this.state.playerHands} />
					</div>
					<div className='row'>
						{/* buttons */}
						<Buttons deal={this.prepDeck} bet={this.playerBet} check={this.draw} />
					</div>
				</div>
			</div>
		)
	}
}

export default PokerTable;