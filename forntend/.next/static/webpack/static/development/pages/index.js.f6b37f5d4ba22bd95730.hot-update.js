webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_blog_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/blog/Search */ "./components/blog/Search.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_home_HomeCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/HomeCard */ "./components/home/HomeCard.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/blog */ "./actions/blog.js");


var _this = undefined,
    _jsxFileName = "D:\\myBlog\\forntend\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Index = function Index(_ref) {
  var categories = _ref.categories;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    catArray: ['catone', 'react', 'bubble'],
    row1: [],
    reload: false
  }),
      rowOneValues = _useState[0],
      setRowOneValues = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    row2: []
  }),
      rowTwoValues = _useState2[0],
      setRowTwoValues = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    row3: []
  }),
      rowThreeValues = _useState3[0],
      setRowThreeValues = _useState3[1];

  var row1 = rowOneValues.row1,
      reload = rowOneValues.reload,
      catArray = rowOneValues.catArray;
  var row2 = rowTwoValues.row2;
  var row3 = rowThreeValues.row3;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    filterCategories();
  }, [reload]);

  var filterCategories = function filterCategories() {
    var selectCategoryId = [];

    var _loop = function _loop(i) {
      selectCategoryId[i] = categories.find(function (c) {
        if (c.name === catArray[i]) {
          return c._id;
        }
      });
    };

    for (var i = 0; i < catArray.length; i++) {
      _loop(i);
    }

    getFilterCategories(selectCategoryId);
  };

  var getFilterCategories = function getFilterCategories(selectCategoryId) {
    console.log('selectCategoryId', selectCategoryId);

    if (selectCategoryId[0].name === 'catone') {
      console.log('selectCategoryId', selectCategoryId[0]);
      Object(_actions_blog__WEBPACK_IMPORTED_MODULE_7__["listByCategories"])(selectCategoryId[0]).then(function (data) {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log('data', data); // row1=data;

          setRowOneValues(_objectSpread({}, rowOneValues, {
            row1: data
          }));
        }
      });
    }

    if (selectCategoryId[1].name === 'react') {
      console.log('selectCategoryId', selectCategoryId[1]);
      Object(_actions_blog__WEBPACK_IMPORTED_MODULE_7__["listByCategories"])(selectCategoryId[1]).then(function (data1) {
        if (data1.error) {
          console.log(data1.error);
        } else {
          setRowTwoValues(_objectSpread({}, rowTwoValues, {
            row2: data1
          }));
        }
      });

      if (selectCategoryId[2].name === 'bubble') {
        console.log('selectCategoryId', selectCategoryId[2]);
        Object(_actions_blog__WEBPACK_IMPORTED_MODULE_7__["listByCategories"])(selectCategoryId[2]).then(function (data2) {
          if (data2.error) {
            console.log(data2.error);
          } else {
            setRowThreeValues(_objectSpread({}, rowThreeValues, {
              row3: data2
            }));
          }
        });
      }
    }
  };

  var showRelatedList = function showRelatedList(row) {
    return row ? row.map(function (i, l) {
      return __jsx("div", {
        className: "col-md-4",
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 19
        }
      }, __jsx("article", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 23
        }
      }, __jsx(_components_home_HomeCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        blog: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 27
        }
      })));
    }) : '';
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "slides",
    className: "cover-slides",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 2
    }
  }, __jsx("ul", {
    className: "slides-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 3
    }
  }, __jsx("li", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "images/slider-01.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 8
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 31
    }
  }, "Welcome To ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 50
    }
  }), " Live Dinner Restaurant")), __jsx("p", {
    className: "m-b-40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 8
    }
  }, "See how your users experience your website in realtime or view  ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 94
    }
  }), "trends to see any changes in performance over time."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 8
    }
  }, __jsx("a", {
    className: "btn btn-lg btn-circle btn-outline-new-white",
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, "Reservation")))))), __jsx("li", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "images/slider-02.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 8
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 31
    }
  }, "Welcome To ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 50
    }
  }), " Live Dinner Restaurant")), __jsx("p", {
    className: "m-b-40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 8
    }
  }, "See how your users experience your website in realtime or view  ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 94
    }
  }), "trends to see any changes in performance over time."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 8
    }
  }, __jsx("a", {
    className: "btn btn-lg btn-circle btn-outline-new-white",
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, "Reservation")))))), __jsx("li", {
    className: "text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "images/slider-03.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 8
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 31
    }
  }, "Welcome To ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 50
    }
  }), " Yamifood Restaurant")), __jsx("p", {
    className: "m-b-40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 8
    }
  }, "See how your users experience your website in realtime or view  ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 94
    }
  }), "trends to see any changes in performance over time."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 8
    }
  }, __jsx("a", {
    className: "btn btn-lg btn-circle btn-outline-new-white",
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, "Reservation"))))))), __jsx("div", {
    className: "slides-navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 3
    }
  }, __jsx("a", {
    href: "#",
    className: "next",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 4
    }
  }, __jsx("i", {
    className: "fa fa-angle-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 33
    }
  })), __jsx("a", {
    href: "#",
    className: "prev",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 4
    }
  }, __jsx("i", {
    className: "fa fa-angle-left",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 33
    }
  })))), __jsx(_components_blog_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: "text-center pt-4 pb-4 h2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, "Health || Nutri blogs"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }, showRelatedList(row1))), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: "text-center pt-4 pb-4 h2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, "Fitness || Yoga "), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 21
    }
  }, showRelatedList(row2))), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: "text-center pt-4 pb-4 h2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, "Mental Health "), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 21
    }
  }, showRelatedList(row3))), __jsx("div", {
    className: "subscribe",
    id: "subscribe",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "sub-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 6
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, "Subscribe Here for Updates"), __jsx("form", {
    role: "form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "input-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 8
    }
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "Email...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "input-group-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 10
    }
  }, __jsx("button", {
    className: "btn btn-default",
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, "Subscribe"))))))));
};

Index.getInitialProps = function () {
  return Object(_actions_category__WEBPACK_IMPORTED_MODULE_6__["getCategories"])().then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
      return {
        categories: data
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f6b37f5d4ba22bd95730.hot-update.js.map