import React, { Fragment } from 'react';
import { themeSettings, text } from '../lib/settings';
import MetaTags from '../components/metaTags';
import ContactForm from '../components/contactForm/index';

const ContactContainer = props => {
	const {
		state: { pageDetails, settings }
	} = props;

	return (
		<Fragment>
			<section className="section">
				<div className="container">
					<div className="content">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
							title="This is a unique title"
							width="100%"
							height="100%"
							frameBorder="0"
							style={{ border: 0 }}
						/>
					</div>
				</div>
			</section>
			{/* <section className="section section-product-description">
				<div className="container">
					<div className="content">
						<ContactForm {...props} />
					</div>
				</div>
			</section> */}
			<section className="section section-product-related">
				<div className="container">
					{/* <div className="title is-4 has-text-centered">AAAAAA</div> */}
					<ContactForm {...props} />
				</div>
			</section>

		</Fragment>
	);
};

export default ContactContainer;
