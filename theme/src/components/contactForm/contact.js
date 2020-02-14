import React from 'react';
import { Link, Redirect, NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { themeSettings, text } from '../../lib/settings';

const validateRequired = value =>
	value && value.length > 0 ? undefined : text.required;

const validateEmail = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? text.emailInvalid
		: undefined;

const InputField = field => (
	<div className={field.className}>
		<label htmlFor={field.id}>
			{field.label}
			{field.meta.touched && field.meta.error && (
				<span className="error">{field.meta.error}</span>
			)}
		</label>
		<input
			{...field.input}
			placeholder={field.placeholder}
			type={field.type}
			id={field.id}
			disabled={field.disabled}
			className={field.meta.touched && field.meta.error ? 'invalid' : ''}
		/>
	</div>
);

const TextareaField = field => (
	<div className={field.className}>
		<label htmlFor={field.id}>
			{field.label}
			{field.meta.touched && field.meta.error && (
				<span className="error">{field.meta.error}</span>
			)}
		</label>
		<textarea
			{...field.input}
			placeholder={field.placeholder}
			rows={field.rows}
			id={field.id}
			className={field.meta.touched && field.meta.error ? 'invalid' : ''}
		/>
	</div>
);

class Contact extends React.Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	comparePassword: ''
		// };
	}

	getField = fieldName => {
		const fields = this.props.checkoutFields || [];
		const field = fields.find(item => item.name === fieldName);
		return field;
	};

	getFieldStatus = fieldName => {
		const field = this.getField(fieldName);
		return field && field.status ? field.status : 'required';
	};

	isFieldOptional = fieldName => {
		return this.getFieldStatus(fieldName) === 'optional';
	};

	isFieldHidden = fieldName => {
		return this.getFieldStatus(fieldName) === 'hidden';
	};

	getFieldValidators = fieldName => {
		const isOptional = this.isFieldOptional(fieldName);
		let validatorsArray = [];
		if (!isOptional) {
			validatorsArray.push(validateRequired);
		}
		if (fieldName === 'email') {
			validatorsArray.push(validateEmail);
		}

		return validatorsArray;
	};

	getFieldPlaceholder = fieldName => {
		const field = this.getField(fieldName);
		return field && field.placeholder && field.placeholder.length > 0
			? field.placeholder
			: '';
	};

	getFieldLabelText = fieldName => {
		const field = this.getField(fieldName);
		if (field && field.label && field.label.length > 0) {
			return field.label;
		} else {
			switch (fieldName) {
				case 'full_name':
					return text.full_name;
				case 'email':
					return text.email;
					break;
				case 'phone':
					return text.phone;
					break;
				case 'subject':
					return text.contact_subject;
                    break;
                case 'message':
                    return text.contact_message;
                    break;
				default:
					return 'Unnamed field';
			}
		}
	};

	getFieldLabel = fieldName => {
		const labelText = this.getFieldLabelText(fieldName);
		return this.isFieldOptional(fieldName)
			? `${labelText} (${text.optional})`
			: labelText;
	};

	render() {
		let { handleSubmit } = this.props;

		const sendButtonClassName = 'contact-button button is-primary';
		const inputClassName = 'contact-field';
		const titleClassName = 'title is-4';
		return (
			<div className="contact-step">
				<h1 className={titleClassName}>{text.contact_us}</h1>
				<hr className="separator" />
				<form onSubmit={handleSubmit}>					
					<Field
						className={inputClassName}
						name="full_name"
						id="contact.full_name"
						component={InputField}
						type="text"
						props={this.value}
						label={this.getFieldLabel('full_name')}
						validate={this.getFieldValidators('full_name')}
						placeholder={this.getFieldPlaceholder('full_name')}
					/>
					<Field
						className={inputClassName}
						name="email"
						id="ccontact.email"
						component={InputField}
						type="email"
						props={this.value}
						label={this.getFieldLabel('email')}
						validate={this.getFieldValidators('email')}
						placeholder={this.getFieldPlaceholder('email')}
					/>

					<Field
						className={inputClassName}
						name="phone"
						id="contact.phone"
						component={InputField}
						type="tel"
						props={this.value}
						label={this.getFieldLabel('phone')}
						onBlur={this.passwordTemp}
						validate={this.getFieldValidators('phone')}
						placeholder={this.getFieldPlaceholder('phone')}
					/>

					<Field
						className={inputClassName}
						name="subject"
						id="contact.subject"
						component={InputField}
						type="text"
						props={this.value}
						label={this.getFieldLabel('subject')}
						validate={this.getFieldValidators('subject')}
						placeholder={this.getFieldPlaceholder('subject')}
					/>

					<Field
						className={inputClassName + ' shipping-comments'}
						name="message"
						id="contact.message"
						component={TextareaField}
						type="text"
						label={this.getFieldLabel('message')}
						placeholder={this.getFieldPlaceholder('message')}
						validate={this.getFieldValidators('message')}
						rows="5"
					/>

					<div className="contact-button-wrap">
						<button
							type="submit"
							className={sendButtonClassName}
						>
							{text.contact_send}
						</button>
					</div>					
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'Contact'
})(Contact);
