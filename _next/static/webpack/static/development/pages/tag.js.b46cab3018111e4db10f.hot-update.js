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
  DESCRIPTION4: "\uC900\uBE44\uC911\uC785\uB2C8\uB2E4...",
  POST5: '군대에서 프로그래밍',
  DESCRIPTION5: "\uAD70\uB300\uC5D0\uC11C \uD504\uB85C\uADF8\uB798\uBC0D\uC744 \uD558\uACE0 \uC2F6\uB2E4\uBA74 \uC5B4\uB5BB\uAC8C \uD574\uC57C\uD560\uAE4C?\n\uC6B0\uC120 \uB098\uC5D0\uAC8C \uD544\uC694\uD55C \uAC83\uB4E4\uC744 \uC815\uB9AC\uD574\uBCF4\uC558\uB2E4.\n\n1. \uB808\uD37C\uB7F0\uC2A4 \uC790\uB8CC\n2. \uD30C\uC77C \uC5C5\uB85C\uB4DC \uBC0F \uB2E4\uC6B4\uB85C\uB4DC\n3. github \uC790\uB3D9 push \uC2DC\uC2A4\uD15C\n\n\uC774 \uC774\uC678\uC5D0\uB3C4 \uD544\uC694\uD55C \uAC83\uB4E4\uB3C4 \uC788\uACA0\uC9C0\uB9CC \uC6B0\uC120 \uC774\uC815\uB3C4\uBA74\n\uCDA9\uBD84\uD788 \uAC1C\uBC1C\uC744 \uD558\uB294\uB370 \uBB38\uC81C\uAC00 \uB420 \uAC74 \uC5C6\uC5B4\uBCF4\uC778\uB2E4.",
  POST6: '자료구조란?',
  DESCRIPTION6: "\uB300\uD559 \uAC15\uC758\uB97C \uB4E4\uC73C\uBA74\uC11C \uC54C\uACE0\uB9AC\uC998\uACFC \uC790\uB8CC\uAD6C\uC870\uB77C\uB294 \uC218\uC5C5\uC744 \uB530\uB85C \uB098\uB220\uC788\uC9C0\uB9CC\n\uC218\uC5C5\uC744 \uB4E3\uB2E4 \uBCF4\uBA74 \uC774 \uB458\uC740 \uC65C \uB530\uB85C \uBC30\uC6B0\uB294 \uAC83\uC77C\uAE4C\uC5D0 \uB300\uD574 \uC758\uBB38\uC774 \uB4E4\uC5C8\uB2E4.\n\uAD50\uC218\uB2D8\uC758 \uC218\uC5C5 \uBC29\uC2DD\uC5D0\uC11C \uB2E4\uB978 \uC810\uC774 \uC788\uB294 \uAC83\uC778\uC9C0 \uC815\uB9D0 \uC774\uB807\uAC8C \uAC00\uB974\uCE58\uB294 \uAC83\uC774\n\uB300\uD559\uC5D0\uC11C \uC54C\uB824\uC8FC\uB294 \uAC15\uC758\uC758 \uD55C\uACC4\uC778\uC9C0\uB294 \uBAA8\uB974\uACA0\uC9C0\uB9CC \uD655\uC2E4\uD55C \uAC83\uC740\n\uC790\uB8CC\uAD6C\uC870\uC640 \uC54C\uACE0\uB9AC\uC998\uC740 \uC11C\uB85C \uAD00\uB828\uC774 \uB9CE\uC9C0\uB9CC \uAC19\uC740 \uB0B4\uC6A9\uC73C\uB85C \uAC00\uB974\uCE58\uB294 \uAC83\uC740\n\uBB38\uC81C\uAC00 \uC788\uB2E4\uB294 \uC810\uC774\uB2E4. \uADF8\uB798\uC11C \uB098\uB294 \uD655\uC2E4\uD558\uAC8C \uC790\uB8CC\uAD6C\uC870\uC640 \uC54C\uACE0\uB9AC\uC998\uC744 \uAD6C\uBD84\uD574\uC11C \uAE00\uC744 \uC4F8 \uAC83\uC774\uB2E4.",
  POST7: '보일러 플레이트',
  DESCRIPTION7: "React\uB298 \uCC98\uC74C\uBD80\uD130 \uC81C\uB300\uB85C \uACF5\uBD80\uD558\uBA74\uC11C \uC11C\uBE44\uC2A4\uB298 \uB9CC\uB4E4\uC9C4 \uC54A\uC558\uC9C0\uB9CC\n\uB4B7\uAC70\uB798\uB85C React\uB298 \uACF5\uBD80\uD55C \uC9C0 \uC774\uC81C \uC5B4\uB290\uB367 1\uB144\uC774 \uC9C0\uB098\uBA74\uC11C \uC2AC\uC2AC \uB098\uC758 \uBBFC\uB0AF\uC774 \uB4DC\uB7EC\uB098\uAE30 \uC2DC\uC791\uD558\uB294 \uAE30\uBD84\uC774\uB2E4.\n\uAC1C\uBC1C \uC790\uCCB4\uB294 \uBB38\uC81C\uC5C6\uC774 \uD558\uACE0 \uC788\uC9C0\uB9CC, \uCF54\uB4DC\uAC00 \uC9C0\uC800\uBD84\uD558\uB2E4\uB294 \uAC83\uC774 \uB290\uAEF4\uC9C0\uACE0\n\uCEE4\uBBA4\uB2C8\uD2F0\uC5D0\uC11C \uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uC6A9\uC5B4\uC5D0 \uB300\uD574\uC11C \uBC14\uB85C \uC5B4\uB5A4 \uAC83\uC778\uC9C0 \uC778\uC9C0\uB298 \uBABB\uD558\uB294 \uC0C1\uD669\uC774 \uBC1C\uC0DD\uD558\uBA74\uC11C\n\uAD00\uB828 \uC6A9\uC5B4\uB298 \uC544\uB294 \uAC8C \uC5BC\uB9C8\uB098 \uC911\uC694\uD55C\uC9C0 \uAE68\uB2EB\uACE0 \uC788\uB2E4.\n\uADF8\uB9AC\uACE0 \uADF8\uB807\uAC8C \uC2EB\uB358 '\uAE30\uBCF8'\uC774\uB780 \uAC83\uC774 \uC65C \uC911\uC694\uD55C\uC9C0 \uC774\uC81C \uC880 \uC54C \uAC83 \uAC19",
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
      lineNumber: 102
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
      lineNumber: 103
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    minWidth: 769,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("div", {
    className: "tag background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    centered: true,
    columns: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "> Hello, World!"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "> This is Mineru Coding Blog."), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "> "))))), __jsx("div", {
    className: "tag container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("div", {
    className: "tag container2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    minWidth: 1,
    maxWidth: 768,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("div", {
    className: "tag background mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    centered: true,
    columns: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "> Hello, World!"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "> This is Mineru Coding Blog."), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "> "))))), __jsx("div", {
    className: "tag container mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    textAlign: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ })

})
//# sourceMappingURL=tag.js.b46cab3018111e4db10f.hot-update.js.map