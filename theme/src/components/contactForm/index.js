import React from 'react';
import { themeSettings, text } from '../../lib/settings';
import Contact from './contact';

export default class ContactForm extends React.Component {
	constructor(props) {
		super(props);
	}

	handleFormSubmit = values => {
		// this.props.forgotPassword({
		// 	email: values.email,
		// 	history: this.props.history
        // });
        console.log(values)
	};

	render() {
		const { settings } = this.props.state;

		const {
			checkoutInputClass = 'contact-field',
			checkoutButtonClass = 'contact-button'
		} = themeSettings;

		return (
			<div>
				<Contact
					inputClassName={checkoutInputClass}
					buttonClassName={checkoutButtonClass}
					settings={settings}
					onSubmit={this.handleFormSubmit}
				/>
			</div>
		);
	}
}
