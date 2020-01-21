import React from 'react';
import { NextSeo } from 'next-seo';
import NotFound from '../components/NotFound/NotFound';

export default function Error(props) {
	return (
		<div>
			<NextSeo
					title="404 Not Found"
					description="Mineru Blog Page"
					openGraph={{
						url: 'https://mineru98.github.io/',
						title: '404 Not Found',
						description: 'Mineru Blog Page',
						type: 'website',
						images: [
							{
								url: 'https://mineru98.github.io/static/imgs/mineru-blog.png',
								width: 800,
								height: 600,
								alt: 'Blog Alt'
							}
						],
						site_name: 'Mineru Code Blog'
					}}
					facebook={{
						appId: '302132824078486'
					}}
				/>
			<NotFound/>
		</div>
	);
}