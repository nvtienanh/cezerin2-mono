import React from 'react';
import { themeSettings, text } from '../../lib/settings';

const SelectField = field => {
	const option_values = [];
	for (let i = 0; i <= field.values.length; i++) {
		const optionText = i === 0 ? text.selectOption : field.values[i].name;
		option_values.push(
			<option key={field.values[i].code} value={field.values[i].code}>
				{field.values[i].name}
			</option>
		);
	}

	return (
		<div className={field.className}>
			<label htmlFor={field.id}>
				{field.label}
				{field.meta.touched && field.meta.error && (
					<span className="error">{field.meta.error}</span>
				)}
			</label>
			<select
				id={field.id}
				name={field.name}			
				// onChange={this.props.handleOnChange}			
				style={{
					width:'100%',
					border:'1px solid #e0e0e0',
					borderRadius:'3px',
					padding:'12px 16px'
				}}
			>
				{option_values}
			</select>		
		</div>
	)
	
};

export default SelectField;
