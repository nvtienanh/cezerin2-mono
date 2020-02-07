import { ObjectID } from 'mongodb';
import { db } from '../lib/mongo';
import parse from '../lib/parse';

class ProvincesService {
	constructor() {}

	async getProvinces() {
		const provinces = await db
			.collection('VNprovinces')
			.find({parent_code: null}, {projection: {code: 1, parent_code: 1, name: 1, name_with_type: 1}})
			.toArray();
		return provinces
	}

	async getSingleProvince(provinceId) {
		const filter = {
			_id: new ObjectID(provinceId)
		};
		const projection = {
			projection: {
				"code": 1,
				"parent_code": 1,
				"name": 1,
				"name_with_type": 1
			}
		}
		return await db
			.collection('VNprovinces')
			.findOne(filter, projection)
			// .then(result => {
			// 	if(result) {
			// 	  console.log(`Successfully found document: ${result}.`);
			// 	} else {
			// 	  console.log("No document matches the provided query.");
			// 	}
			// 	return result;
			//   })
			//   .catch(err => console.error(`Failed to find document: ${err}`));		
	}

	async getDistricts(provinceId) {
		return await db
			.collection('VNprovinces')
			.aggregate(
				[
					{
						$match: {_id: new ObjectID(provinceId)}
					},
					{ $unwind: '$district' },
					{
						$project: {
							_id: 0,
							code: '$district.code',
							parent_code: '$district.parent_code',
							name: '$district.name',
							name_with_type: '$district.name_with_type'
						}
					}
				]
			)
			.toArray()
	}

	async getSingleDistrict(provinceId, district_code) {
		const district =  await db
			.collection('VNprovinces')
			.aggregate(
				[
					{
						$match: {_id: new ObjectID(provinceId)}
					},
					{ $unwind: '$district' },
					{
						$project: {
							_id: 0,
							code: '$district.code',
							parent_code: '$district.parent_code',
							name: '$district.name',
							name_with_type: '$district.name_with_type'
						}
					},
					{
						$match: {code: district_code}
					}
				]
			)
			.toArray()
		return district
	}

	async getWards(provinceId, district_code) {
		return await db
			.collection('VNprovinces')
			.aggregate(
				[
					{
						$match: {_id: new ObjectID(provinceId)}
					},
					{ $unwind: '$district' },
					{
						$project: {
							_id: 0,
							code: '$district.code',
							parent_code: '$district.parent_code',
							name: '$district.name',
							name_with_type: '$district.name_with_type',
							ward: '$district.ward'
						}
					},
					{
						$match: {code: district_code}
					},
					{ $unwind: '$ward' },
					{
						$project: {
							code: '$ward.code',
							parent_code: '$ward.parent_code',
							name: '$ward.name',
							name_with_type: '$ward.name_with_type'
						}
					}
				]
			).toArray()		
	}

	async getSingleWard(provinceId, district_code, ward_code) {
		return await db
			.collection('VNprovinces')
			.aggregate(
				[
					{
						$match: {_id: new ObjectID(provinceId)}
					},
					{ $unwind: '$district' },
					{
						$project: {
							_id: 0,
							code: '$district.code',
							parent_code: '$district.parent_code',
							name: '$district.name',
							name_with_type: '$district.name_with_type',
							ward: '$district.ward'
						}
					},
					{
						$match: {code: district_code}
					},
					{ $unwind: '$ward' },
					{
						$project: {
							code: '$ward.code',
							parent_code: '$ward.parent_code',
							name: '$ward.name',
							name_with_type: '$ward.name_with_type'
						}
					},
					{
						$match: {code: ward_code}
					}
				]
			).toArray()
	}
}

export default new ProvincesService();
