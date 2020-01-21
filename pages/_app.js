import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { NextSeo } from 'next-seo';
import { Responsive } from 'semantic-ui-react';
import App from 'next/app';

import Header from '../components/Header/Header';

class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<div>
				<NextSeo
					title="Mineru Code Blog"
					description="Mineru Blog Page"
					openGraph={{
						url: 'https://mineru98.github.io/',
						title: 'Mineru Code Blog',
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
				<div>
					<Header/>
					<main>
						<Component {...pageProps} />
					</main>
				</div>
			</div>
		);
	}
}

export default MyApp;