import React from 'react';
import api from '../../lib/api';
import { themeSettings, text } from '../../lib/settings';

class ProvinceForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.initialState();
	}

	initialState() {
		return {
		  provinces: [],
		  districts: [],
		  wards: [],
		  selected_province: '',
		  selected_district: '',
		  selected_ward: ''
		}
	}
	
	handleChange(event) {
		this.setState({[event.target.name]: event.target.value})
	}
	componentDidMount() {
		this.fetchProvinces(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.fetchProvinces(nextProps);
	}

	fetchProvinces = () => {
		api.ajax.provinces.listProvinces().then(({ status, json }) => {
			this.setState({
				provinces: json				
			});
			console.log(json)
		});
	};

	fetchDistricts = () => {
		api.ajax.provinces.listDistricts().then(({ status, json }) => {
			this.setState({
				districts: json				
			});
			console.log(json)
		});
	};

	fetchWards = () => {
		api.ajax.provinces.listWards().then(({ status, json }) => {
			this.setState({
				wards: json				
			});
			console.log(json)
		});
	};

	render(){
		const option_values = [];
		for (let i = 0; i <= field.values.length; i++) {
			const optionText = i === 0 ? text.selectOption : field.values[i].name;
			option_values.push(
				<option key={field.values[i].code} value={field.values[i].code}>
					{field.values[i].name}
				</option>
			);
		}

		const {
			className,
			id,
			label,
			name
		} = this.props;

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
					<option value="grapefruit">Grapefruit</option>
					<option value="lime">Lime</option>
					<option selected value="coconut">Coconut</option>
					<option value="mango">Mango</option>
				</select>		
			</div>
		)
	}
}


	

	
	


export default ProvinceForm;
