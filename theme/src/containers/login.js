import React, { Fragment } from 'react';
import { themeSettings, text } from '../lib/settings';
import MetaTags from '../components/metaTags';
import Login from '../components/login/index';

const LoginContainer = props => {
	const {
		state: { pageDetails, loginUser }
	} = props;

	return (
		<Fragment>
			<section className="section section-login">
				<div className="container">
					<div className="columns columns-login">
						<div className="column is-4-widescreen is-4-desktop login-box">
							<Login {...props} />
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default LoginContainer;
