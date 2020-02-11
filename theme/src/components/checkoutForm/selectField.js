import React from 'react';

const SelectField = field => (
	<div className={field.className}>
		<label htmlFor={field.id}>
			{field.label}
			{/* {field.meta.touched && field.meta.error && (
				<span className="error">{field.meta.error}</span>
			)} */}
		</label>
		<select		
			{...field.input}			
			// onChange={this.onSelectProvince}
			// value={this.state.provinceId}
			style={{
				width: '100%',
				border: '1px solid #e0e0e0',
				borderRadius: '3px',
				padding: '12px 16px'
			}}
		>
			<option>Please select</option>
			{
				field.data.map(item => (
					<option
						// value={(field.id === "shipping_address.province") ? item._id : item.code}
						value={
							JSON.stringify(
								{
									id: `${(field.id === "shipping_address.province") ? item._id : item.code}`, 
									name: `${item.name_with_type}`
								}
							)
						}
					>
						{item.name_with_type}
					</option>
				))
			}
		</select>
	</div>
);

export default SelectField;
