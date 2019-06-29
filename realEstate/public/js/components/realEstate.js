webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: "Merry"
    };
    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: "cities",
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;

        return cities.map(function (item, i) {
          return _react2.default.createElement(
            "option",
            { value: item, key: i },
            item
          );
        });
      }
    }
  }, {
    key: "homeTypes",
    value: function homeTypes() {
      var homeTypes = this.props.globalState.populateFormsData.homeTypes;

      if (homeTypes !== undefined) {
        console.log(homeTypes);
        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "bedrooms",
    value: function bedrooms() {
      var bedrooms = this.props.globalState.populateFormsData.bedrooms;

      if (bedrooms !== undefined) {
        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item,
            "+ BR"
          );
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter" },
        _react2.default.createElement(
          "div",
          { className: "ins" },
          _react2.default.createElement(
            "h4",
            null,
            "Filter"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "city",
              className: "neighbourhood",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All"
            ),
            this.cities()
          ),
          _react2.default.createElement(
            "select",
            {
              name: "homeType",
              className: "homeType",
              onChange: this.props.change
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All Homes"
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            "select",
            {
              name: "bedrooms",
              onChange: this.props.change
            },
            this.bedrooms()
          ),
          _react2.default.createElement(
            "div",
            { className: "filter price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_price",
              className: "min_price",
              onChange: this.props.change,
              value: this.props.globalState.min_price
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_price",
              className: " min-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.max_price
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filter floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Floor space"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_floor_space",
              className: " min-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.min_floor_space
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_floor_space",
              className: " min-floor-space",
              onChange: this.props.change,
              value: this.props.globalState.max_floor_space
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filter extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras", className: "" },
              _react2.default.createElement(
                "span",
                null,
                "Elevators"
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "elevator",
                value: "elevator",
                className: "",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras", className: "" },
              _react2.default.createElement(
                "span",
                null,
                "Swimming Poop"
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "swimming_pool",
                value: "swimming_pool",
                className: "",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras", className: "" },
              _react2.default.createElement(
                "span",
                null,
                "Finished Basement"
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "basement",
                value: "basement",
                className: "",
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras", className: "" },
              _react2.default.createElement(
                "span",
                null,
                "Gym"
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "gym",
                value: "gym",
                className: "",
                onChange: this.props.change
              })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "logo" },
          " Logo"
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            " Create adds"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            " About us"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            " Log in "
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "register-btn" },
            "Register"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: "loopListings",
    value: function loopListings() {
      var listingsData = this.props.listingsData;
      // var data= this.props.listingsData

      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not mach any listings!";
      }
      return listingsData.map(function (listing, index) {
        return _react2.default.createElement(
          "div",
          { className: "col-md-3", key: index },
          _react2.default.createElement(
            "div",
            { className: "listing" },
            _react2.default.createElement(
              "div",
              {
                className: "listing-img",
                style: {
                  background: "url(\"" + listing.image + "\") no-repeat center center"
                }
              },
              _react2.default.createElement(
                "span",
                { className: "address" },
                listing.address
              ),
              _react2.default.createElement(
                "div",
                { className: "details" },
                _react2.default.createElement(
                  "div",
                  { className: "col-md-3" },
                  _react2.default.createElement(
                    "div",
                    { className: "user-img" },
                    " "
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col-md-9" },
                  _react2.default.createElement(
                    "div",
                    { className: "user-details" },
                    _react2.default.createElement(
                      "span",
                      { className: "user-name" },
                      "Nina Smith"
                    ),
                    _react2.default.createElement(
                      "span",
                      { className: "post-date" },
                      "05.08.2016"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "listing-details" },
                    _react2.default.createElement(
                      "div",
                      { className: "floor-space" },
                      " ",
                      _react2.default.createElement("i", { className: "fas fa-square" }),
                      " ",
                      _react2.default.createElement(
                        "span",
                        null,
                        " 1000 ft\xB2 "
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "bedrooms" },
                      _react2.default.createElement("i", { className: "fas fa-bed" }),
                      _react2.default.createElement(
                        "span",
                        null,
                        listing.bedrooms,
                        " bedrooms "
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "btn" },
                    " View Listing"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "bottom-info" },
              _react2.default.createElement(
                "span",
                { className: "location" },
                " $",
                listing.price
              ),
              _react2.default.createElement(
                "span",
                { className: "city" },
                _react2.default.createElement("i", { className: "fas fa-map-marker" }),
                " ",
                listing.city,
                " ,",
                " ",
                listing.state
              )
            )
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "listings" },
        _react2.default.createElement(
          "section",
          { className: "search-area" },
          _react2.default.createElement("input", { type: "text", name: "search" })
        ),
        _react2.default.createElement(
          "section",
          { className: "sortby-area" },
          _react2.default.createElement(
            "div",
            { className: "results" },
            "390 results found"
          ),
          _react2.default.createElement(
            "div",
            { className: "sort-options" },
            _react2.default.createElement(
              "select",
              { name: "sortby", className: "sortby" },
              _react2.default.createElement(
                "option",
                { value: "price-asc" },
                " Highest Price"
              ),
              _react2.default.createElement(
                "option",
                { value: "price-asc" },
                " Lowest Price"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "view" },
              _react2.default.createElement("i", { className: "fas fa-list" }),
              _react2.default.createElement("i", { className: "fas fa-th" })
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "listing-results" },
          this.loopListings()
        ),
        _react2.default.createElement(
          "section",
          { id: "pagination" },
          _react2.default.createElement(
            "ul",
            { className: "pages" },
            _react2.default.createElement(
              "li",
              null,
              " Prev"
            ),
            _react2.default.createElement(
              "li",
              { className: "active" },
              " 1"
            ),
            _react2.default.createElement(
              "li",
              null,
              " 2"
            ),
            _react2.default.createElement(
              "li",
              null,
              " 3"
            ),
            _react2.default.createElement(
              "li",
              null,
              " 4"
            ),
            _react2.default.createElement(
              "li",
              null,
              " Next"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ListingsData = [{
  address: "Karal-Marx-Alee 76",
  city: "Berlin",
  state: "Berlin",
  rooms: 4,
  price: 220000,
  floorSpace: 2000,
  extras: ["elevator", "gym", "basement"],
  homeType: "Apartament",
  image: "https://q-ak.bstatic.com/images/hotel/max1024x768/174/174052417.jpg"
}, {
  address: "Charlotten Strasse 3",
  city: "Düsseldorf",
  state: "WF",
  rooms: 3,
  price: 24556,
  floorSpace: 1000,
  extras: ["elevator", "swimming_pool"],
  homeType: "Apartament",
  image: "https://www.engelvoelkers.com/images/5c221d7b-6163-442c-a4ca-7cb5bf13382b/beautiful-apartment-in-ciutat-vella?w=576&h=432"
}, {
  address: "Rupprecher Strasse 21",
  city: "Aachen",
  state: "M",
  rooms: 2,
  price: 345355,
  floorSpace: 1500,
  extras: ["swimming_pool"],
  homeType: "Condo",
  image: "https://q-ak.bstatic.com/images/hotel/max1024x768/136/136979723.jpg"
}, {
  address: "Münsterstrasse 123",
  city: "Berlin",
  state: "FN",
  rooms: 2,
  price: 80000,
  floorSpace: 3400,
  extras: ["elevator", "basement", "swimming_pool"],
  homeType: "Apartament",
  image: "https://www.callsen.de/images/ferienwohnungen/binz/villamathilde/ferienwohnung_22/10_Wohnzimmer.jpg"
}, {
  address: "FrankfurterStrasse 5",
  city: "Düsseldorf",
  state: "Berlin",
  rooms: 1,
  price: 6030000,
  floorSpace: 4300,
  extras: ["elevator"],
  homeType: "Studio",
  image: "https://q-ak.bstatic.com/images/hotel/max1024x768/136/136979740.jpg"
}, {
  address: "Ana-Mark 76",
  city: "Bremen",
  state: "WF",
  rooms: 2,
  price: 150000,
  floorSpace: 1000,
  extras: ["elevator", "swimming_pool"],
  homeType: "House",
  image: "https://www.callsen.de/images/ferienwohnungen/binz/villamathilde/ferienwohnung_22/10_Wohnzimmer.jpg"
}, {
  address: "Ana-Mark 76",
  city: "Frankfurt am Mai",
  state: "WF",
  rooms: 2,
  price: 150000,
  floorSpace: 1000,
  extras: ["elevator", "swimming_pool"],
  homeType: "House",
  image: "https://www.callsen.de/images/ferienwohnungen/binz/villamathilde/ferienwohnung_22/10_Wohnzimmer.jpg"
}];

exports.default = ListingsData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: "Marie",
      listingsData: _listingsData2.default,
      city: "All",
      homeType: "All",
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      basement: false,
      elevator: false,
      gym: false,
      swimming_pool: false,
      filteredData: _listingsData2.default,
      populateFormsData: ''
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForm = _this.populateForm.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: "change",
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: "filteredData",
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item, index) {
        console.log(item.extras[index] != _this3.state.elevator);
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedrooms && item.elevator != _this3.state.elevator;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city === _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType === _this3.state.homeType;
        });
      }

      if (this.state.swimming_pool != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('swimming_pool') == _this3.state.swimming_pool;
        });
        console.log(newData);
      }

      if (this.state.elevator != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('elevator') == _this3.state.elevator;
        });
        console.log(newData);
      }

      if (this.state.gym != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('gym') == _this3.state.gym;
        });
        console.log(newData);
      }

      if (this.state.basement != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('basement') == _this3.state.basement;
        });
        console.log(newData);
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: "populateForm",
    value: function populateForm() {
      var _this4 = this;

      // city
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      // remove everything wich repeats , keeps the one which not repeat
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));

      cities = cities.sort();

      // Home homeType
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();

      // bedrooms
      var bedrooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      bedrooms = bedrooms.sort();

      this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          bedrooms: bedrooms,
          cities: cities
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: "render",
    value: function render() {
      //console.log(this.state.listingsData)
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          "section",
          { id: "content-area" },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state,
            populateAction: this.populateForm }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);