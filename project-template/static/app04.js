"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
var contentNode2 = document.getElementById("search");

var MyComponent = React.createClass({
  displayName: "MyComponent",

  getInitialState: function getInitialState() {
    return { signup: false, login: true };
  },
  switch: function _switch(word) {
    var signup = void 0,
        login = void 0;
    if (word == "signup") {
      signup = true;login = false;
    } else {
      login = true;signup = false;
    }
    return this.setState({ login: login, signup: signup });
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { id: "buttons" },
        React.createElement(
          "button",
          { id: "loginButton", onClick: this.switch.bind(null, "login"), className: this.state.login },
          "Profile"
        ),
        React.createElement(
          "button",
          { id: "signupButton", onClick: this.switch.bind(null, "signup"), className: this.state.signup },
          "Friends"
        )
      ),
      this.state.signup ? React.createElement(FriendsList, null) : null,
      this.state.login ? React.createElement(Profile, null) : null
    );
  }
});

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this));
  }

  _createClass(SearchBar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "nav",
            { className: "navbar navbar-light" },
            React.createElement("a", { className: "navbar-brand" }),
            React.createElement(
              "a",
              { className: "btn btn-info", href: "/view02.html", role: "button" },
              "Calendar"
            ),
            React.createElement(
              "a",
              { className: "btn btn-info", href: "/view03.html", role: "button" },
              "Create Event"
            ),
            React.createElement(
              "a",
              { className: "btn btn-info", href: "/view04.html", role: "button" },
              "Profile"
            ),
            React.createElement(
              "a",
              { className: "btn btn-info", href: "/view01.html", role: "button" },
              "Sign Out"
            ),
            React.createElement(
              "form",
              { className: "form-inline" },
              React.createElement("input", { className: "form-control mr-sm-2", type: "search", placeholder: "Search", "aria-label": "Search" }),
              React.createElement(
                "button",
                { className: "btn btn-outline-success my-2 my-sm-0", type: "submit" },
                "Search"
              )
            )
          )
        )
      );
    }
  }]);

  return SearchBar;
}(React.Component);

var FriendsList = function (_React$Component2) {
  _inherits(FriendsList, _React$Component2);

  function FriendsList() {
    _classCallCheck(this, FriendsList);

    return _possibleConstructorReturn(this, (FriendsList.__proto__ || Object.getPrototypeOf(FriendsList)).call(this));
  }

  _createClass(FriendsList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Friends"
      );
    }
  }]);

  return FriendsList;
}(React.Component);

var Profile = function (_React$Component3) {
  _inherits(Profile, _React$Component3);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Profile"
      );
    }
  }]);

  return Profile;
}(React.Component);

ReactDOM.render(React.createElement(MyComponent, null), contentNode);
ReactDOM.render(React.createElement(SearchBar, null), contentNode2);