import React, { createRef, useState, useEffect } from 'react';
import { Container, Responsive, Grid } from 'semantic-ui-react';
import Router, { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import queryString from 'query-string';
import { NextSeo, NewsArticleJsonLd } from 'next-seo';
import axios from 'axios';
import './Tag.css';

const SUMMARY = {
	POST1: '처음 써보는 Git hub 블로그 포스트',
	DESCRIPTION1: '',
	datePublished1: '2019-01-07T08:00:00+08:00',
	dateModified1: '2019-01-07T08:00:00+08:00',
	POST2: '알고리즘이란?',
	DESCRIPTION2: '',
	datePublished2: '2019-01-07T08:00:00+08:00',
	dateModified2: '2019-01-07T08:00:00+08:00',
	POST3: '코딩교육',
	DESCRIPTION3: '',
	datePublished3: '2019-01-07T08:00:00+08:00',
	dateModified3: '2019-01-07T08:00:00+08:00',
	POST4: '준비중입니다',
	DESCRIPTION4: '',
	datePublished4: '2019-01-07T08:00:00+08:00',
	dateModified4: '2019-01-07T08:00:00+08:00',
	POST5: '군대에서 프로그래밍',
	DESCRIPTION5: '',
	datePublished5: '2019-01-10T08:00:00+08:00',
	dateModified5: '2019-01-10T08:00:00+08:00',
	POST6: '자료구조란?',
	DESCRIPTION6: '',
	datePublished6: '2019-02-14T08:00:00+08:00',
	dateModified6: '2019-02-14T08:00:00+08:00',
	POST7: '드러나기 시작하는 나의 민낯',
	DESCRIPTION7: '',
	datePublished7: '2020-01-15T08:00:00+08:00',
	dateModified7: '2020-01-15T08:00:00+08:00',
	POST8: '너의휴가 나의휴가',
	DESCRIPTION8: '',
	datePublished8: '2020-01-19T08:00:00+08:00',
	dateModified8: '2020-01-19T08:00:00+08:00',
	POST9: '나는 왜 테스트 코드를 작성하지 않았는가',
	DESCRIPTION9: '',
	datePublished9: '2020-01-26T08:00:00+08:00',
	dateModified9: '2020-01-26T08:00:00+08:00',
	POST10: '브랜드 디자인 - StartBucks편',
	DESCRIPTION10: '',
	datePublished10: '2020-01-27T08:00:00+08:00',
	dateModified10: '2020-01-27T08:00:00+08:00',
	POST11: 'Android Study - Kotlin',
	DESCRIPTION11: '',
	datePublished11: '2020-01-30T08:00:00+08:00',
	dateModified11: '2020-01-30T08:00:00+08:00',
};

function Tag(props) {
	const [source, setSource] = useState('');
	const [summary, setSummary] = useState('');
	const [description, setDescription] = useState('');
	const [datePublished, setDatePublished] = useState('');
	const [dateModified, setDateModified] = useState('');
	const { query: { id } } = useRouter();
	useEffect(() => {
		const url = `https://mineru98.github.io/static/posts/${id}.md`;
		if (id == '1') {
			setSummary(SUMMARY.POST1);
			setDescription(SUMMARY.DESCRIPTION1);
			setDatePublished(SUMMARY.datePublished1);
			setDateModified(SUMMARY.dateModified1);
		} else if (id == '2') {
			setSummary(SUMMARY.POST2);
			setDescription(SUMMARY.DESCRIPTION2);
			setDatePublished(SUMMARY.datePublished2);
			setDateModified(SUMMARY.dateModified2);
		} else if (id == '3') {
			setSummary(SUMMARY.POST3);
			setDescription(SUMMARY.DESCRIPTION3);
			setDatePublished(SUMMARY.datePublished3);
			setDateModified(SUMMARY.dateModified3);
		} else if (id == '4') {
			setSummary(SUMMARY.POST4);
			setDescription(SUMMARY.DESCRIPTION4);
			setDatePublished(SUMMARY.datePublished4);
			setDateModified(SUMMARY.dateModified4);
		} else if (id == '5') {
			setSummary(SUMMARY.POST5);
			setDescription(SUMMARY.DESCRIPTION5);
			setDatePublished(SUMMARY.datePublished5);
			setDateModified(SUMMARY.dateModified5);
		} else if (id == '6') {
			setSummary(SUMMARY.POST6);
			setDescription(SUMMARY.DESCRIPTION6);
			setDatePublished(SUMMARY.datePublished6);
			setDateModified(SUMMARY.dateModified6);
		} else if (id == '7') {
			setSummary(SUMMARY.POST7);
			setDescription(SUMMARY.DESCRIPTION7);
			setDatePublished(SUMMARY.datePublished7);
			setDateModified(SUMMARY.dateModified7);
		} else if (id == '8') {
			setSummary(SUMMARY.POST8);
			setDescription(SUMMARY.DESCRIPTION8);
			setDatePublished(SUMMARY.datePublished8);
			setDateModified(SUMMARY.dateModified8);
		} else if (id == '9') {
			setSummary(SUMMARY.POST9);
			setDescription(SUMMARY.DESCRIPTION9);
			setDatePublished(SUMMARY.datePublished9);
			setDateModified(SUMMARY.dateModified9);
		} else if (id == '10') {
			setSummary(SUMMARY.POST10);
			setDescription(SUMMARY.DESCRIPTION10);
			setDatePublished(SUMMARY.datePublished10);
			setDateModified(SUMMARY.dateModified10);
		} else if (id == '11') {
			setSummary(SUMMARY.POST11);
			setDescription(SUMMARY.DESCRIPTION11);
			setDatePublished(SUMMARY.datePublished11);
			setDateModified(SUMMARY.dateModified11);
		}
		axios.get(url).then(res => {
			setSource(res.data);
		});
	});
	return (
		<div>
			<NextSeo
				title={`Mineru Code Blog - ${summary}`}
				description={`${description}`}
				openGraph={{
					url: `https://mineru98.github.io/tag?id=${id}`,
					title: `Mineru Code Blog - ${summary}`,
					description: `${description}`,
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
			{/* PC 화면 */}
			<Responsive minWidth={769}>
				<div className="tag background">
					<Grid>
						<Grid.Row centered columns={3}>
							<Grid.Column>
								<h1>> Hello, World!</h1>
								<h1>> This is Mineru Coding Blog.</h1>
								<h1>> </h1>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
				<div className="tag container">
					<div className="tag container2">
						<ReactMarkdown source={source} />
					</div>
				</div>
			</Responsive>
			{/* 모바일 화면 */}
			<Responsive minWidth={1} maxWidth={768}>
				<div className="tag background mobile">
					<Grid>
						<Grid.Row centered columns={1}>
							<Grid.Column>
								<h1>> Hello, World!</h1>
								<h1>> This is Mineru Coding Blog.</h1>
								<h1>> </h1>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
				<div className="tag container mobile">
					<Container textAlign="left">
						<ReactMarkdown source={source} />
					</Container>
				</div>
			</Responsive>
		</div>
	);
}

export default Tag;