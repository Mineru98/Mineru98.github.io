import React from 'react';
import { NextSeo } from 'next-seo';
import Tag from '../components/Tag/Tag';

export default function tag(props) {
	return (
		<div>
			<NextSeo
					title="Mineru Code Blog - List"
					description="Mineru Blog Page"
					openGraph={{
						rl: 'https://mineru98.github.io/',
						title: 'Mineru Code Blog - List',
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
			<Tag/>
		</div>
	);
}