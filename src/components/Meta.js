import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords, author }) => {
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<meta name='author' content={author} />
			</Helmet>
		</>
	)
}

Meta.defaultProps = {
	title: 'Wooden Gift Collection E-Commerce Store | Home',
	description: 'Unique products at an affordable price',
	keywords: 'buy, wooden, glass, Sri, Lanka',
	author: 'Rajitha Peiris',
}

export default Meta
