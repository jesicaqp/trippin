'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById('contents');
var contentNode2 = document.getElementById('login');
var contentNode3 = document.getElementById('signup');

var MyComponent = function (_React$Component) {
  _inherits(MyComponent, _React$Component);

  function MyComponent() {
    _classCallCheck(this, MyComponent);

    return _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this));
  }

  _createClass(MyComponent, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Login In'
        )
      );
    }
  }]);

  return MyComponent;
}(React.Component);

var Login = function (_React$Component2) {
  _inherits(Login, _React$Component2);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        null,
        React.createElement(
          'label',
          { 'for': 'uname' },
          React.createElement(
            'b',
            null,
            'Username'
          )
        ),
        React.createElement('input', { type: 'text', placeholder: 'Enter Username', name: 'uname' }),
        React.createElement(
          'label',
          { 'for': 'psw' },
          React.createElement(
            'b',
            null,
            'Password'
          )
        ),
        React.createElement('input', { type: 'password', placeholder: 'Enter Password', name: 'psw' })
      );
    }
  }]);

  return Login;
}(React.Component);

var SignUp = function (_React$Component3) {
  _inherits(SignUp, _React$Component3);

  function SignUp() {
    _classCallCheck(this, SignUp);

    return _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this));
  }

  _createClass(SignUp, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          null,
          React.createElement(
            'a',
            { href: '/view02.html' },
            'Login'
          )
        ),
        React.createElement(
          'button',
          null,
          React.createElement(
            'a',
            { href: '/view04.html' },
            'Sign Up'
          )
        )
      );
    }
  }]);

  return SignUp;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MyComponent, null), contentNode);
ReactDOM.render(React.createElement(Login, null), contentNode2);
ReactDOM.render(React.createElement(SignUp, null), contentNode3);