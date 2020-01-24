webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/KR.js":
/*!*******************************!*\
  !*** ./components/Home/KR.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.css */ "./components/Home/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/workspace/Mineru98.github.io/components/Home/KR.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




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
  KoreaMockTestBot_Description: '한국에서는 모의고사 시험이 중요합니다. 그리고 많은 한국 학생들은 점수를 친구들과 비교하는 것을 좋아합니다. 이 웹 크롤링 봇은 원하는 시험 횟차를 정하면 빠르고 편리하게 반응합니다.',
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
  WareHouse_Description: '서버 & 클라이언트 통신을 하는 중에 인터넷 연결이 끊겨있을 때, 사용자 경험을 떨어뜨리지 않기 위한 Pop & Push 형태의 스트림처리 프로젝트',
  UrlHit_Title: 'UrlHit',
  UrlHit_Date: '2020년 1월 24일 배포',
  UrlHit_Description: 'URL 공유를 할 때, 어떤 경로로 사용자가 유입되는지 추적하는 솔루션'
};
const data = {
  labels: ['문법', '디버깅', '아키택쳐', '확장성', '코드 리뷰'],
  datasets: [{
    label: 'C / C#',
    backgroundColor: 'rgba(20,148,255,0.2)',
    borderColor: 'rgba(20,148,255,1)',
    pointBackgroundColor: 'rgba(20,148,255,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(20,148,255,1)',
    data: [82, 81, 51, 58, 63]
  }, {
    label: 'Java / Kotlin',
    backgroundColor: 'rgba(255,169,20,0.2)',
    borderColor: 'rgba(255,169,20,1)',
    pointBackgroundColor: 'rgba(1255,169,20,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(255,169,20,1)',
    data: [88, 90, 91, 95, 92]
  }, {
    label: 'JS / NodeJS / ReactJS',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    pointBackgroundColor: 'rgba(255,99,132,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(255,99,132,1)',
    data: [86, 72, 72, 97, 88]
  }, {
    label: 'Python',
    backgroundColor: 'rgba(239,220,5,0.2)',
    borderColor: 'rgba(239,220,5,1)',
    pointBackgroundColor: 'rgba(239,220,5,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(239,220,5,1)',
    data: [85, 77, 67, 84, 81]
  }]
};

class HomeKR extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const PC = [{
      key: 0,
      title: 'C / C#',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          columns: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Combination_of_Parentheses",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_parentheses.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, Korean.Combination_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, Korean.Combination_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, Korean.Combination_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cplusplus.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }), " C")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/CShap_Clock_Angle",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_clock.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_csharp.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }), " C#"))))))
      }
    }, {
      key: 1,
      title: 'Java / Kotlin',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          columns: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/HopsAndroid",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_android.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, Korean.Android_App_Project_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, Korean.Android_App_Project_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, Korean.Android_App_Project_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }), " Java")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/DictionaryRandom/tree/master/kotlin",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_random.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: this
        }, Korean.DBKotlin_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, Korean.DBKotlin_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, Korean.DBKotlin_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }), " Kotlin")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Warehouse",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_warehouse.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, Korean.WareHouse_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          __self: this
        }, Korean.WareHouse_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, Korean.WareHouse_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }), " Kotlin")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cnaplus.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, Korean.Note_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          },
          __self: this
        }, Korean.Note_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, Korean.Note_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        }), " Java"))))))
      }
    }, {
      key: 2,
      title: 'JavaScript / NodeJS / ReactJS',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          columns: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://mineru98.github.io/Division_PC_Mobile/",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_division.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, Korean.Division_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          },
          __self: this
        }, Korean.Division_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          },
          __self: this
        }, Korean.Division_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_js.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          },
          __self: this
        }), " JavaScript")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/DictionaryRandom/tree/master/nodejs",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_random.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }, Korean.DBNodeJS_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          },
          __self: this
        }, Korean.DBNodeJS_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327
          },
          __self: this
        }, Korean.DBNodeJS_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_nodejs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333
          },
          __self: this
        }), " NodeJS")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "http://www.cnaplus.shop",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cnaplus.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342
          },
          __self: this
        }, Korean.Cnaplus_shop_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346
          },
          __self: this
        }, Korean.Cnaplus_shop_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350
          },
          __self: this
        }, Korean.Cnaplus_shop_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_reactjs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356
          },
          __self: this
        }), " ReactJS"))))))
      }
    }, {
      key: 3,
      title: 'Python',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          columns: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 373
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/AutoBench",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_autobench.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 377
          },
          __self: this
        }, Korean.AutoBench_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 381
          },
          __self: this
        }, Korean.AutoBench_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 385
          },
          __self: this
        }, Korean.AutoBench_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 389
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391
          },
          __self: this
        }), " Python")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 396
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/KoreaMockTestBot",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 397
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_webbot.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 398
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          },
          __self: this
        }, Korean.KoreaMockTestBot_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 403
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 404
          },
          __self: this
        }, Korean.KoreaMockTestBot_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 408
          },
          __self: this
        }, Korean.KoreaMockTestBot_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 413
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414
          },
          __self: this
        }), " Python")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 419
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Fibonacci-Even-Sum",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_fibonacci.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 421
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 422
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 423
          },
          __self: this
        }, Korean.Fibonacci_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427
          },
          __self: this
        }, Korean.Fibonacci_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 431
          },
          __self: this
        }, Korean.Fibonacci_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 435
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 436
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 437
          },
          __self: this
        }), " Python")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/UrlHit",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 443
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_urlhit.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 444
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 445
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 446
          },
          __self: this
        }, Korean.UrlHit_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 449
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 450
          },
          __self: this
        }, Korean.UrlHit_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 454
          },
          __self: this
        }, Korean.UrlHit_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 458
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 459
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 460
          },
          __self: this
        }), " Python"))))))
      }
    }];
    const Mobile = [{
      key: 0,
      title: 'C / C#',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 478
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 479
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 480
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Combination_of_Parentheses",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 481
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_parentheses.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 482
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 483
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 484
          },
          __self: this
        }, Korean.Combination_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 487
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 488
          },
          __self: this
        }, Korean.Combination_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 492
          },
          __self: this
        }, Korean.Combination_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 496
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 497
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cplusplus.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 498
          },
          __self: this
        }), " C"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 504
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 505
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/CShap_Clock_Angle",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 506
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_clock.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 507
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 508
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 509
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 512
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 513
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 517
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 521
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 522
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_csharp.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 523
          },
          __self: this
        }), " C#"))))))
      }
    }, {
      key: 1,
      title: 'Java / Kotlin',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 538
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 539
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 540
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/HopsAndroid",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 541
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_android.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 542
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 543
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 544
          },
          __self: this
        }, Korean.Android_App_Project_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 547
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 548
          },
          __self: this
        }, Korean.Android_App_Project_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 552
          },
          __self: this
        }, Korean.Android_App_Project_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 556
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 557
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 558
          },
          __self: this
        }), " Java"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 564
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 565
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/DictionaryRandom/tree/master/kotlin",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 566
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_random.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 570
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 571
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 572
          },
          __self: this
        }, Korean.DBKotlin_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 575
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 576
          },
          __self: this
        }, Korean.DBKotlin_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 580
          },
          __self: this
        }, Korean.DBKotlin_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 584
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 585
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 586
          },
          __self: this
        }), " Kotlin"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 592
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 593
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Warehouse",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 594
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_warehouse.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 595
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 596
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 597
          },
          __self: this
        }, Korean.WareHouse_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 600
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 601
          },
          __self: this
        }, Korean.WareHouse_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 605
          },
          __self: this
        }, Korean.WareHouse_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 609
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 610
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 611
          },
          __self: this
        }), " Kotlin"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 617
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 618
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 619
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cnaplus.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 623
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 624
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 625
          },
          __self: this
        }, Korean.Note_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 628
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 629
          },
          __self: this
        }, Korean.Note_Data)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 633
          },
          __self: this
        }, Korean.Note_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 637
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 638
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 639
          },
          __self: this
        }), " Java"))))))
      }
    }, {
      key: 2,
      title: 'JavaScript / NodeJS / ReactJS',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 654
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 655
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 656
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://mineru98.github.io/Division_PC_Mobile/",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 657
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_division.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 658
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 659
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 660
          },
          __self: this
        }, Korean.Division_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 663
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 664
          },
          __self: this
        }, Korean.Division_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 668
          },
          __self: this
        }, Korean.Division_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 672
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 673
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_js.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 674
          },
          __self: this
        }), " JavaScript"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 680
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 681
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/DictionaryRandom/tree/master/nodejs",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 682
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_random.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 686
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 687
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 688
          },
          __self: this
        }, Korean.DBNodeJS_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 691
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 692
          },
          __self: this
        }, Korean.DBNodeJS_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 696
          },
          __self: this
        }, Korean.DBNodeJS_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 700
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 701
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_nodejs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 702
          },
          __self: this
        }), " NodeJS"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 708
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 709
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "http://www.cnaplus.shop",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 710
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cnaplus.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 711
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 712
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 713
          },
          __self: this
        }, Korean.Cnaplus_shop_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 716
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 717
          },
          __self: this
        }, Korean.Cnaplus_shop_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 721
          },
          __self: this
        }, Korean.Cnaplus_shop_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 725
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 726
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_reactjs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 727
          },
          __self: this
        }), " ReactJS"))))))
      }
    }, {
      key: 3,
      title: 'Python',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 742
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 743
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 744
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/AutoBench",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 745
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_autobench.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 746
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 747
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 748
          },
          __self: this
        }, Korean.AutoBench_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 751
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 752
          },
          __self: this
        }, Korean.AutoBench_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 756
          },
          __self: this
        }, Korean.AutoBench_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 760
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 761
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 762
          },
          __self: this
        }), " Python"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 768
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 769
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/KoreaMockTestBot",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 770
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_webbot.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 771
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 772
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 773
          },
          __self: this
        }, Korean.KoreaMockTestBot_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 776
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 777
          },
          __self: this
        }, Korean.KoreaMockTestBot_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 781
          },
          __self: this
        }, Korean.KoreaMockTestBot_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 785
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 786
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 787
          },
          __self: this
        }), " Python"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 793
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 794
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Fibonacci-Even-Sum",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 795
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_fibonacci.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 796
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 797
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 798
          },
          __self: this
        }, Korean.Fibonacci_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 801
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 802
          },
          __self: this
        }, Korean.Fibonacci_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 806
          },
          __self: this
        }, Korean.Fibonacci_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 810
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 811
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 812
          },
          __self: this
        }), " Python"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 818
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 819
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/UrlHit",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 820
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_urlhit.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 821
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 822
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 823
          },
          __self: this
        }, Korean.UrlHit_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 826
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 827
          },
          __self: this
        }, Korean.UrlHit_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 831
          },
          __self: this
        }, Korean.UrlHit_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 835
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 836
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 837
          },
          __self: this
        }), " Python"))))))
      }
    }];
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 850
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
      minWidth: 769,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 852
      },
      __self: this
    }, __jsx("div", {
      className: "home_background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 853
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      centered: true,
      columns: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 855
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 856
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 857
      },
      __self: this
    }, "> Hello, World!"), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 858
      },
      __self: this
    }, "> This is Mineru Coding Blog."), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 859
      },
      __self: this
    }, "> "))))), __jsx("div", {
      className: "home_container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 864
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      textAlign: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 865
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      id: "default",
      as: "h2",
      image: "/static/imgs/project.svg",
      content: Korean.Project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 866
      },
      __self: this
    }), __jsx("p", {
      id: "default",
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 872
      },
      __self: this
    }, Korean.Project_Comment), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      columns: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 876
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 877
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://noticend.com",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 878
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_noticend.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 879
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 880
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 881
      },
      __self: this
    }, Korean.Noticend_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 884
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 885
      },
      __self: this
    }, Korean.Noticend_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 889
      },
      __self: this
    }, Korean.Noticend_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 893
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 894
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_xamarin.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 895
      },
      __self: this
    }), " Xamarin"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 897
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_xamarin.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 898
      },
      __self: this
    }), " Web Service")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 903
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "http://www.cnaplus.shop",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 904
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_cnaplus.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 905
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 906
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 907
      },
      __self: this
    }, Korean.Cnaplus_shop_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 910
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 911
      },
      __self: this
    }, Korean.Cnaplus_shop_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 915
      },
      __self: this
    }, Korean.Cnaplus_shop_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 919
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 920
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_reactjs.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 921
      },
      __self: this
    }), " ReactJS"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 923
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_reactjs.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 924
      },
      __self: this
    }), " Web Service")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 929
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 930
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_cnaplus.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 934
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 935
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 936
      },
      __self: this
    }, Korean.Note_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 939
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 940
      },
      __self: this
    }, Korean.Note_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 944
      },
      __self: this
    }, Korean.Note_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 948
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 949
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_java.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 950
      },
      __self: this
    }), " Java"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 952
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_java.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 953
      },
      __self: this
    }), " App Service"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      columns: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 959
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 960
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/AutoBench",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 961
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_autobench.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 962
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 963
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 964
      },
      __self: this
    }, Korean.AutoBench_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 967
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 968
      },
      __self: this
    }, Korean.AutoBench_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 972
      },
      __self: this
    }, Korean.AutoBench_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 976
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 977
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 978
      },
      __self: this
    }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 980
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 981
      },
      __self: this
    }), " DeskTopApp")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 986
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/KoreaMockTestBot",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 987
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_webbot.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 988
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 989
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 990
      },
      __self: this
    }, Korean.KoreaMockTestBot_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 993
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 994
      },
      __self: this
    }, Korean.KoreaMockTestBot_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 998
      },
      __self: this
    }, Korean.KoreaMockTestBot_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1002
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1003
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1004
      },
      __self: this
    }), " Python")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1009
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/UrlHit",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1010
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_urlhit.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1011
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1012
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1013
      },
      __self: this
    }, Korean.UrlHit_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1016
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1017
      },
      __self: this
    }, Korean.UrlHit_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1021
      },
      __self: this
    }, Korean.UrlHit_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1025
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1026
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1027
      },
      __self: this
    }), " Python"))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      textAlign: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1035
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      id: "default",
      as: "h2",
      image: "/static/imgs/language.svg",
      content: Korean.Code,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1036
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1042
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1043
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1044
      },
      __self: this
    }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Radar"], {
      data: data,
      height: 150,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1045
      },
      __self: this
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      columns: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1048
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1049
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
      defaultActiveIndex: [],
      panels: PC,
      exclusive: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1050
      },
      __self: this
    }))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
      minWidth: 1,
      maxWidth: 768,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1058
      },
      __self: this
    }, __jsx("div", {
      className: "home_background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1059
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1060
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      centered: true,
      columns: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1061
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1062
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1063
      },
      __self: this
    }, "> Hello, World!"), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1064
      },
      __self: this
    }, "> This is Mineru Coding Blog."), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1065
      },
      __self: this
    }, "> "))))), __jsx("div", {
      className: "home_container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1070
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      textAlign: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1071
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      id: "default",
      as: "h2",
      image: "/static/imgs/project.svg",
      content: Korean.Project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1072
      },
      __self: this
    }), __jsx("p", {
      id: "default",
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1078
      },
      __self: this
    }, Korean.Project_Comment), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1081
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1082
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1083
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://noticend.com",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1084
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_noticend.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1085
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1086
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1087
      },
      __self: this
    }, Korean.Noticend_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1090
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1091
      },
      __self: this
    }, Korean.Noticend_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1095
      },
      __self: this
    }, Korean.Noticend_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1099
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1100
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_xamarin.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1101
      },
      __self: this
    }), " Xamarin.forms"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1107
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1108
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "http://www.cnaplus.shop",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1109
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_cnaplus.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1110
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1111
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1112
      },
      __self: this
    }, Korean.Cnaplus_shop_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1115
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1116
      },
      __self: this
    }, Korean.Cnaplus_shop_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1120
      },
      __self: this
    }, Korean.Cnaplus_shop_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1124
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1125
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_reactjs.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1126
      },
      __self: this
    }), " ReactJS"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1132
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1133
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1134
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_cnaplus.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1138
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1139
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1140
      },
      __self: this
    }, Korean.Note_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1143
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1144
      },
      __self: this
    }, Korean.Note_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1148
      },
      __self: this
    }, Korean.Note_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1152
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1153
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_java.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1154
      },
      __self: this
    }), " Java"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1160
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1161
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/AutoBench",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1162
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_autobench.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1163
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1164
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1165
      },
      __self: this
    }, Korean.AutoBench_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1168
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1169
      },
      __self: this
    }, Korean.AutoBench_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1173
      },
      __self: this
    }, Korean.AutoBench_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1177
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1178
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1179
      },
      __self: this
    }), " Python"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1185
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1186
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/KoreaMockTestBot",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1187
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_webbot.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1188
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1189
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1190
      },
      __self: this
    }, Korean.KoreaMockTestBot_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1193
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1194
      },
      __self: this
    }, Korean.KoreaMockTestBot_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1198
      },
      __self: this
    }, Korean.KoreaMockTestBot_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1202
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1203
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1204
      },
      __self: this
    }), " Python"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1210
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1211
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/UrlHit",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1212
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_urlhit.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1213
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1214
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1215
      },
      __self: this
    }, Korean.UrlHit_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1218
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1219
      },
      __self: this
    }, Korean.UrlHit_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1223
      },
      __self: this
    }, Korean.UrlHit_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1227
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1228
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1229
      },
      __self: this
    }), " Python"))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      textAlign: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1237
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      id: "default",
      as: "h2",
      image: "/static/imgs/language.svg",
      content: Korean.Code,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1238
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1244
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1245
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1246
      },
      __self: this
    }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Radar"], {
      data: data,
      height: 300,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1247
      },
      __self: this
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      columns: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1250
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1251
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
      defaultActiveIndex: [],
      panels: Mobile,
      exclusive: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1252
      },
      __self: this
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HomeKR);

/***/ })

})
//# sourceMappingURL=index.js.af76469df69650973559.hot-update.js.map