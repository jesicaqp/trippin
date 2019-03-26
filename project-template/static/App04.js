"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
var contentNode2 = document.getElementById("signForm");

var MyComponent = function (_React$Component) {
  _inherits(MyComponent, _React$Component);

  function MyComponent() {
    _classCallCheck(this, MyComponent);

    return _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this));
  }

  _createClass(MyComponent, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Sign Up"
        ),
        React.createElement(
          "p",
          null,
          "Please fill in this form to create an account."
        )
      );
    }
  }]);

  return MyComponent;
}(React.Component);

var SignForm = function (_React$Component2) {
  _inherits(SignForm, _React$Component2);

  function SignForm() {
    _classCallCheck(this, SignForm);

    return _possibleConstructorReturn(this, (SignForm.__proto__ || Object.getPrototypeOf(SignForm)).call(this));
  }

  _createClass(SignForm, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        null,
        React.createElement(
          "div",
          { "class": "container" },
          React.createElement(
            "label",
            { "for": "email" },
            React.createElement(
              "b",
              null,
              "Email"
            )
          ),
          React.createElement("input", { type: "text", placeholder: "Enter Email", name: "email" }),
          React.createElement(
            "label",
            { "for": "psw" },
            React.createElement(
              "b",
              null,
              "Password"
            )
          ),
          React.createElement("input", { type: "password", placeholder: "Enter Password", name: "psw" }),
          React.createElement(
            "label",
            { "for": "psw-repeat" },
            React.createElement(
              "b",
              null,
              "Repeat Password"
            )
          ),
          React.createElement("input", { type: "password", placeholder: "Repeat Password", name: "psw-repeat" }),
          React.createElement(
            "div",
            { "class": "clearfix" },
            React.createElement(
              "button",
              null,
              React.createElement(
                "a",
                { href: "/view02.html" },
                "Sign Up"
              )
            ),
            React.createElement(
              "button",
              null,
              React.createElement(
                "a",
                { href: "/view01.html" },
                "Cancel"
              )
            )
          )
        )
      );
    }
  }]);

  return SignForm;
}(React.Component);

var Parent = function (_React$Component3) {
  _inherits(Parent, _React$Component3);

  function Parent() {
    _classCallCheck(this, Parent);

    return _possibleConstructorReturn(this, (Parent.__proto__ || Object.getPrototypeOf(Parent)).call(this));
  }

  _createClass(Parent, [{
    key: "getInitialState",
    value: function getInitialState() {
      return { signup: false, login: true };
    }
  }, {
    key: "switch",
    value: function _switch(word) {
      var signup = void 0,
          login = void 0;
      if (word == "signup") {
        signup = true;login = false;
      } else {
        login = true;signup = false;
      }
      return this.setState({ login: login, signup: signup });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "buttons" },
          React.createElement(
            "p",
            { id: "signupButton", onClick: this.switch.bind(null, "signup"), className: this.state.signup },
            "Sign In"
          ),
          React.createElement(
            "p",
            { id: "loginButton", onClick: this.switch.bind(null, "login"), className: this.state.login },
            "Login"
          )
        ),
        this.state.signup ? React.createElement(Signup, null) : null,
        this.state.login ? React.createElement(Login, null) : null
      );
    }
  }]);

  return Parent;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MyComponent, null), contentNode);
ReactDOM.render(React.createElement(SignForm, null), contentNode2);