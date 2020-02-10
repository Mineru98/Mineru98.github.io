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
	DESCRIPTION1: `개발자라면 한 번쯤은 만들어 보고 싶은 github 블로그를 드디어 만들어서 첫 포스팅을 작성하게 되었다. 과연 내가 얼마나 자주 여기에 포스팅할지는 나조차 의문이지만 최대한 개발에 관한 공부를 더 자주 하고 글로 남기는 기록을 해봐야겠다.`,
	POST2: '알고리즘이란?',
	DESCRIPTION2: `컴공(컴퓨터공학과) 관련된 학과를 나왔다면 다들 한 번씩 들어봤던 과목이다.
설령 컴공을 나오지 않더라도 다양한 매체를 통해서 '알고리즘'이란 말을 자주 언급되어서
다들 알고 있는 키워드이다.`,
	POST3: '코딩교육',
	DESCRIPTION3: `2018년부터 대한민국 공교육에서 코딩 교육 의무화를 하면서 많은 학부모가 자신들의 자녀에게
어려운 코딩 교육을 학원을 보내면서라도 시켜야 하는지 걱정을 하기 시작했다.`,
	POST4: '준비중입니다',
	DESCRIPTION4: `준비중입니다...`,
	POST5: '군대에서 프로그래밍',
	DESCRIPTION5: `군대에서 프로그래밍을 하고 싶다면 어떻게 해야할까?
우선 나에게 필요한 것들을 정리해보았다.

1. 레퍼런스 자료
2. 파일 업로드 및 다운로드
3. github 자동 push 시스템

이 이외에도 필요한 것들도 있겠지만 우선 이정도면
충분히 개발을 하는데 문제가 될 건 없어보인다.`,
	POST6: '자료구조란?',
	DESCRIPTION6: `대학 강의를 들으면서 알고리즘과 자료구조라는 수업을 따로 나눠있지만
수업을 듣다 보면 이 둘은 왜 따로 배우는 것일까에 대해 의문이 들었다.
교수님의 수업 방식에서 다른 점이 있는 것인지 정말 이렇게 가르치는 것이
대학에서 알려주는 강의의 한계인지는 모르겠지만 확실한 것은
자료구조와 알고리즘은 서로 관련이 많지만 같은 내용으로 가르치는 것은
문제가 있다는 점이다. 그래서 나는 확실하게 자료구조와 알고리즘을 구분해서 글을 쓸 것이다.`,
	POST7: '보일러 플레이트',
	DESCRIPTION7: `React를 처음부터 제대로 공부하면서 서비스를 만들진 않았지만
뒷거래로 React를 공부한 지 이제 어느덧 1년이 지나면서 슬슬 나의 민낯이 드러나기 시작하는 기분이다.
개발 자체는 문제없이 하고 있지만, 코드가 지저분하다는 것이 느껴지고
커뮤니티에서 자주 사용하는 용어에 대해서 바로 어떤 것인지 인지를 못하는 상황이 발생하면서
관련 용어를 아는 게 얼마나 중요한지 깨닫고 있다.
그리고 그렇게 싫던 '기본'이란 것이 왜 중요한지 이제 좀 알 것 같다`,
	POST8: '너의휴가 나의휴가',
	DESCRIPTION8: `2박 3일간 휴가를 다녀왔다.
항상 휴가를 나갈 때면 듣는 소리이지만 군인이 무슨 휴가를 나와서 일을 하러 나오너라는 소리를 거의 100이면 100 듣는다.
하지만 난 이게 쉬는 거다. 왜냐하면, 부대 안에서는 할 수 없는 것을 하는 건 마찬가지이기 때문이다.

다른 사람 기준으로 쉬는 것은 부대에선 갈 수 없는 곳을 간다든가 친구들을 만난다든가 그렇게 노는 것 같다.
하지만 난 원래 그렇게 놀지 않았다. 그래서 난 부대에서 할 수 없던 나만의 놀이를 휴가 가서 하는 것뿐이다.
원래 바깥에 있었다면 난 그렇게 놀았을 것이다.`,
	POST9: '나는 왜 테스트 코드를 작성하지 않았는가',
	DESCRIPTION9: `나는 아직 이해가 되지 않는다. 왜 테스트 코드를 작성해야 하는지를 좀 더 와 닿게 설명을 해놓은 글이나 이야기를 들은 적이 없다. 테스트 코드 작성을 강조하지만 왜 해야하는지 구체적인 이유를 언급을 못하는 이유가 뭘까? 뚜렷한 이유를 제시를 나에게 제시하지 않고선 쉽게 나의 현재 생각을 바꾸긴 어려울 것 같다.`,
	POST10: '브랜드 디자인 - StartBucks편',
	DESCRIPTION10: ` 얼마 전 디자인에 대해서 어느 정도 공부를 해야겠단 생각이 들었다.
가장 큰 이유는 저번주에 갔다온 사이드 프로젝트 오프라인 모임에서 어떤 한 디자이너의 자료를 본적이 있는데 그걸보고 나의 디자인에 대한 시각이 달려지면서 나도 공부를 해두면 좋겠다고 생각했다.
 단순히 시각적인 요소를 배치하는 공부가 아닌 브랜드의 가치를 심는 것에 대한 공부에 관심이 생겼다.`,
	POST11: 'Android Study - Kotlin',
	DESCRIPTION11: ``
};

function Tag(props) {
	const [source, setSource] = useState('');
	const [summary, setSummary] = useState('');
	const [description, setDescription] = useState('');
	const { query: { id } } = useRouter();
	useEffect(() => {
		const url = `https://mineru98.github.io/static/posts/${id}.md`;
		if (id == '1') {
			setSummary(SUMMARY.POST1);
			setDescription(SUMMARY.DESCRIPTION1);
		} else if (id == '2') {
			setSummary(SUMMARY.POST2);
			setDescription(SUMMARY.DESCRIPTION2);
		} else if (id == '3') {
			setSummary(SUMMARY.POST3);
			setDescription(SUMMARY.DESCRIPTION3);
		} else if (id == '4') {
			setSummary(SUMMARY.POST4);
			setDescription(SUMMARY.DESCRIPTION4);
		} else if (id == '5') {
			setSummary(SUMMARY.POST5);
			setDescription(SUMMARY.DESCRIPTION5);
		} else if (id == '6') {
			setSummary(SUMMARY.POST6);
			setDescription(SUMMARY.DESCRIPTION6);
		} else if (id == '7') {
			setSummary(SUMMARY.POST7);
			setDescription(SUMMARY.DESCRIPTION7);
		} else if (id == '8') {
			setSummary(SUMMARY.POST8);
			setDescription(SUMMARY.DESCRIPTION8);
		} else if (id == '9') {
			setSummary(SUMMARY.POST9);
			setDescription(SUMMARY.DESCRIPTION9);
		} else if (id == '10') {
			setSummary(SUMMARY.POST10);
			setDescription(SUMMARY.DESCRIPTION10);
		} else if (id == '11') {
			setSummary(SUMMARY.POST11);
			setDescription(SUMMARY.DESCRIPTION11);
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
						<ReactMarkdown source={source}/>
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
						<ReactMarkdown source={source}/>
					</Container>
				</div>
			</Responsive>
		</div>
	);
}

export default Tag;