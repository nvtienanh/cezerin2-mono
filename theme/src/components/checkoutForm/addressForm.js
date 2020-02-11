import React from 'react';
import api from '../../lib/api';
import { themeSettings, text } from '../../lib/settings';

class Province extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			provinces: [],
			provinceId: null,
			districts: [],
			districtId: null,
			wards: [],
			wardId: null
		}
	}

	componentDidMount() {
		this.fetchProvinces();
	}

	onSelectProvince = (event) => {
		// this.props.onSelect(event.target.value);
		this.setState({
			provinceId: event.target.value			
		});
		this.fetchDistricts(event.target.value)
	}

	onSelectDistrict = (event) => {
		this.setState({
			districtId: event.target.value				
		});
		console.log('Start onSelectDistrict')
		console.log(this.state.provinceId)
		console.log(event.target.value)
		this.fetchWards(this.state.provinceId, event.target.value)
		console.log('End onSelectDistrict')
	}

	onSelectWard = (event) => {
		this.setState({
			wardId: event.target.value				
		});
	}

	fetchProvinces = () => {
		api.ajax.provinces.listProvinces().then(({ status, json }) => {
			this.setState({
				provinces: json,
				districts: [],
				wards: [],
				provinceId: null,
				districtId: null,
				wardId: null			
			});
		});
	};

	fetchDistricts = (provinceId) => {
		if (provinceId !== null){
			api.ajax.provinces.listDistricts(provinceId).then(({ status, json }) => {
				this.setState({
					districts: json	,
					wards: [],
					districtId: null,
					wardId: null			
				});
			});
		}else{
			this.setState({
				districts: [],
				wards: [],
				districtId: null,
				wardId: null			
			});
		}		
	};

	fetchWards = (provinceId, districtId) => {
		if (provinceId !== null && districtId !== null){
			api.ajax.provinces.listWards(provinceId, districtId).then(({ status, json }) => {
				this.setState({
					wards: json,
					wardId: null			
				});
			});
		}else{
			this.setState({
				wards: [],
				wardId: null				
			});
		}		
	};

	render() {
		const {
			className,
			prov_id,
			prov_label,
			prov_name,
			dist_id,
			dist_label,
			dist_name,
			ward_id,
			ward_label,
			ward_name
		} = this.props;
		return (			
			<div>
				<div className={className}>
					<label htmlFor={prov_id}>
						{prov_label}
						{/* {field.meta.touched && field.meta.error && (
							<span className="error">{field.meta.error}</span>
						)} */}
					</label>
					<select
						id={prov_id}
						name={prov_name}			
						onChange={this.onSelectProvince}
						value={this.state.provinceId}			
						style={{
							width:'100%',
							border:'1px solid #e0e0e0',
							borderRadius:'3px',
							padding:'12px 16px'
						}}
					>
						<option>Select province</option>
						{
							this.state.provinces.map(prov => (
								<option
									key={prov._id}
									value={prov._id}
									// selected={this.props.provinceId === prov._id}
								>
									{prov.name_with_type}
								</option>
							))
						}
					</select>		
				</div>
				<div className={className}>
					<label htmlFor={dist_id}>
						{dist_label}
						{/* {field.meta.touched && field.meta.error && (
							<span className="error">{field.meta.error}</span>
						)} */}
					</label>
					<select
						id={dist_id}
						name={dist_name}			
						onChange={this.onSelectDistrict}
						value={this.state.districtId}			
						style={{
							width:'100%',
							border:'1px solid #e0e0e0',
							borderRadius:'3px',
							padding:'12px 16px'
						}}
					>
						<option>Select district</option>
						{
							this.state.districts.map(dist => (
								<option
									key={dist.code}
									value={dist.code}
									// selected={this.props.provinceId === prov._id}
								>
									{dist.name_with_type}
								</option>
							))
						}
					</select>		
				</div>
				<div className={className}>
					<label htmlFor={ward_id}>
						{ward_label}
						{/* {field.meta.touched && field.meta.error && (
							<span className="error">{field.meta.error}</span>
						)} */}
					</label>
					<select
						id={ward_id}
						name={ward_name}			
						onChange={this.onSelectWard}
						value={this.state.wardId}			
						style={{
							width:'100%',
							border:'1px solid #e0e0e0',
							borderRadius:'3px',
							padding:'12px 16px'
						}}
					>
						<option>Select ward</option>
						{
							this.state.wards.map(ward => (
								<option
									key={ward.code}
									value={ward.code}
									// selected={this.props.provinceId === prov._id}
								>
									{ward.name_with_type}
								</option>
							))
						}
					</select>		
				</div>
				
				{/* <span>Province: </span>
				<select onChange={this.onSelectProvince} value={this.state.provinceId} >
					<option>Select province</option>
					{
						this.state.provinces.map(prov => (
							<option
								key={prov._id}
								value={prov._id}
								// selected={this.props.provinceId === prov._id}
							>
								{prov.name_with_type}
							</option>
						))
					}
				</select>
				<p>Selected province: {this.state.provinceId}</p> */}
				{/* <span>District: </span>
				<select onChange={this.onSelectDistrict} value={this.state.districtId}>
					<option>Select district</option>
					{
						this.state.districts.map(dist => (
							<option
								key={dist.code}
								value={dist.code}
								// selected={this.props.provinceId === dist.code}
							>
								{dist.name_with_type}
							</option>
						))
					}
				</select> */}

				{/* <p>Selected district: {this.state.districtId}</p>

				<span>Ward: </span>
				<select onChange={this.onSelectWard} value={this.state.wardId}>
					<option>Select wards</option>
					{
						this.state.wards.map(ward => (
							<option
								key={ward.code}
								value={ward.code}
								// selected={this.props.provinceId === ward.code}
							>
								{ward.name_with_type}
							</option>
						))
					}
				</select>
				
				<p>Selected ward: {this.state.wardId}</p> */}
			</div>
		);
	}
}


class AddressForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			provinceId: null,
			province: null,
			districtId: null,
			wardId: null
		};
	}

	onSelectProvince = (provId) => {
		// const selCities = data.cities.filter(c => c.provinceId === provId);
		// const { provinces } = this.state.provinces;

		this.setState({
			provinceId: provId
		});
		console.log('onSelectProvince');
		// console.log(this.state.provinceId);
	}

	onSelectCity = (city) => {
		this.setState({
			cityId: city.id
		});
	}

	onSelectWard = (city) => {
		this.setState({
			wardId: ward.code
		});
	}

	render() {
		return (
			<div>
				<Province
					// provinces={this.state.provinces}
					provinceId={this.state.provinceId}
					onSelect={this.onSelectProvince} />
				{/* <p>Selected province: {this.state.provinceId}</p>
				<District
					// data={this.state.cities}
					provinceId={this.state.provinceId}
					onSelect={this.onSelectCity} />
				<Ward
					provinceId={this.state.provinceId}
					districtId={this.state.districtId}
					// selectedId={this.state.cityId}
					onSelect={this.onSelectCity} /> */}
			</div>
		);
	}
}


export default Province;
