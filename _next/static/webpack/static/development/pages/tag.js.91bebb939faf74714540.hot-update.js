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
  DESCRIPTION1: "\uAC1C\uBC1C\uC790\uB77C\uBA74 \uD55C \uBC88\uCBE4\uC740 \uB9CC\uB4E4\uC5B4 \uBCF4\uACE0 \uC2F6\uC740 github \uBE14\uB85C\uADF8\uB97C \uB4DC\uB514\uC5B4 \uB9CC\uB4E4\uC5B4\uC11C \uCCAB \uD3EC\uC2A4\uD305\uC744 \uC791\uC131\uD558\uAC8C \uB418\uC5C8\uB2E4. \uACFC\uC5F0 \uB0B4\uAC00 \uC5BC\uB9C8\uB098 \uC790\uC8FC \uC5EC\uAE30\uC5D0 \uD3EC\uC2A4\uD305\uD560\uC9C0\uB294 \uB098\uC870\uCC28 \uC758\uBB38\uC774\uC9C0\uB9CC \uCD5C\uB300\uD55C \uAC1C\uBC1C\uC5D0 \uAD00\uD55C \uACF5\uBD80\uB97C \uB354 \uC790\uC8FC \uD558\uACE0 \uAE00\uB85C \uB0A8\uAE30\uB294 \uAE30\uB85D\uC744 \uD574\uBD10\uC57C\uACA0\uB2E4.",
  POST2: '알고리즘이란?',
  DESCRIPTION2: "\uCEF4\uACF5(\uCEF4\uD4E8\uD130\uACF5\uD559\uACFC) \uAD00\uB828\uB41C \uD559\uACFC\uB97C \uB098\uC654\uB2E4\uBA74 \uB2E4\uB4E4 \uD55C \uBC88\uC529 \uB4E4\uC5B4\uBD24\uB358 \uACFC\uBAA9\uC774\uB2E4.\n\uC124\uB839 \uCEF4\uACF5\uC744 \uB098\uC624\uC9C0 \uC54A\uB354\uB77C\uB3C4 \uB2E4\uC591\uD55C \uB9E4\uCCB4\uB97C \uD1B5\uD574\uC11C '\uC54C\uACE0\uB9AC\uC998'\uC774\uB780 \uB9D0\uC744 \uC790\uC8FC \uC5B8\uAE09\uB418\uC5B4\uC11C\n\uB2E4\uB4E4 \uC54C\uACE0 \uC788\uB294 \uD0A4\uC6CC\uB4DC\uC774\uB2E4.",
  POST3: '코딩교육',
  DESCRIPTION3: "2018\uB144\uBD80\uD130 \uB300\uD55C\uBBFC\uAD6D \uACF5\uAD50\uC721\uC5D0\uC11C \uCF54\uB529 \uAD50\uC721 \uC758\uBB34\uD654\uB97C \uD558\uBA74\uC11C \uB9CE\uC740 \uD559\uBD80\uBAA8\uAC00 \uC790\uC2E0\uB4E4\uC758 \uC790\uB140\uC5D0\uAC8C\n\uC5B4\uB824\uC6B4 \uCF54\uB529 \uAD50\uC721\uC744 \uD559\uC6D0\uC744 \uBCF4\uB0B4\uBA74\uC11C\uB77C\uB3C4 \uC2DC\uCF1C\uC57C \uD558\uB294\uC9C0 \uAC71\uC815\uC744 \uD558\uAE30 \uC2DC\uC791\uD588\uB2E4.",
  POST4: '준비중입니다',
  DESCRIPTION4: "",
  POST5: '군대에서 프로그래밍',
  DESCRIPTION5: "",
  POST6: '자료구조란?',
  DESCRIPTION6: "",
  POST7: '드러나기 시작하는 나의 민낯',
  DESCRIPTION7: "",
  POST8: '너의휴가 나의휴가',
  DESCRIPTION8: "",
  POST9: '나는 왜 테스트 코드를 작성하지 않았는가',
  DESCRIPTION9: "",
  POST10: '브랜드 디자인 - StartBucks편',
  DESCRIPTION10: "",
  POST11: 'Android Study - Kotlin',
  DESCRIPTION11: ""
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

    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url).then(res => {
      setSource(res.data);
    });
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_5__["NextSeo"], {
    title: "Mineru Code Blog - ".concat(summary),
    description: "".concat(description),
    openGraph: {
      url: "https://mineru98.github.io/tag?id=".concat(id),
      title: "Mineru Code Blog - ".concat(summary),
      description: "".concat(description),
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
      lineNumber: 85
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    minWidth: 769,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    className: "tag background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    centered: true,
    columns: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "> Hello, World!"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "> This is Mineru Coding Blog."), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "> "))))), __jsx("div", {
    className: "tag container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: "tag container2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    minWidth: 1,
    maxWidth: 768,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("div", {
    className: "tag background mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    centered: true,
    columns: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "> Hello, World!"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "> This is Mineru Coding Blog."), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "> "))))), __jsx("div", {
    className: "tag container mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    textAlign: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ })

})
//# sourceMappingURL=tag.js.91bebb939faf74714540.hot-update.js.map