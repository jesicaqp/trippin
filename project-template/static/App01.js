"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Parent = React.createClass({
  displayName: "Parent",

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
          "p",
          { id: "signupButton", onClick: this.switch.bind(null, "signup"), className: this.state.signup },
          "Sign In"
        ),
        React.createElement(
          "p",
          { id: "loginButton", onClick: this.switch.bind(null, "login"), className: this.state.login },
          " Login"
        )
      ),
      this.state.signup ? React.createElement(Signup, null) : null,
      this.state.login ? React.createElement(Login, null) : null
    );
  }
});

var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup() {
    _classCallCheck(this, Signup);

    return _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "signup" },
          React.createElement("input", { type: "text", id: "name", placeholder: "username" }),
          React.createElement("input", { type: "email", id: "email", placeholder: "Email" }),
          React.createElement("input", { type: "password", id: "password", placeholder: "Password" }),
          React.createElement("input", { type: "password", id: "confirm", placeholder: "Confirm Password" }),
          React.createElement(
            "button",
            { id: "send" },
            React.createElement(
              "a",
              { href: "/view02.html" },
              "Sign Up"
            )
          )
        )
      );
    }
  }]);

  return Signup;
}(React.Component);

var Login = function (_React$Component2) {
  _inherits(Login, _React$Component2);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "login" },
          React.createElement("input", { type: "email", id: "email", placeholder: "Email" }),
          React.createElement("input", { type: "password", id: "password", placeholder: "Password" }),
          React.createElement(
            "button",
            { id: "send" },
            React.createElement(
              "a",
              { href: "/view02.html" },
              "Login"
            )
          )
        )
      );
    }
  }]);

  return Login;
}(React.Component);

ReactDOM.render(React.createElement(Parent, null), document.getElementById("contents"));