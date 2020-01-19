import React from 'react';
import {
	Grid,
	Header,
	Image,
	Card,
	Label,
	Container,
	Accordion,
	Responsive
} from 'semantic-ui-react'; 
import { Radar } from 'react-chartjs-2';
import './Home.css';

const Korean = {
	Project: '프로젝트',
	Project_Comment: '지금까지 제가 해왔던 작업물들입니다.',
	Code: '코드 스택',
	Combination_Title: '괄호 쌍의 조합Combination of Parentheses',
	Combination_Date: '2019년 8월 12일 배포',
	Combination_Description: '모든 괄호 쌍의 경우 개수에 대한 알고리즘',
	Calculate_Clock_Angle_Title: '시계 각도 계산',
	Calculate_Clock_Angle_Date: '2019년 4월 8일 배포',
	Calculate_Clock_Angle_Description: '시간을 입력 할 때 시계의 각도를 계산하는 알고리즘',
	Android_App_Project_Title: '안드로이드 앱 프로젝트',
	Android_App_Project_Date: '2018년 1월 9일 배포',
	Android_App_Project_Description: '나의 안드로이드 앱 프로젝트',
	DBKotlin_Title: '무작위 추출 with Kotlin',
	DBKotlin_Date: '2019년 11월 17일 배포',
	DBKotlin_Description: '확률이 배열에 미리 지정되어 있으면 알고리즘은 해당 확률로 결과를 추출합니다.',
	DBNodeJS_Title: '무작위 추출 with NodeJS',
	DBNodeJS_Date: '2019년 11월 17일 배포',
	DBNodeJS_Description: '확률이 배열에 미리 지정되어 있으면 알고리즘은 해당 확률로 결과를 추출합니다.',
	Division_Title: 'PC, Mobile 구분',
	Division_Date: '2019년 8월 15일 배포',
	Division_Description: 'PC 또는 모바일로 식별하는 프로젝트',
	Cnaplus_shop_Title: 'www.cnaplus.shop',
	Cnaplus_shop_Date: '2019년 6월 9일 배포',
	Cnaplus_shop_Description: '자가 학습 기술을 개발하기 위해 무작위로 문제를 혼합하여 문제 모음을 만드는 프로젝트',
	AutoBench_Title: 'Auto Bench',
	AutoBench_Date: '2019년 4월 7일 배포',
	AutoBench_Description: '웹 크롤링 기술을 사용하여 CPU / GPU 벤치 마크 사이트 데이터를 추출하는 프로젝트',
	KoreaMockTestBot_Title: '한국 모의고사 결과 수집 봇',
	KoreaMockTestBot_Date: '2019년 11월 12일 배포',
	KoreaMockTestBot_Description:
		'한국에서는 모의고사 시험이 중요합니다. 그리고 많은 한국 학생들은 점수를 친구들과 비교하는 것을 좋아합니다. 이 웹 크롤링 봇은 원하는 시험 횟차를 정하면 빠르고 편리하게 반응합니다.',
	Fibonacci_Title: '피보나치 수열',
	Fibonacci_Date: '2019년 4월 8일',
	Fibonacci_Description: '피보나치 수열 알고리즘',
	Noticend_Title: 'www.noticend.com',
	Noticend_Date: '2018년 3월 20일 배포',
	Noticend_Description: '연결되지 않을 권리를 달성하기위한 소셜 미디어 프로젝트.',
	Note_Title: '오답노트',
	Note_Date: '2019년 6월 9일 배포',
	Note_Description: '자가 학습 기술을 개발하기 위해 무작위로 문제를 혼합하여 문제 모음을 만드는 프로젝트',
	WareHouse_Title: '웨어하우스',
	WareHouse_Date: '2019년 11월 29일 배포',
	WareHouse_Description: '서버 & 클라이언트 통신을 하는 중에 인터넷 연결이 끊겨있을 때, 사용자 경험을 떨어뜨리지 않기 위한 Pop & Push 형태의 스트림처리 프로젝트'
};

const English = {
	Project: 'Project',
	Project_Comment: "These are the projects I've been working on so far.",
	Code: 'My Code Skil',
	Combination_Title: 'Combination of Parentheses',
	Combination_Date: 'Deployed Aug 12, 2019',
	Combination_Description: 'Algorithm for the number of cases in all pairs of parentheses',
	Calculate_Clock_Angle_Title: 'Calculate Clock Angle',
	Calculate_Clock_Angle_Date: 'Deployed Apr 8, 2019',
	Calculate_Clock_Angle_Description:
		'An algorithm that calculates the angle of the watch as you enter the time',
	Android_App_Project_Title: 'Android App Project',
	Android_App_Project_Date: 'Deployed Jan 9, 2018',
	Android_App_Project_Description: 'My First Android Project',
	DBKotlin_Title: 'Dictionary Random with Kotlin',
	DBKotlin_Date: 'Deployed Sep 17, 2019',
	DBKotlin_Description:
		'If the probability is specified in the array in advance, the algorithm extracts the result by the corresponding probability',
	DBNodeJS_Title: 'Dictionary Random with NodeJS',
	DBNodeJS_Date: 'Deployed Sep 17, 2019',
	DBNodeJS_Description:
		'If the probability is specified in the array in advance, the algorithm extracts the result by the corresponding probability',
	Division_Title: 'Division PC or Mobile',
	Division_Date: 'Deployed Aug 15, 2019',
	Division_Description: 'Project to identify by PC or mobile',
	Cnaplus_shop_Title: 'www.cnaplus.shop',
	Cnaplus_shop_Date: 'Deployed Jun 9, 2019',
	Cnaplus_shop_Description:
		'A project that creates a collection of problems by randomly mixing problems to develop self-study skills',
	AutoBench_Title: 'Auto Bench',
	AutoBench_Date: 'Deployed Apr 7, 2019',
	AutoBench_Description:
		'Project to extract cpu / gpu benchmark site data using web crawling technology',
	KoreaMockTestBot_Title: 'Results Collection Bot in Korea',
	KoreaMockTestBot_Date: 'Deployed Sep 12, 2019',
	KoreaMockTestBot_Description:
		'High school exams are important in Korea. Many Korean students like to compare their scores with their friends. This scraping robot responds quickly and conveniently to what you want.',
	Fibonacci_Title: 'Fibonacci',
	Fibonacci_Date: 'Deployed Apr 8, 2019',
	Fibonacci_Description: 'Fibonacci Algorithm',
	Noticend_Title: 'www.noticend.com',
	Noticend_Date: 'Deployed March 20, 2018',
	Noticend_Description: 'Social media project to achieve the right not to be connected.',
	Note_Title: 'Check Note',
	Note_Date: 'Deployed Jun 9, 2019',
	Note_Description:
		'A project that creates a collection of problems by randomly mixing problems to develop self-study skills',
	WareHouse_Title: 'WareHouse',
	WareHouse_Date: 'Deployed Nov 29, 2019',
	WareHouse_Description: 'Pop & Push stream processing project to prevent user experience when the internet connection is lost during server & client communication'
};

const Japanese = {
	Project: 'プロジェクト',
	Project_Comment: '今まで私がしてきた作業彩ります。',
	Code: 'コードスキル',
	Combination_Title: 'かっこの組み合わせ',
	Combination_Date: '2019年8月12日から配布',
	Combination_Description: 'すべてのかっこの場合数のアルゴリズム',
	Calculate_Clock_Angle_Title: '時計の角度を計算',
	Calculate_Clock_Angle_Date: '2019年4月8日から配布',
	Calculate_Clock_Angle_Description: '時間を入力すると、時計の角度を計算するアルゴリズム',
	Android_App_Project_Title: 'Androidアプリプロジェクト',
	Android_App_Project_Date: '2018年1月9日から配布',
	Android_App_Project_Description: '私のAndroidアプリプロジェクト',
	DBKotlin_Title: 'Kotlinによる辞書ランダム',
	DBKotlin_Date: '2019年11月17日から配布',
	DBKotlin_Description: '確率が配列にあらかじめ指定されているアルゴリズムは、その確率で結果を抽出します。',
	DBNodeJS_Title: 'NodeJSによる辞書ランダム',
	DBNodeJS_Date: '2019年11月17日から配布',
	DBNodeJS_Description: '確率が配列にあらかじめ指定されているアルゴリズムは、その確率で結果を抽出します。',
	Division_Title: 'PCまたはモバイル区分',
	Division_Date: '2019年8月15日から配布',
	Division_Description: 'PCまたは携帯電話で識別するプロジェクト',
	Cnaplus_shop_Title: 'www.cnaplus.shop',
	Cnaplus_shop_Date: '2019年6月9日から配布',
	Cnaplus_shop_Description: '自律学習技術を開発するためにランダムに問題を混合して、問題のコレクションを作成するプロジェクト',
	AutoBench_Title: 'Auto Bench',
	AutoBench_Date: '2019年4月7日から配布',
	AutoBench_Description: 'ウェブクロール技術を使用して、CPU/ GPUのベンチマークサイトのデータを抽出するプロジェクト',
	KoreaMockTestBot_Title: '韓国の模擬試験の結果を収集ボット',
	KoreaMockTestBot_Date: '2019年11月12日から配布',
	KoreaMockTestBot_Description:
		'韓国では模擬試験の試験が重要です。そして、多くの韓国の学生はスコアを友達と比較することを好みます。このウェブクロールボットは、所望の試験フェトチャを決めればすばやく簡単に反応します。',
	Fibonacci_Title: 'フィボナッチ',
	Fibonacci_Date: '2019年4月8日から配布',
	Fibonacci_Description: 'フィボナッチアルゴリズム',
	Noticend_Title: 'www.noticend.com',
	Noticend_Date: '2018年3月20日から配布',
	Noticend_Description: '接続されない権利を達成するためのソーシャルメディアのプロジェクト。',
	Note_Title: '誤答ノート',
	Note_Date: '2019年6月9日から配布',
	Note_Description: '自律学習技術を開発するためにランダムに問題を混合して、問題のコレクションを作成するプロジェクト',
	WareHouse_Title: '倉庫',
	WareHouse_Date: '2019年11月29日から配布',
	WareHouse_Description: 'サーバー＆クライアントの通信をする際に、インターネット接続が切れているときに、ユーザーの経験を落とさないためのPop＆Push形態のストリーム処理プロジェクト'
};

const data = {
	labels: ['문법', '디버깅', '아키택쳐', '확장성', '코드 리뷰'],
	datasets: [
		{
			label: 'C / C#',
			backgroundColor: 'rgba(20,148,255,0.2)',
			borderColor: 'rgba(20,148,255,1)',
			pointBackgroundColor: 'rgba(20,148,255,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(20,148,255,1)',
			data: [82, 81, 51, 58, 63]
		},
		{
			label: 'Java / Kotlin',
			backgroundColor: 'rgba(255,169,20,0.2)',
			borderColor: 'rgba(255,169,20,1)',
			pointBackgroundColor: 'rgba(1255,169,20,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,169,20,1)',
			data: [88, 90, 91, 95, 92]
		},
		{
			label: 'JS / NodeJS / ReactJS',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			pointBackgroundColor: 'rgba(255,99,132,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,99,132,1)',
			data: [86, 72, 72, 97, 88]
		},
		{
			label: 'Python',
			backgroundColor: 'rgba(239,220,5,0.2)',
			borderColor: 'rgba(239,220,5,1)',
			pointBackgroundColor: 'rgba(239,220,5,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(239,220,5,1)',
			data: [85, 77, 67, 84, 81]
		}
	]
};

const data_en = {
	labels: ['Syntax', 'Debugging', 'Architecture', 'Expansion', 'CodeReview'],
	datasets: [
		{
			label: 'C / C#',
			backgroundColor: 'rgba(20,148,255,0.2)',
			borderColor: 'rgba(20,148,255,1)',
			pointBackgroundColor: 'rgba(20,148,255,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(20,148,255,1)',
			data: [82, 81, 51, 58, 63]
		},
		{
			label: 'Java / Kotlin',
			backgroundColor: 'rgba(255,169,20,0.2)',
			borderColor: 'rgba(255,169,20,1)',
			pointBackgroundColor: 'rgba(1255,169,20,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,169,20,1)',
			data: [88, 90, 91, 95, 92]
		},
		{
			label: 'JS / NodeJS / ReactJS',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			pointBackgroundColor: 'rgba(255,99,132,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,99,132,1)',
			data: [86, 72, 72, 97, 88]
		},
		{
			label: 'Python',
			backgroundColor: 'rgba(239,220,5,0.2)',
			borderColor: 'rgba(239,220,5,1)',
			pointBackgroundColor: 'rgba(239,220,5,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(239,220,5,1)',
			data: [85, 77, 67, 84, 81]
		}
	]
};

const data_jp = {
	labels: ['構文', 'デバッグ', '建築', '拡張性', 'コードレビュー'],
	datasets: [
		{
			label: 'C / C#',
			backgroundColor: 'rgba(20,148,255,0.2)',
			borderColor: 'rgba(20,148,255,1)',
			pointBackgroundColor: 'rgba(20,148,255,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(20,148,255,1)',
			data: [82, 81, 51, 58, 63]
		},
		{
			label: 'Java / Kotlin',
			backgroundColor: 'rgba(255,169,20,0.2)',
			borderColor: 'rgba(255,169,20,1)',
			pointBackgroundColor: 'rgba(1255,169,20,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,169,20,1)',
			data: [88, 90, 91, 95, 92]
		},
		{
			label: 'JS / NodeJS / ReactJS',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			pointBackgroundColor: 'rgba(255,99,132,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,99,132,1)',
			data: [86, 72, 72, 97, 88]
		},
		{
			label: 'Python',
			backgroundColor: 'rgba(239,220,5,0.2)',
			borderColor: 'rgba(239,220,5,1)',
			pointBackgroundColor: 'rgba(239,220,5,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(239,220,5,1)',
			data: [85, 77, 67, 84, 81]
		}
	]
};

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.match.path.substring(1),
			isKr: false,
			isEn: true
		};
	}

	componentDidMount() {
		const { value } = this.state;
		if (value === '') {
			this.setState({
				isKr: true,
				isEn: false
			});
		} else if (value === 'en') {
			this.setState({
				isKr: false,
				isEn: true
			});
		} else if (value === 'jp') {
			this.setState({
				isKr: false,
				isEn: false
			});
		}
	}

	render() {
		const { isKr, isEn } = this.state;
		const PC = [
			{
				key: 0,
				title: 'C / C#',
				content: {
					content: (
						<Grid>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Combination_of_Parentheses" id="card">
										<Image src="/img/icon_parentheses.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.Combination_Title
												) : isEn ? (
													English.Combination_Title
												) : (
													Japanese.Combination_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.Combination_Date
													) : isEn ? (
														English.Combination_Date
													) : (
														Japanese.Combination_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Combination_Description
												) : isEn ? (
													English.Combination_Description
												) : (
													Japanese.Combination_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_cplusplus.png" /> C
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/CShap_Clock_Angle" id="card">
										<Image src="/img/icon_clock.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.Calculate_Clock_Angle_Title
												) : isEn ? (
													English.Calculate_Clock_Angle_Title
												) : (
													Japanese.Calculate_Clock_Angle_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.Calculate_Clock_Angle_Date
													) : isEn ? (
														English.Calculate_Clock_Angle_Date
													) : (
														Japanese.Calculate_Clock_Angle_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Calculate_Clock_Angle_Description
												) : isEn ? (
													English.Calculate_Clock_Angle_Description
												) : (
													Japanese.Calculate_Clock_Angle_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_csharp.png" /> C#
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 1,
				title: 'Java / Kotlin',
				content: {
					content: (
						<Grid>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/HopsAndroid" id="card">
										<Image src="/img/icon_android.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.Android_App_Project_Title
												) : isEn ? (
													English.Android_App_Project_Title
												) : (
													Japanese.Android_App_Project_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.Android_App_Project_Date
													) : isEn ? (
														English.Android_App_Project_Date
													) : (
														Japanese.Android_App_Project_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Android_App_Project_Description
												) : isEn ? (
													English.Android_App_Project_Description
												) : (
													Japanese.Android_App_Project_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_java.png" /> Java
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/DictionaryRandom/tree/master/kotlin" id="card">
										<Image src="/img/icon_random.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.DBKotlin_Title
												) : isEn ? (
													English.DBKotlin_Title
												) : (
													Japanese.DBKotlin_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.DBKotlin_Date
													) : isEn ? (
														English.DBKotlin_Date
													) : (
														Japanese.DBKotlin_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.DBKotlin_Description
												) : isEn ? (
													English.DBKotlin_Description
												) : (
													Japanese.DBKotlin_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_kotlin.png" /> Kotlin
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Warehouse" id="card">
										<Image src="/img/icon_warehouse.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.WareHouse_Title
												) : isEn ? (
													English.WareHouse_Title
												) : (
													Japanese.WareHouse_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.WareHouse_Date
													) : isEn ? (
														English.WareHouse_Date
													) : (
														Japanese.WareHouse_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.WareHouse_Description
												) : isEn ? (
													English.WareHouse_Description
												) : (
													Japanese.WareHouse_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_kotlin.png" /> Kotlin
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card
										href="https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko"
										id="card"
									>
										<Image src="/img/icon_cnaplus.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? Korean.Note_Title : isEn ? English.Note_Title : Japanese.Note_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? Korean.Note_Date : isEn ? English.Note_Date : Japanese.Note_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Note_Description
												) : isEn ? (
													English.Note_Description
												) : (
													Japanese.Note_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_java.png" /> Java
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 2,
				title: 'JavaScript / NodeJS / ReactJS',
				content: {
					content: (
						<Grid>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Card href="https://mineru98.github.io/Division_PC_Mobile/" id="card">
										<Image src="/img/icon_division.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.Division_Title
												) : isEn ? (
													English.Division_Title
												) : (
													Japanese.Division_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.Division_Date
													) : isEn ? (
														English.Division_Date
													) : (
														Japanese.Division_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Division_Description
												) : isEn ? (
													English.Division_Description
												) : (
													Japanese.Division_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_js.png" /> JavaScript
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/DictionaryRandom/tree/master/nodejs" id="card">
										<Image src="/img/icon_random.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.DBNodeJS_Title
												) : isEn ? (
													English.DBNodeJS_Title
												) : (
													Japanese.DBNodeJS_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.DBNodeJS_Date
													) : isEn ? (
														English.DBNodeJS_Date
													) : (
														Japanese.DBNodeJS_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.DBNodeJS_Title
												) : isEn ? (
													English.DBNodeJS_Description
												) : (
													Japanese.DBNodeJS_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_nodejs.png" /> NodeJS
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="http://www.cnaplus.shop" id="card">
										<Image src="/img/icon_cnaplus.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.Cnaplus_shop_Title
												) : isEn ? (
													English.Cnaplus_shop_Title
												) : (
													Japanese.Cnaplus_shop_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.Cnaplus_shop_Date
													) : isEn ? (
														English.Cnaplus_shop_Date
													) : (
														Japanese.Cnaplus_shop_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Cnaplus_shop_Description
												) : isEn ? (
													English.Cnaplus_shop_Description
												) : (
													Japanese.Cnaplus_shop_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_reactjs.png" /> ReactJS
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 3,
				title: 'Python',
				content: {
					content: (
						<Grid>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/AutoBench" id="card">
										<Image src="/img/icon_autobench.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.AutoBench_Title
												) : isEn ? (
													English.AutoBench_Title
												) : (
													Japanese.AutoBench_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.AutoBench_Date
													) : isEn ? (
														English.AutoBench_Date
													) : (
														Japanese.AutoBench_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.AutoBench_Description
												) : isEn ? (
													English.AutoBench_Description
												) : (
													Japanese.AutoBench_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/KoreaMockTestBot" id="card">
										<Image src="/img/icon_webbot.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.KoreaMockTestBot_Title
												) : isEn ? (
													English.KoreaMockTestBot_Title
												) : (
													Japanese.KoreaMockTestBot_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.KoreaMockTestBot_Date
													) : isEn ? (
														English.KoreaMockTestBot_Date
													) : (
														Japanese.KoreaMockTestBot_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.KoreaMockTestBot_Description
												) : isEn ? (
													English.KoreaMockTestBot_Description
												) : (
													Japanese.KoreaMockTestBot_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Fibonacci-Even-Sum" id="card">
										<Image src="/img/icon_fibonacci.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.Fibonacci_Title
												) : isEn ? (
													English.Fibonacci_Title
												) : (
													Japanese.Fibonacci_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.Fibonacci_Date
													) : isEn ? (
														English.Fibonacci_Date
													) : (
														Japanese.Fibonacci_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Fibonacci_Description
												) : isEn ? (
													English.Fibonacci_Description
												) : (
													Japanese.Fibonacci_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			}
		];

		const Mobile = [
			{
				key: 0,
				title: 'C / C#',
				content: {
					content: (
						<Grid>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Combination_of_Parentheses" id="card">
										<Image src="/img/icon_parentheses.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.Combination_Title
												) : isEn ? (
													English.Combination_Title
												) : (
													Japanese.Combination_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.Combination_Date
													) : isEn ? (
														English.Combination_Date
													) : (
														Japanese.Combination_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Combination_Description
												) : isEn ? (
													English.Combination_Description
												) : (
													Japanese.Combination_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_cplusplus.png" /> C
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/CShap_Clock_Angle" id="card">
										<Image src="/img/icon_clock.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.Calculate_Clock_Angle_Title
												) : isEn ? (
													English.Calculate_Clock_Angle_Title
												) : (
													Japanese.Calculate_Clock_Angle_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.Calculate_Clock_Angle_Date
													) : isEn ? (
														English.Calculate_Clock_Angle_Date
													) : (
														Japanese.Calculate_Clock_Angle_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Calculate_Clock_Angle_Description
												) : isEn ? (
													English.Calculate_Clock_Angle_Description
												) : (
													Japanese.Calculate_Clock_Angle_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_csharp.png" /> C#
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 1,
				title: 'Java / Kotlin',
				content: {
					content: (
						<Grid>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/HopsAndroid" id="card">
										<Image src="/img/icon_android.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.Android_App_Project_Title
												) : isEn ? (
													English.Android_App_Project_Title
												) : (
													Japanese.Android_App_Project_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.Android_App_Project_Date
													) : isEn ? (
														English.Android_App_Project_Date
													) : (
														Japanese.Android_App_Project_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Android_App_Project_Description
												) : isEn ? (
													English.Android_App_Project_Description
												) : (
													Japanese.Android_App_Project_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_java.png" /> Java
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card
										href="https://github.com/Mineru98/DictionaryRandom/tree/master/kotlin"
										id="card"
									>
										<Image src="/img/icon_random.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.DBKotlin_Title
												) : isEn ? (
													English.DBKotlin_Title
												) : (
													Japanese.DBKotlin_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.DBKotlin_Date
													) : isEn ? (
														English.DBKotlin_Date
													) : (
														Japanese.DBKotlin_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.DBKotlin_Description
												) : isEn ? (
													English.DBKotlin_Description
												) : (
													Japanese.DBKotlin_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_kotlin.png" /> Kotlin
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Warehouse" id="card">
										<Image src="/img/icon_warehouse.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.WareHouse_Title
												) : isEn ? (
													English.WareHouse_Title
												) : (
													Japanese.WareHouse_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.WareHouse_Date
													) : isEn ? (
														English.WareHouse_Date
													) : (
														Japanese.WareHouse_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.WareHouse_Description
												) : isEn ? (
													English.WareHouse_Description
												) : (
													Japanese.WareHouse_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_kotlin.png" /> Kotlin
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card
										href="https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko"
										id="card"
									>
										<Image src="/img/icon_cnaplus.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? Korean.Note_Title : isEn ? English.Note_Title : Japanese.Note_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? Korean.Note_Date : isEn ? English.Note_Date : Japanese.Note_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Note_Description
												) : isEn ? (
													English.Note_Description
												) : (
													Japanese.Note_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_java.png" /> Java
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 2,
				title: 'JavaScript / NodeJS / ReactJS',
				content: {
					content: (
						<Grid>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://mineru98.github.io/Division_PC_Mobile/" id="card">
										<Image src="/img/icon_division.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.Division_Title
												) : isEn ? (
													English.Division_Title
												) : (
													Japanese.Division_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.Division_Date
													) : isEn ? (
														English.Division_Date
													) : (
														Japanese.Division_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Division_Description
												) : isEn ? (
													English.Division_Description
												) : (
													Japanese.Division_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_js.png" /> JavaScript
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card
										href="https://github.com/Mineru98/DictionaryRandom/tree/master/nodejs"
										id="card"
									>
										<Image src="/img/icon_random.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.DBNodeJS_Title
												) : isEn ? (
													English.DBNodeJS_Title
												) : (
													Japanese.DBNodeJS_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.DBNodeJS_Date
													) : isEn ? (
														English.DBNodeJS_Date
													) : (
														Japanese.DBNodeJS_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.DBNodeJS_Title
												) : isEn ? (
													English.DBNodeJS_Description
												) : (
													Japanese.DBNodeJS_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_nodejs.png" /> NodeJS
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card href="http://www.cnaplus.shop" id="card">
										<Image src="/img/icon_cnaplus.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.Cnaplus_shop_Title
												) : isEn ? (
													English.Cnaplus_shop_Title
												) : (
													Japanese.Cnaplus_shop_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.Cnaplus_shop_Date
													) : isEn ? (
														English.Cnaplus_shop_Date
													) : (
														Japanese.Cnaplus_shop_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Cnaplus_shop_Description
												) : isEn ? (
													English.Cnaplus_shop_Description
												) : (
													Japanese.Cnaplus_shop_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_reactjs.png" /> ReactJS
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 3,
				title: 'Python',
				content: {
					content: (
						<Grid>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/AutoBench" id="card">
										<Image src="/img/icon_autobench.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.AutoBench_Title
												) : isEn ? (
													English.AutoBench_Title
												) : (
													Japanese.AutoBench_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.AutoBench_Date
													) : isEn ? (
														English.AutoBench_Date
													) : (
														Japanese.AutoBench_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.AutoBench_Description
												) : isEn ? (
													English.AutoBench_Description
												) : (
													Japanese.AutoBench_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/KoreaMockTestBot" id="card">
										<Image src="/img/icon_webbot.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.KoreaMockTestBot_Title
												) : isEn ? (
													English.KoreaMockTestBot_Title
												) : (
													Japanese.KoreaMockTestBot_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.KoreaMockTestBot_Date
													) : isEn ? (
														English.KoreaMockTestBot_Date
													) : (
														Japanese.KoreaMockTestBot_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.KoreaMockTestBot_Description
												) : isEn ? (
													English.KoreaMockTestBot_Description
												) : (
													Japanese.KoreaMockTestBot_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Fibonacci-Even-Sum" id="card">
										<Image src="/img/icon_fibonacci.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{isKr ? (
													Korean.Fibonacci_Title
												) : isEn ? (
													English.Fibonacci_Title
												) : (
													Japanese.Fibonacci_Title
												)}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{isKr ? (
														Korean.Fibonacci_Date
													) : isEn ? (
														English.Fibonacci_Date
													) : (
														Japanese.Fibonacci_Date
													)}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{isKr ? (
													Korean.Fibonacci_Description
												) : isEn ? (
													English.Fibonacci_Description
												) : (
													Japanese.Fibonacci_Description
												)}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" color="white" image>
												<Image src="img/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			}
		];

		return (
			<div>
				{/* PC 화면 */}
				<Responsive minWidth={769}>
					<div className="home_background">
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
					<div className="home_container">
						<Container textAlign="left">
							<Header
								id="default"
								as="h2"
								image="/img/project.svg"
								content={isKr ? Korean.Project : isEn ? English.Project : Japanese.Project}
							/>
							<p id="default" className="description">
								{isKr ? (
									Korean.Project_Comment
								) : isEn ? (
									English.Project_Comment
								) : (
									Japanese.Project_Comment
								)}
							</p>
							<Grid>
								<Grid.Row columns={4}>
									<Grid.Column>
										<Card href="https://noticend.com" id="card">
											<Image src="/img/icon_noticend.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{isKr ? (
														Korean.Noticend_Title
													) : isEn ? (
														English.Noticend_Title
													) : (
														Japanese.Noticend_Title
													)}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{isKr ? (
															Korean.Noticend_Date
														) : isEn ? (
															English.Noticend_Date
														) : (
															Japanese.Noticend_Date
														)}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{isKr ? (
														Korean.Noticend_Description
													) : isEn ? (
														English.Noticend_Description
													) : (
														Japanese.Noticend_Description
													)}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" color="white" image>
													<Image src="img/icon_xamarin.png" /> Xamarin.forms
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
									<Grid.Column>
										<Card href="http://www.cnaplus.shop" id="card">
											<Image src="/img/icon_cnaplus.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{isKr ? (
														Korean.Cnaplus_shop_Title
													) : isEn ? (
														English.Cnaplus_shop_Title
													) : (
														Japanese.Cnaplus_shop_Title
													)}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{isKr ? (
															Korean.Cnaplus_shop_Date
														) : isEn ? (
															English.Cnaplus_shop_Date
														) : (
															Japanese.Cnaplus_shop_Date
														)}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{isKr ? (
														Korean.Cnaplus_shop_Description
													) : isEn ? (
														English.Cnaplus_shop_Description
													) : (
														Japanese.Cnaplus_shop_Description
													)}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" color="white" image>
													<Image src="img/icon_reactjs.png" /> ReactJS
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
									<Grid.Column>
										<Card href="https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko" id="card">
											<Image src="/img/icon_cnaplus.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{isKr ? (
														Korean.Note_Title
													) : isEn ? (
														English.Note_Title
													) : (
														Japanese.Note_Title
													)}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{isKr ? (
															Korean.Note_Date
														) : isEn ? (
															English.Note_Date
														) : (
															Japanese.Note_Date
														)}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{isKr ? (
														Korean.Note_Description
													) : isEn ? (
														English.Note_Description
													) : (
														Japanese.Note_Description
													)}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" color="white" image>
													<Image src="img/icon_java.png" /> Java
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row columns={4}>
									<Grid.Column>
										<Card href="https://github.com/Mineru98/AutoBench" id="card">
											<Image src="/img/icon_autobench.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{isKr ? (
														Korean.AutoBench_Title
													) : isEn ? (
														English.AutoBench_Title
													) : (
														Japanese.AutoBench_Title
													)}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{isKr ? (
															Korean.AutoBench_Date
														) : isEn ? (
															English.AutoBench_Date
														) : (
															Japanese.AutoBench_Date
														)}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{isKr ? (
														Korean.AutoBench_Description
													) : isEn ? (
														English.AutoBench_Description
													) : (
														Japanese.AutoBench_Description
													)}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" color="white" image>
													<Image src="img/icon_python.png" /> Python
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
									<Grid.Column>
										<Card href="https://github.com/Mineru98/KoreaMockTestBot" id="card">
											<Image src="/img/icon_webbot.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{isKr ? (
														Korean.KoreaMockTestBot_Title
													) : isEn ? (
														English.KoreaMockTestBot_Title
													) : (
														Japanese.KoreaMockTestBot_Title
													)}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{isKr ? (
															Korean.KoreaMockTestBot_Date
														) : isEn ? (
															English.KoreaMockTestBot_Date
														) : (
															Japanese.KoreaMockTestBot_Date
														)}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{isKr ? (
														Korean.KoreaMockTestBot_Description
													) : isEn ? (
														English.KoreaMockTestBot_Description
													) : (
														Japanese.KoreaMockTestBot_Description
													)}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" color="white" image>
													<Image src="img/icon_python.png" /> Python
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Container>
						<Container textAlign="left">
							<Header
								id="default"
								as="h2"
								image="/img/language.svg"
								content={isKr ? Korean.Code : isEn ? English.Code : Japanese.Code}
							/>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Radar data={isKr ? data : isEn ? data_en : data_jp} height={150} />
									</Grid.Column>
								</Grid.Row>
								<Grid.Row columns={1}>
									<Grid.Column>
										<Accordion defaultActiveIndex={[]} panels={PC} exclusive={false} />
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Container>
					</div>
				</Responsive>
				{/* 모바일 화면 */}
				<Responsive minWidth={1} maxWidth={768}>
					<div className="home_background">
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
					<div className="home_container">
						<Container textAlign="left">
							<Header id="default" as="h2" image="/img/project.svg" content={isKr ? Korean.Project : isEn ? English.Project : Japanese.Project} />
							<p id="default" className="description">
								{isKr ? (
									Korean.Project_Comment
								) : isEn ? (
									English.Project_Comment
								) : (
									Japanese.Project_Comment
								)}
							</p>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Card href="https://noticend.com" id="card">
											<Image src="/img/icon_noticend.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{isKr ? (
														Korean.Noticend_Title
													) : isEn ? (
														English.Noticend_Title
													) : (
														Japanese.Noticend_Title
													)}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{isKr ? (
															Korean.Noticend_Date
														) : isEn ? (
															English.Noticend_Date
														) : (
															Japanese.Noticend_Date
														)}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{isKr ? (
														Korean.Noticend_Description
													) : isEn ? (
														English.Noticend_Description
													) : (
														Japanese.Noticend_Description
													)}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" color="white" image>
													<Image src="img/icon_xamarin.png" /> Xamarin.forms
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										<Card href="http://www.cnaplus.shop" id="card">
											<Image src="/img/icon_cnaplus.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{isKr ? (
														Korean.Cnaplus_shop_Title
													) : isEn ? (
														English.Cnaplus_shop_Title
													) : (
														Japanese.Cnaplus_shop_Title
													)}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{isKr ? (
															Korean.Cnaplus_shop_Date
														) : isEn ? (
															English.Cnaplus_shop_Date
														) : (
															Japanese.Cnaplus_shop_Date
														)}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{isKr ? (
														Korean.Cnaplus_shop_Description
													) : isEn ? (
														English.Cnaplus_shop_Description
													) : (
														Japanese.Cnaplus_shop_Description
													)}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" color="white" image>
													<Image src="img/icon_reactjs.png" /> ReactJS
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										<Card
											href="https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko"
											id="card"
										>
											<Image src="/img/icon_cnaplus.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{isKr ? (
														Korean.Note_Title
													) : isEn ? (
														English.Note_Title
													) : (
														Japanese.Note_Title
													)}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{isKr ? (
															Korean.Note_Date
														) : isEn ? (
															English.Note_Date
														) : (
															Japanese.Note_Date
														)}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{isKr ? (
														Korean.Note_Description
													) : isEn ? (
														English.Note_Description
													) : (
														Japanese.Note_Description
													)}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" color="white" image>
													<Image src="img/icon_java.png" /> Java
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										<Card href="https://github.com/Mineru98/AutoBench" id="card">
											<Image src="/img/icon_autobench.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{isKr ? (
														Korean.AutoBench_Title
													) : isEn ? (
														English.AutoBench_Title
													) : (
														Japanese.AutoBench_Title
													)}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{isKr ? (
															Korean.AutoBench_Date
														) : isEn ? (
															English.AutoBench_Date
														) : (
															Japanese.AutoBench_Date
														)}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{isKr ? (
														Korean.AutoBench_Description
													) : isEn ? (
														English.AutoBench_Description
													) : (
														Japanese.AutoBench_Description
													)}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" color="white" image>
													<Image src="img/icon_python.png" /> Python
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										<Card href="https://github.com/Mineru98/KoreaMockTestBot" id="card">
											<Image src="/img/icon_webbot.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{isKr ? (
														Korean.KoreaMockTestBot_Title
													) : isEn ? (
														English.KoreaMockTestBot_Title
													) : (
														Japanese.KoreaMockTestBot_Title
													)}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{isKr ? (
															Korean.KoreaMockTestBot_Date
														) : isEn ? (
															English.KoreaMockTestBot_Date
														) : (
															Japanese.KoreaMockTestBot_Date
														)}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{isKr ? (
														Korean.KoreaMockTestBot_Description
													) : isEn ? (
														English.KoreaMockTestBot_Description
													) : (
														Japanese.KoreaMockTestBot_Description
													)}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" color="white" image>
													<Image src="img/icon_python.png" /> Python
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Container>
						<Container textAlign="left">
							<Header id="default" as="h2" image="/img/language.svg" content={isKr ? Korean.Code : isEn ? English.Code : Japanese.Code} />
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Radar data={isKr ? data : isEn ? data_en : data_jp} height={300} />
									</Grid.Column>
								</Grid.Row>
								<Grid.Row columns={1}>
									<Grid.Column>
										<Accordion defaultActiveIndex={[]} panels={Mobile} exclusive={false} />
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Container>
					</div>
				</Responsive>
			</div>
		);
	}
}
export default Home;