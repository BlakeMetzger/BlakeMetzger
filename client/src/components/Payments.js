import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
	render() {
		return (
			<div>
				<StripeCheckout
					name="Buy some Credits!"
					description="$5 for 5 Credits. Credits don't do /n anything but you will probably want to have more of them than anyone else."
					amount={this.props.amount}
					token={token => this.props.handleToken(token)}
					stripeKey={process.env.REACT_APP_STRIPE_KEY}>
					<button className="btn">donate</button>
				</StripeCheckout>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(Payments);
