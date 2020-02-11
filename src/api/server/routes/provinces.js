import security from '../lib/security';
import ProvincesService from '../services/provinces';

class ProvincesRoute {
	constructor(router) {
		this.router = router;
		this.registerRoutes();
	}

	registerRoutes() {
		this.router.get(
			'/v1/provinces',
			security.checkUserScope.bind(this, security.scope.READ_GEOLOCATION),
			this.getProvinces.bind(this)
		);
		this.router.get(
			'/v1/provinces/:province_code',
			security.checkUserScope.bind(this, security.scope.READ_GEOLOCATION),
			this.getSingleProvince.bind(this)
		);
		this.router.get(
			'/v1/provinces/:province_code/districts',
			security.checkUserScope.bind(this, security.scope.READ_GEOLOCATION),
			this.getDistricts.bind(this)
		);
		this.router.get(
			'/v1/provinces/:province_code/districts/:district_code',
			security.checkUserScope.bind(this, security.scope.READ_GEOLOCATION),
			this.getSingleDistrict.bind(this)
		);
		this.router.get(
			'/v1/provinces/:province_code/districts/:district_code/wards',
			security.checkUserScope.bind(this, security.scope.READ_GEOLOCATION),
			this.getWards.bind(this)
		);
		this.router.get(
			'/v1/provinces/:province_code/districts/:district_code/wards/:ward_code',
			security.checkUserScope.bind(this, security.scope.READ_GEOLOCATION),
			this.getSingleWard.bind(this)
		);
	}

	getProvinces(req, res, next) {
		ProvincesService.getProvinces()
			.then(data => {
				res.send(data);
			})
			.catch(next);
	}

	getSingleProvince(req, res, next) {
		ProvincesService.getSingleProvince(req.params.province_code)
			.then(data => {
				if (data) {
					res.send(data);
				} else {
					res.status(404).end();
				}
			})
			.catch(next);
	}

	getDistricts(req, res, next) {
		ProvincesService.getDistricts(req.params.province_code)
			.then(data => {
				res.send(data);
			})
			.catch(next);
	}

	getSingleDistrict(req, res, next) {
		ProvincesService.getSingleDistrict(req.params.province_code, req.params.district_code)
			.then(data => {
				res.send(data[0]);
			})
			.catch(next);
	}

	getWards(req, res, next) {
		ProvincesService.getWards(req.params.province_code, req.params.district_code)
			.then(data => {
				res.send(data);
			})
			.catch(next);
	}

	getSingleWard(req, res, next) {
		ProvincesService.getSingleWard(req.params.province_code, req.params.district_code, req.params.ward_code)
			.then(data => {
				res.send(data[0]);
			})
			.catch(next);
	}
}

export default ProvincesRoute;
