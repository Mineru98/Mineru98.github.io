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
        }), " C"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_csharp.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }), " Algorithm")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/CShap_Clock_Angle",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_clock.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_csharp.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }), " C#"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_csharp.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }), " Algorithm"))))))
      }
    }, {
      key: 1,
      title: 'Java / Kotlin',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          columns: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/HopsAndroid",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_android.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, Korean.Android_App_Project_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, Korean.Android_App_Project_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, Korean.Android_App_Project_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }), " Java"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }), " App Service")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/DictionaryRandom/tree/master/kotlin",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_random.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, Korean.DBKotlin_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, Korean.DBKotlin_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, Korean.DBKotlin_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }), " Kotlin"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }), " Algorithm")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Warehouse",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_warehouse.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, Korean.WareHouse_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }, Korean.WareHouse_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }, Korean.WareHouse_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }), " Kotlin"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }), " Algorithm")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cnaplus.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }, Korean.Note_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          },
          __self: this
        }, Korean.Note_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, Korean.Note_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }), " Java"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }), " App Service"))))))
      }
    }, {
      key: 2,
      title: 'JavaScript / NodeJS / ReactJS',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          columns: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://mineru98.github.io/Division_PC_Mobile/",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_division.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311
          },
          __self: this
        }, Korean.Division_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }, Korean.Division_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }, Korean.Division_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_js.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 325
          },
          __self: this
        }), " JavaScript"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_js.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328
          },
          __self: this
        }), " Web Service")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/DictionaryRandom/tree/master/nodejs",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_random.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          },
          __self: this
        }, Korean.DBNodeJS_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          },
          __self: this
        }, Korean.DBNodeJS_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 348
          },
          __self: this
        }, Korean.DBNodeJS_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 353
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_nodejs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          },
          __self: this
        }), " NodeJS"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_nodejs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357
          },
          __self: this
        }), " Algorithm")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "http://www.cnaplus.shop",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cnaplus.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 364
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 365
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 366
          },
          __self: this
        }, Korean.Cnaplus_shop_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 369
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 370
          },
          __self: this
        }, Korean.Cnaplus_shop_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          },
          __self: this
        }, Korean.Cnaplus_shop_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 378
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 379
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_reactjs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          },
          __self: this
        }), " ReactJS"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 382
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_reactjs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 383
          },
          __self: this
        }), " Web Service"))))))
      }
    }, {
      key: 3,
      title: 'Python',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 398
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          columns: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/AutoBench",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_autobench.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 402
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 403
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 404
          },
          __self: this
        }, Korean.AutoBench_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 407
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 408
          },
          __self: this
        }, Korean.AutoBench_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: this
        }, Korean.AutoBench_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 418
          },
          __self: this
        }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 421
          },
          __self: this
        }), " Desktop App")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/KoreaMockTestBot",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_webbot.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 430
          },
          __self: this
        }, Korean.KoreaMockTestBot_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 434
          },
          __self: this
        }, Korean.KoreaMockTestBot_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 438
          },
          __self: this
        }, Korean.KoreaMockTestBot_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 443
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 444
          },
          __self: this
        }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 446
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 447
          },
          __self: this
        }), " Desktop App")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 452
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Fibonacci-Even-Sum",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 453
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_fibonacci.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 454
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 455
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 456
          },
          __self: this
        }, Korean.Fibonacci_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 459
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 460
          },
          __self: this
        }, Korean.Fibonacci_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 464
          },
          __self: this
        }, Korean.Fibonacci_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 468
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 469
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 470
          },
          __self: this
        }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 472
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 473
          },
          __self: this
        }), " Algorithm")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 478
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/UrlHit",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 479
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_urlhit.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 480
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 481
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 482
          },
          __self: this
        }, Korean.UrlHit_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 485
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 486
          },
          __self: this
        }, Korean.UrlHit_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 490
          },
          __self: this
        }, Korean.UrlHit_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 494
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 495
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 496
          },
          __self: this
        }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 498
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 499
          },
          __self: this
        }), " Server"))))))
      }
    }];
    const Mobile = [{
      key: 0,
      title: 'C / C#',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 517
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 519
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Combination_of_Parentheses",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 520
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_parentheses.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 521
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 522
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 523
          },
          __self: this
        }, Korean.Combination_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 526
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 527
          },
          __self: this
        }, Korean.Combination_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 531
          },
          __self: this
        }, Korean.Combination_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 535
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 536
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cplusplus.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 537
          },
          __self: this
        }), " C"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 539
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_csharp.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 540
          },
          __self: this
        }), " Algorithm"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 546
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 547
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/CShap_Clock_Angle",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 548
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_clock.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 549
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 550
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 551
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 554
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 555
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 559
          },
          __self: this
        }, Korean.Calculate_Clock_Angle_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 563
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 564
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_csharp.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 565
          },
          __self: this
        }), " C#"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 567
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_csharp.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 568
          },
          __self: this
        }), " Algorithm"))))))
      }
    }, {
      key: 1,
      title: 'Java / Kotlin',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 583
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 584
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 585
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/HopsAndroid",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 586
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_android.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 587
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 588
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 589
          },
          __self: this
        }, Korean.Android_App_Project_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 592
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 593
          },
          __self: this
        }, Korean.Android_App_Project_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 597
          },
          __self: this
        }, Korean.Android_App_Project_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 601
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 602
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 603
          },
          __self: this
        }), " Java"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 605
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 606
          },
          __self: this
        }), " App Service"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 612
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 613
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/DictionaryRandom/tree/master/kotlin",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 614
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_random.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 618
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 619
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 620
          },
          __self: this
        }, Korean.DBKotlin_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 623
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 624
          },
          __self: this
        }, Korean.DBKotlin_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 628
          },
          __self: this
        }, Korean.DBKotlin_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 632
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 633
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 634
          },
          __self: this
        }), " Kotlin"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 636
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 637
          },
          __self: this
        }), " Algorithm"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 643
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 644
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Warehouse",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 645
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_warehouse.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 646
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 647
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 648
          },
          __self: this
        }, Korean.WareHouse_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 651
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 652
          },
          __self: this
        }, Korean.WareHouse_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 656
          },
          __self: this
        }, Korean.WareHouse_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 660
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 661
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 662
          },
          __self: this
        }), " Kotlin"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 664
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_kotlin.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 665
          },
          __self: this
        }), " Algorithm"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 671
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 672
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 673
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cnaplus.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 677
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 678
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 679
          },
          __self: this
        }, Korean.Note_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 682
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 683
          },
          __self: this
        }, Korean.Note_Data)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 687
          },
          __self: this
        }, Korean.Note_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 691
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 692
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 693
          },
          __self: this
        }), " Java"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 695
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_java.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 696
          },
          __self: this
        }), " App Service"))))))
      }
    }, {
      key: 2,
      title: 'JavaScript / NodeJS / ReactJS',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 711
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 712
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 713
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://mineru98.github.io/Division_PC_Mobile/",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 714
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_division.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 715
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 716
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 717
          },
          __self: this
        }, Korean.Division_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 720
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 721
          },
          __self: this
        }, Korean.Division_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 725
          },
          __self: this
        }, Korean.Division_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 729
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 730
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_js.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 731
          },
          __self: this
        }), " JavaScript"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 733
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_js.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 734
          },
          __self: this
        }), " Web Service"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 740
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 741
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/DictionaryRandom/tree/master/nodejs",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 742
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_random.png",
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
        }, Korean.DBNodeJS_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
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
        }, Korean.DBNodeJS_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 756
          },
          __self: this
        }, Korean.DBNodeJS_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
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
          src: "/static/imgs/icon_nodejs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 762
          },
          __self: this
        }), " NodeJS"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 764
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_nodejs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 765
          },
          __self: this
        }), " Algorithm"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 771
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 772
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "http://www.cnaplus.shop",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 773
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_cnaplus.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 774
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 775
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 776
          },
          __self: this
        }, Korean.Cnaplus_shop_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 779
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 780
          },
          __self: this
        }, Korean.Cnaplus_shop_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 784
          },
          __self: this
        }, Korean.Cnaplus_shop_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 788
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 789
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_reactjs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 790
          },
          __self: this
        }), " ReactJS"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 792
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_reactjs.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 793
          },
          __self: this
        }), " Web Service"))))))
      }
    }, {
      key: 3,
      title: 'Python',
      content: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 808
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 809
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 810
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/AutoBench",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 811
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_autobench.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 812
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 813
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 814
          },
          __self: this
        }, Korean.AutoBench_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 817
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 818
          },
          __self: this
        }, Korean.AutoBench_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 822
          },
          __self: this
        }, Korean.AutoBench_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 826
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 827
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 828
          },
          __self: this
        }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 830
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 831
          },
          __self: this
        }), " Desktop App"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 837
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 838
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/KoreaMockTestBot",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 839
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_webbot.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 840
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 841
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 842
          },
          __self: this
        }, Korean.KoreaMockTestBot_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 845
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 846
          },
          __self: this
        }, Korean.KoreaMockTestBot_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 850
          },
          __self: this
        }, Korean.KoreaMockTestBot_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 854
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 855
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 856
          },
          __self: this
        }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 858
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 859
          },
          __self: this
        }), " Desktop App"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 865
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 866
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/Fibonacci-Even-Sum",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 867
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_fibonacci.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 868
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 869
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 870
          },
          __self: this
        }, Korean.Fibonacci_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 873
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 874
          },
          __self: this
        }, Korean.Fibonacci_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 878
          },
          __self: this
        }, Korean.Fibonacci_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 882
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 883
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 884
          },
          __self: this
        }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 886
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 887
          },
          __self: this
        }), " Algorithm"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 893
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 894
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          href: "https://github.com/Mineru98/UrlHit",
          id: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 895
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_urlhit.png",
          wrapped: true,
          ui: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 896
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 897
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 898
          },
          __self: this
        }, Korean.UrlHit_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 901
          },
          __self: this
        }, __jsx("span", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 902
          },
          __self: this
        }, Korean.UrlHit_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
          id: "default",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 906
          },
          __self: this
        }, Korean.UrlHit_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 910
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 911
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 912
          },
          __self: this
        }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          as: "a",
          image: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 914
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: "/static/imgs/icon_python.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 915
          },
          __self: this
        }), " Server"))))))
      }
    }];
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 928
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
      minWidth: 769,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 930
      },
      __self: this
    }, __jsx("div", {
      className: "home_background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 931
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 932
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      centered: true,
      columns: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 933
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 934
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 935
      },
      __self: this
    }, "> Hello, World!"), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 936
      },
      __self: this
    }, "> This is Mineru Coding Blog."), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 937
      },
      __self: this
    }, "> "))))), __jsx("div", {
      className: "home_container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 942
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      textAlign: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 943
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      id: "default",
      as: "h2",
      image: "/static/imgs/project.svg",
      content: Korean.Project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 944
      },
      __self: this
    }), __jsx("p", {
      id: "default",
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 950
      },
      __self: this
    }, Korean.Project_Comment), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 953
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      columns: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 954
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 955
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://noticend.com",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 956
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_noticend.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 957
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 958
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 959
      },
      __self: this
    }, Korean.Noticend_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 962
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 963
      },
      __self: this
    }, Korean.Noticend_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 967
      },
      __self: this
    }, Korean.Noticend_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 971
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 972
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_xamarin.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 973
      },
      __self: this
    }), " Xamarin"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 975
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_xamarin.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 976
      },
      __self: this
    }), " Web Service")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 981
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "http://www.cnaplus.shop",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 982
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_cnaplus.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 983
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 984
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 985
      },
      __self: this
    }, Korean.Cnaplus_shop_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 988
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 989
      },
      __self: this
    }, Korean.Cnaplus_shop_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 993
      },
      __self: this
    }, Korean.Cnaplus_shop_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 997
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 998
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_reactjs.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 999
      },
      __self: this
    }), " ReactJS"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1001
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_reactjs.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1002
      },
      __self: this
    }), " Web Service")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1007
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1008
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_cnaplus.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1012
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1013
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1014
      },
      __self: this
    }, Korean.Note_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1017
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1018
      },
      __self: this
    }, Korean.Note_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1022
      },
      __self: this
    }, Korean.Note_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1026
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1027
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_java.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1028
      },
      __self: this
    }), " Java"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1030
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_java.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1031
      },
      __self: this
    }), " App Service"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      columns: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1037
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1038
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/AutoBench",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1039
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_autobench.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1040
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1041
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1042
      },
      __self: this
    }, Korean.AutoBench_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1045
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1046
      },
      __self: this
    }, Korean.AutoBench_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1050
      },
      __self: this
    }, Korean.AutoBench_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1054
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1055
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1056
      },
      __self: this
    }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1058
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1059
      },
      __self: this
    }), " Desktop App")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1064
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/KoreaMockTestBot",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1065
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_webbot.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1066
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1067
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1068
      },
      __self: this
    }, Korean.KoreaMockTestBot_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1071
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1072
      },
      __self: this
    }, Korean.KoreaMockTestBot_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1076
      },
      __self: this
    }, Korean.KoreaMockTestBot_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1080
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1081
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1082
      },
      __self: this
    }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1084
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1085
      },
      __self: this
    }), " Desktop App")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1090
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/UrlHit",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1091
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_urlhit.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1092
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1093
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1094
      },
      __self: this
    }, Korean.UrlHit_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1097
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1098
      },
      __self: this
    }, Korean.UrlHit_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1102
      },
      __self: this
    }, Korean.UrlHit_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1106
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1107
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1108
      },
      __self: this
    }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1110
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1111
      },
      __self: this
    }), " Server"))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      textAlign: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1119
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      id: "default",
      as: "h2",
      image: "/static/imgs/language.svg",
      content: Korean.Code,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1120
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1126
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1127
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1128
      },
      __self: this
    }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Radar"], {
      data: data,
      height: 150,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1129
      },
      __self: this
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      columns: 1,
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
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
      defaultActiveIndex: [],
      panels: PC,
      exclusive: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1134
      },
      __self: this
    }))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
      minWidth: 1,
      maxWidth: 768,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1142
      },
      __self: this
    }, __jsx("div", {
      className: "home_background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1143
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1144
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      centered: true,
      columns: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1145
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1146
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1147
      },
      __self: this
    }, "> Hello, World!"), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1148
      },
      __self: this
    }, "> This is Mineru Coding Blog."), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1149
      },
      __self: this
    }, "> "))))), __jsx("div", {
      className: "home_container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1154
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      textAlign: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1155
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      id: "default",
      as: "h2",
      image: "/static/imgs/project.svg",
      content: Korean.Project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1156
      },
      __self: this
    }), __jsx("p", {
      id: "default",
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1162
      },
      __self: this
    }, Korean.Project_Comment), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1165
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1166
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1167
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://noticend.com",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1168
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_noticend.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1169
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1170
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1171
      },
      __self: this
    }, Korean.Noticend_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1174
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1175
      },
      __self: this
    }, Korean.Noticend_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1179
      },
      __self: this
    }, Korean.Noticend_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1183
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1184
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_xamarin.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1185
      },
      __self: this
    }), " Xamarin"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1187
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_xamarin.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1188
      },
      __self: this
    }), " Web Service"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1194
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1195
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "http://www.cnaplus.shop",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1196
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_cnaplus.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1197
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1198
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1199
      },
      __self: this
    }, Korean.Cnaplus_shop_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1202
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1203
      },
      __self: this
    }, Korean.Cnaplus_shop_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1207
      },
      __self: this
    }, Korean.Cnaplus_shop_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1211
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1212
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_reactjs.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1213
      },
      __self: this
    }), " ReactJS"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1215
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_reactjs.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1216
      },
      __self: this
    }), " Web Service"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1222
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1223
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1224
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_cnaplus.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1228
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1229
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1230
      },
      __self: this
    }, Korean.Note_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1233
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1234
      },
      __self: this
    }, Korean.Note_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1238
      },
      __self: this
    }, Korean.Note_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1242
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1243
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_java.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1244
      },
      __self: this
    }), " Java"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1246
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_java.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1247
      },
      __self: this
    }), " App Service"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1253
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1254
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/AutoBench",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1255
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_autobench.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1256
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1257
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1258
      },
      __self: this
    }, Korean.AutoBench_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1261
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1262
      },
      __self: this
    }, Korean.AutoBench_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1266
      },
      __self: this
    }, Korean.AutoBench_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1270
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1271
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1272
      },
      __self: this
    }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1274
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1275
      },
      __self: this
    }), " Desktop App"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1281
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1282
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/KoreaMockTestBot",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1283
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_webbot.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1284
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1285
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1286
      },
      __self: this
    }, Korean.KoreaMockTestBot_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1289
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1290
      },
      __self: this
    }, Korean.KoreaMockTestBot_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1294
      },
      __self: this
    }, Korean.KoreaMockTestBot_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1298
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1299
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1300
      },
      __self: this
    }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1302
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1303
      },
      __self: this
    }), " Desktop App"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1309
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1310
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      href: "https://github.com/Mineru98/UrlHit",
      id: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1311
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_urlhit.png",
      wrapped: true,
      ui: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1312
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1313
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1314
      },
      __self: this
    }, Korean.UrlHit_Title), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1317
      },
      __self: this
    }, __jsx("span", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1318
      },
      __self: this
    }, Korean.UrlHit_Date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      id: "default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1322
      },
      __self: this
    }, Korean.UrlHit_Description)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1326
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1327
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1328
      },
      __self: this
    }), " Python"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      as: "a",
      image: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1330
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/static/imgs/icon_python.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1331
      },
      __self: this
    }), " Server"))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      textAlign: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1339
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      id: "default",
      as: "h2",
      image: "/static/imgs/language.svg",
      content: Korean.Code,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1340
      },
      __self: this
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1346
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1347
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1348
      },
      __self: this
    }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Radar"], {
      data: data,
      height: 300,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1349
      },
      __self: this
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      columns: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1352
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1353
      },
      __self: this
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
      defaultActiveIndex: [],
      panels: Mobile,
      exclusive: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1354
      },
      __self: this
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HomeKR);

/***/ })

})
//# sourceMappingURL=index.js.fe071a95530c89ecb2f4.hot-update.js.map