webpackHotUpdate("static/development/pages/tag.js",{

/***/ "./components/Tag/Tag.js":
/*!*******************************!*\
  !*** ./components/Tag/Tag.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Tag_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tag.css */ "./components/Tag/Tag.css");
/* harmony import */ var _Tag_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Tag_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/workspace/Blog/components/Tag/Tag.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const SUMMARY = {
  POST1: '처음 써보는 Git hub 블로그 포스트',
  DESCRIPTION1: '',
  POST2: '알고리즘이란?',
  DESCRIPTION2: '',
  POST3: '코딩교육',
  DESCRIPTION3: '',
  POST4: '준비중입니다',
  DESCRIPTION4: '',
  POST5: '군대에서 프로그래밍',
  DESCRIPTION5: '',
  POST6: '자료구조란?',
  DESCRIPTION6: '',
  POST7: '드러나기 시작하는 나의 민낯',
  DESCRIPTION7: '',
  POST8: '너의휴가 나의휴가',
  DESCRIPTION8: '',
  POST9: '나는 왜 테스트 코드를 작성하지 않았는가',
  DESCRIPTION9: '',
  POST10: '브랜드 디자인 - StartBucks편',
  DESCRIPTION10: '',
  POST11: 'Android Study - Kotlin',
  DESCRIPTION11: ''
};

function Tag(props) {
  const {
    0: source,
    1: setSource
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: summary,
    1: setSummary
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    query: {
      id
    }
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const url = "https://mineru98.github.io/static/posts/".concat(id, ".md");

    if (id == '2019-01-07-01-First-post') {
      setSummary(SUMMARY.POST1);
      setDescription(SUMMARY.DESCRIPTION1);
    } else if (id == '2019-01-07-02-Algorithm01-post') {
      setSummary(SUMMARY.POST2);
      setDescription(SUMMARY.DESCRIPTION2);
    } else if (id == '2019-01-07-03-coding-education-post') {
      setSummary(SUMMARY.POST3);
      setDescription(SUMMARY.DESCRIPTION3);
    } else if (id == '2019-01-07-04-CnA-Project') {
      setSummary(SUMMARY.POST4);
      setDescription(SUMMARY.DESCRIPTION4);
    } else if (id == '2019-01-10-05-Plan') {
      setSummary(SUMMARY.POST5);
      setDescription(SUMMARY.DESCRIPTION5);
    } else if (id == '2019-02-14-06-Algorithm02-post') {
      setSummary(SUMMARY.POST6);
      setDescription(SUMMARY.DESCRIPTION6);
    } else if (id == '2020-01-15-07-BoilerPlate') {
      setSummary(SUMMARY.POST7);
      setDescription(SUMMARY.DESCRIPTION7);
    } else if (id == '2020-01-19-08-Plan') {
      setSummary(SUMMARY.POST8);
      setDescription(SUMMARY.DESCRIPTION8);
    } else if (id == '2020-01-26-09-CodeTest') {
      setSummary(SUMMARY.POST9);
      setDescription(SUMMARY.DESCRIPTION9);
    } else if (id == '2020-01-27-10-BrandDesign') {
      setSummary(SUMMARY.POST10);
      setDescription(SUMMARY.DESCRIPTION10);
    } else if (id == '2020-01-30-11-AndroidStudy') {
      setSummary(SUMMARY.POST11);
      setDescription(SUMMARY.DESCRIPTION11);
    }

    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url).then(res => {
      setSource(res.data);
    });
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_5__["NextSeo"], {
    title: "Mineru Code Blog - ".concat(summary),
    description: "Mineru Blog Page",
    openGraph: {
      url: "https://mineru98.github.io/tag?id=".concat(id),
      title: "Mineru Code Blog - ".concat(summary),
      description: "".concat(summary),
      type: 'website',
      images: [{
        url: 'https://mineru98.github.io/static/imgs/mineru-blog.png',
        width: 800,
        height: 600,
        alt: 'Blog Alt'
      }],
      site_name: 'Mineru Code Blog'
    },
    facebook: {
      appId: '302132824078486'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    minWidth: 769,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "tag background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    centered: true,
    columns: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "> Hello, World!"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "> This is Mineru Coding Blog."), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "> "))))), __jsx("div", {
    className: "tag container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "tag container2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    minWidth: 1,
    maxWidth: 768,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("div", {
    className: "tag background mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    centered: true,
    columns: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "> Hello, World!"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "> This is Mineru Coding Blog."), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "> "))))), __jsx("div", {
    className: "tag container mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    textAlign: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ })

})
//# sourceMappingURL=tag.js.1969c9413b66226753b0.hot-update.js.map