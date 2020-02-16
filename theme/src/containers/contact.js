import React, { Fragment } from 'react';
import { themeSettings, text } from '../lib/settings';
import PropTypes from 'prop-types';
import MetaTags from '../components/metaTags';
import ContactForm from '../components/contactForm/index';

const ContactContainer = props => {
	const {
		state: { pageDetails, settings }
	} = props;

	return (
		<Fragment>
			{/* <section className="section">
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
			<section className="section section-product-description">
				<div className="container">
					<div className="content">
						<ContactForm {...props} />
					</div>
				</div>
			</section>
			<section className="section section-product-related">
				<div className="container">
					<div className="title is-4 has-text-centered">AAAAAA</div>
					<ContactForm {...props} />
				</div>
			</section> */}

			<MetaTags
				title={pageDetails.meta_title}
				description={pageDetails.meta_description}
				canonicalUrl={pageDetails.url}
				ogTitle={pageDetails.meta_title}
				ogDescription={pageDetails.meta_description}
			/>

			<section className="section section-contact">
				<div className="container">
					<div className="columns columns-contact">
						<div className="column is-6-widescreen is-offset-1-widescreen is-7-desktop">
							<div
								className="contact-box content is-small"
								style={{ paddingBottom: 0 }}
							>
								{/* {items} */}
								{/* <iframe
									src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
									title="This is a unique title"
									width="100%"
									height="300px"
									frameBorder="0"
									style={{ border: 0 }}
								/> */}
								<iframe
									title="This is a unique title"
									width="100%"
									height="320px"
									frameBorder="0"
									style={{ border: 0 }}
									src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJmQNYEWMpdTER5t0MGy4FZwM&key=AIzaSyDsOgcX3P2B1wpnLtWxG68EJM4ifYDbQdk"
									allowFullScreen
								>									
								</iframe>

								<hr className="separator" />
								<div className="title is-4">{text.contact_info}</div>
								<div className="columns is-mobile is-gapless is-multiline summary-block">
									<div className="column is-3 contact-text">{text.contact_address}</div>
									<div className="column is-9 has-text-right contact-text">
										{`${themeSettings.footer_contacts[0].text}, ${themeSettings.footer_contacts[1].text}`}
									</div>
									<div className="column is-3 contact-text">{text.contact_phone}</div>
									<div className="column is-9 has-text-right contact-text">
										{themeSettings.footer_contacts[2].text}
									</div>
									<div className="column is-3 contact-text">{text.contact_email}</div>
									<div className="column is-9 has-text-right contact-text">
										{themeSettings.footer_contacts[3].text}
									</div>
								</div>
							</div>
						</div>
						<div className="column is-5-widescreen is-5-desktop">
							<ContactForm {...props} />
						</div>
					</div>
				</div>
			</section>

		</Fragment>
	);
};

ContactContainer.propTypes = {
	state: PropTypes.shape({
		pageDetails: PropTypes.shape({})
	}).isRequired
};

export default ContactContainer;
