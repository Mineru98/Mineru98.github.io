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
  UrlHit_Description: ''
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
            lineNumber: 455
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 456
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 457
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Combination_of_Parentheses",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 458
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_parentheses.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 459
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 460
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 461
          },
          __self: this
        }, Korean.Combination_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 464
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 465
          },
          __self: this
        }, Korean.Combination_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 469
          },
          __self: this
        }, Korean.Combination_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 473
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 474
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cplusplus.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 475
          },
          __self: this
        }), " C"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 481
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 482
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/CShap_Clock_Angle",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 483
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_clock.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 484
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 485
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 486
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 489
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 490
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 494
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 498
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 499
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_csharp.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 500
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
            lineNumber: 515
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 516
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 517
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/HopsAndroid",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_android.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 519
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 520
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 521
          },
          __self: this
        }, Korean.Android_App_Project_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 524
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 525
          },
          __self: this
        }, Korean.Android_App_Project_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 529
          },
          __self: this
        }, Korean.Android_App_Project_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 533
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 534
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 535
          },
          __self: this
        }), " Java"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 541
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 542
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/DictionaryRandom/tree/master/kotlin",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 543
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_random.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 547
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 548
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 549
          },
          __self: this
        }, Korean.DBKotlin_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 552
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 553
          },
          __self: this
        }, Korean.DBKotlin_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 557
          },
          __self: this
        }, Korean.DBKotlin_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 561
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 562
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 563
          },
          __self: this
        }), " Kotlin"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 569
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 570
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Warehouse",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 571
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_warehouse.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 572
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 573
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 574
          },
          __self: this
        }, Korean.WareHouse_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 577
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 578
          },
          __self: this
        }, Korean.WareHouse_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 582
          },
          __self: this
        }, Korean.WareHouse_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 586
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 587
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 588
          },
          __self: this
        }), " Kotlin"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 594
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 595
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 596
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cnaplus.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 600
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 601
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 602
          },
          __self: this
        }, Korean.Note_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 605
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 606
          },
          __self: this
        }, Korean.Note_Data)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 610
          },
          __self: this
        }, Korean.Note_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 614
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 615
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 616
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
            lineNumber: 631
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 632
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 633
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://mineru98.github.io/Division_PC_Mobile/",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 634
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_division.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 635
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 636
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 637
          },
          __self: this
        }, Korean.Division_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 640
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 641
          },
          __self: this
        }, Korean.Division_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 645
          },
          __self: this
        }, Korean.Division_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 649
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 650
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_js.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 651
          },
          __self: this
        }), " JavaScript"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 657
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 658
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/DictionaryRandom/tree/master/nodejs",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 659
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_random.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 663
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 664
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 665
          },
          __self: this
        }, Korean.DBNodeJS_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 668
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 669
          },
          __self: this
        }, Korean.DBNodeJS_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 673
          },
          __self: this
        }, Korean.DBNodeJS_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 677
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 678
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_nodejs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 679
          },
          __self: this
        }), " NodeJS"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 685
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 686
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "http://www.cnaplus.shop",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 687
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cnaplus.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 688
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 689
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 690
          },
          __self: this
        }, Korean.Cnaplus_shop_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 693
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 694
          },
          __self: this
        }, Korean.Cnaplus_shop_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 698
          },
          __self: this
        }, Korean.Cnaplus_shop_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 702
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 703
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_reactjs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 704
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
            lineNumber: 719
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 720
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 721
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/AutoBench",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 722
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_autobench.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 723
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 724
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 725
          },
          __self: this
        }, Korean.AutoBench_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 728
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 729
          },
          __self: this
        }, Korean.AutoBench_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 733
          },
          __self: this
        }, Korean.AutoBench_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 737
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 738
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 739
          },
          __self: this
        }), " Python"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 745
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 746
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/KoreaMockTestBot",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 747
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_webbot.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 748
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 749
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 750
          },
          __self: this
        }, Korean.KoreaMockTestBot_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 753
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 754
          },
          __self: this
        }, Korean.KoreaMockTestBot_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 758
          },
          __self: this
        }, Korean.KoreaMockTestBot_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 762
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 763
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 764
          },
          __self: this
        }), " Python"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 770
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 771
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Fibonacci-Even-Sum",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 772
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_fibonacci.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 773
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 774
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 775
          },
          __self: this
        }, Korean.Fibonacci_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 778
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 779
          },
          __self: this
        }, Korean.Fibonacci_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 783
          },
          __self: this
        }, Korean.Fibonacci_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 787
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 788
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 789
          },
          __self: this
        }), " Python"))))))
      }
    }];
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 802
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
      minWidth: 769,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 804
      },
      __self: this
    }, __jsx("div", {
      className: "home_background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 805
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 806
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      centered: true,
      columns: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 807
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 808
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 809
      },
      __self: this
    }, "> Hello, World!"), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 810
      },
      __self: this
    }, "> This is Mineru Coding Blog."), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 811
      },
      __self: this
    }, "> "))))), __jsx("div", {
      className: "home_container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 816
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      textAlign: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      id: "default",
      as: "h2",
      image: "/static/imgs/project.svg",
      content: Korean.Project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 818
      },
      __self: this
    }), __jsx("p", {
      id: "default",
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 824
      },
      __self: this
    }, Korean.Project_Comment), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 827
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      columns: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 828
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 829
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://noticend.com",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 830
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_noticend.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 831
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 832
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 833
      },
      __self: this
    }, Korean.Noticend_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 836
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 837
      },
      __self: this
    }, Korean.Noticend_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 841
      },
      __self: this
    }, Korean.Noticend_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 845
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 846
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_xamarin.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 847
      },
      __self: this
    }), " Xamarin.forms")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 852
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "http://www.cnaplus.shop",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 853
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_cnaplus.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 855
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 856
      },
      __self: this
    }, Korean.Cnaplus_shop_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 859
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 860
      },
      __self: this
    }, Korean.Cnaplus_shop_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 864
      },
      __self: this
    }, Korean.Cnaplus_shop_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 868
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 869
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_reactjs.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 870
      },
      __self: this
    }), " ReactJS")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 876
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_cnaplus.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 880
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 881
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 882
      },
      __self: this
    }, Korean.Note_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 885
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 886
      },
      __self: this
    }, Korean.Note_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 890
      },
      __self: this
    }, Korean.Note_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 894
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 895
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_java.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 896
      },
      __self: this
    }), " Java"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      columns: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 902
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 903
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/AutoBench",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 904
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_autobench.png",
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
    }, Korean.AutoBench_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
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
    }, Korean.AutoBench_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 915
      },
      __self: this
    }, Korean.AutoBench_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
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
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 921
      },
      __self: this
    }), " Python")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 926
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/KoreaMockTestBot",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 927
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_webbot.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 928
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 929
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 930
      },
      __self: this
    }, Korean.KoreaMockTestBot_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 933
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 934
      },
      __self: this
    }, Korean.KoreaMockTestBot_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 938
      },
      __self: this
    }, Korean.KoreaMockTestBot_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 942
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 943
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 944
      },
      __self: this
    }), " Python")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 949
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/UrlHit",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 950
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_urlhit.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 951
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 952
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 953
      },
      __self: this
    }, Korean.UrlHit_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 956
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 957
      },
      __self: this
    }, Korean.UrlHit_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 961
      },
      __self: this
    }, Korean.UrlHit_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 965
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 966
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 967
      },
      __self: this
    }), " Python"))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      textAlign: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 975
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      id: "default",
      as: "h2",
      image: "/static/imgs/language.svg",
      content: Korean.Code,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 976
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 982
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 983
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 984
      },
      __self: this
    }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Radar"], {
      data: data,
      height: 150,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 985
      },
      __self: this
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      columns: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 988
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 989
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
      defaultActiveIndex: [],
      panels: PC,
      exclusive: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 990
      },
      __self: this
    }))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
      minWidth: 1,
      maxWidth: 768,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 998
      },
      __self: this
    }, __jsx("div", {
      className: "home_background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 999
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1000
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      centered: true,
      columns: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1001
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1002
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1003
      },
      __self: this
    }, "> Hello, World!"), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1004
      },
      __self: this
    }, "> This is Mineru Coding Blog."), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1005
      },
      __self: this
    }, "> "))))), __jsx("div", {
      className: "home_container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1010
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      textAlign: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1011
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      id: "default",
      as: "h2",
      image: "/static/imgs/project.svg",
      content: Korean.Project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1012
      },
      __self: this
    }), __jsx("p", {
      id: "default",
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1018
      },
      __self: this
    }, Korean.Project_Comment), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1021
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1022
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1023
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://noticend.com",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1024
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_noticend.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1025
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1026
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1027
      },
      __self: this
    }, Korean.Noticend_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1030
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1031
      },
      __self: this
    }, Korean.Noticend_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1035
      },
      __self: this
    }, Korean.Noticend_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1039
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1040
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_xamarin.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1041
      },
      __self: this
    }), " Xamarin.forms"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1047
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1048
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "http://www.cnaplus.shop",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1049
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_cnaplus.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1050
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1051
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1052
      },
      __self: this
    }, Korean.Cnaplus_shop_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1055
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1056
      },
      __self: this
    }, Korean.Cnaplus_shop_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1060
      },
      __self: this
    }, Korean.Cnaplus_shop_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1064
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1065
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_reactjs.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1066
      },
      __self: this
    }), " ReactJS"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1072
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1073
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1074
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_cnaplus.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1078
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1079
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1080
      },
      __self: this
    }, Korean.Note_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1083
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1084
      },
      __self: this
    }, Korean.Note_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1088
      },
      __self: this
    }, Korean.Note_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1092
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1093
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_java.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1094
      },
      __self: this
    }), " Java"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1100
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1101
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/AutoBench",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1102
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_autobench.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1103
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1104
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1105
      },
      __self: this
    }, Korean.AutoBench_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1108
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1109
      },
      __self: this
    }, Korean.AutoBench_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1113
      },
      __self: this
    }, Korean.AutoBench_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1117
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1118
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1119
      },
      __self: this
    }), " Python"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1125
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1126
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/KoreaMockTestBot",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1127
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_webbot.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1128
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1129
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1130
      },
      __self: this
    }, Korean.KoreaMockTestBot_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1133
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1134
      },
      __self: this
    }, Korean.KoreaMockTestBot_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1138
      },
      __self: this
    }, Korean.KoreaMockTestBot_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1142
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1143
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1144
      },
      __self: this
    }), " Python"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1150
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1151
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/UrlHit",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1152
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_urlhit.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1153
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1154
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1155
      },
      __self: this
    }, Korean.UrlHit_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1158
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1159
      },
      __self: this
    }, Korean.UrlHit_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1163
      },
      __self: this
    }, Korean.UrlHit_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1167
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1168
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1169
      },
      __self: this
    }), " Python"))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      textAlign: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1177
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      id: "default",
      as: "h2",
      image: "/static/imgs/language.svg",
      content: Korean.Code,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1178
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1184
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
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
    }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Radar"], {
      data: data,
      height: 300,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1187
      },
      __self: this
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      columns: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1190
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1191
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
      defaultActiveIndex: [],
      panels: Mobile,
      exclusive: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1192
      },
      __self: this
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HomeKR);

/***/ })

})
//# sourceMappingURL=index.js.44fe9b161cb85297102c.hot-update.js.map