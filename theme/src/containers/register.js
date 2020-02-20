import React, { Fragment } from 'react';
import { themeSettings, text } from '../lib/settings';
import MetaTags from '../components/metaTags';
import Register from '../components/register';

const RegisterContainer = props => {
	const {
		state: { pageDetails, settings }
	} = props;

	return (
		<Fragment>
			<section className="section section-register">
				<div className="container">
					<div className="columns columns-register">
						<div className="column is-5-widescreen is-5-desktop register-box">
							<Register {...props} />
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default RegisterContainer;
