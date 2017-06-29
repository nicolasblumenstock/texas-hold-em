import React, {Component} from 'react';

class Buttons extends Component {

	render(){
		return(
			<div className='col-sm-12 bawktons'>
				<div className='col-sm-4'>
					<button type='submit' onClick={this.props.deal} className='btn bawktn'>Deal<span className='bawktiptextdeal'>bawk bawk</span></button>
				</div>
				<div className='col-sm-2'>
					<button type='submit' onClick={()=>{this.props.bet(10)}} className='btn bawktn'>Bet 10<span className='bawktiptext'>bawk bawk</span></button>
				</div>
				<div className='col-sm-2'>	
					<button type='submit' onClick={()=>{this.props.bet(100)}} className='btn bawktn'>Bet 100<span className='bawktiptext'>bawk bawk</span></button>
				</div>
				<div className='col-sm-2'>	
					<button type='submit' onClick={this.props.check} className='btn bawktn'>Check<span className='bawktiptext'>bawk bawk</span></button>
				</div>
				<div className='col-sm-2'>	
					<button type='submit' className='btn bawktn'>Fold<span className='bawktiptext'>bawk bawk</span></button>

				</div>				
			</div>
		)
	}
}

export default Buttons;