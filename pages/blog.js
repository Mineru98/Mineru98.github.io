import React from 'react';
import { NextSeo } from 'next-seo';
import Blog from '../components/Blog/Blog';

export default function blog(props) {
	return (
		<div>
			<NextSeo
					title="Mineru Code Blog - Blog"
					description="Mineru Blog Page"
					openGraph={{
						rl: 'https://mineru98.github.io/',
						title: 'Mineru Code Blog - Blog',
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
			<Blog/>
		</div>
	);
}