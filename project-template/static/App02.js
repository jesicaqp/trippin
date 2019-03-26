"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
var contentNode2 = document.getElementById("event");

var Calender = React.createClass({
  displayName: "Calender",

  getInitialState: function getInitialState() {
    return { next: false, perivous: true };
  },
  switch: function _switch(word) {
    var perivous = void 0,
        next = void 0;
    if (word == "perivous") {
      perivous = true;next = false;
    } else {
      next = true;perivous = false;
    }
    return this.setState({ next: next, perivous: perivous });
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
<<<<<<< HEAD
          { id: "signupButton", onClick: this.switch.bind(null, "perivous"), className: this.state.perivous },
          "January"
        ),
        React.createElement(
          "button",
          { id: "loginButton", onClick: this.switch.bind(null, "next"), className: this.state.next },
          "Febuary"
=======
          { id: "perivous", onClick: this.switch.bind(null, "perivous"), className: this.state.Jan },
          "Previous Month"
        ),
        React.createElement(
          "button",
          { id: "next", onClick: this.switch.bind(null, "next"), className: this.state.Feb },
          "Next Month"
>>>>>>> 3a3654f92d56ac6c11a4b83892ff32327c5f00a8
        )
      ),
      this.state.perivous ? React.createElement(Perivous, null) : null,
      this.state.next ? React.createElement(Next, null) : null
    );
  }
});

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
          "button",
          { type: "button", "class": "btn btn-primary" },
          React.createElement(
            "a",
            { href: "/view03.html" },
            "Create Event+"
          )
        ),
        React.createElement(
          "center",
          null,
          React.createElement(
            "h1",
            null,
            "Calendar View"
          )
        )
      );
    }
  }]);

  return MyComponent;
}(React.Component);

var Next = function (_React$Component2) {
  _inherits(Next, _React$Component2);

  function Next() {
    _classCallCheck(this, Next);

    return _possibleConstructorReturn(this, (Next.__proto__ || Object.getPrototypeOf(Next)).call(this));
  }

  _createClass(Next, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
<<<<<<< HEAD
          { id: "next" },
          React.createElement("img", { src: "https://i.pinimg.com/originals/e7/70/0c/e7700c74cda27fcce7b1f6ebf971e455.jpg" })
=======
          { id: "perivous" },
          React.createElement(
            "center",
            null,
            " ",
            React.createElement("img", { src: "https://i.pinimg.com/originals/84/9b/bf/849bbfa252a24fb4734242a23a957ee8.jpg", width: "700", height: "500" })
          )
>>>>>>> 3a3654f92d56ac6c11a4b83892ff32327c5f00a8
        )
      );
    }
  }]);

  return Next;
}(React.Component);

var Perivous = function (_React$Component3) {
  _inherits(Perivous, _React$Component3);

  function Perivous() {
    _classCallCheck(this, Perivous);

    return _possibleConstructorReturn(this, (Perivous.__proto__ || Object.getPrototypeOf(Perivous)).call(this));
  }

  _createClass(Perivous, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
<<<<<<< HEAD
          { id: "perivous" },
          React.createElement("img", { src: "https://i.pinimg.com/originals/84/9b/bf/849bbfa252a24fb4734242a23a957ee8.jpg" })
=======
          { id: "next" },
          React.createElement(
            "center",
            null,
            " ",
            React.createElement("img", { src: "https://i.pinimg.com/originals/e7/70/0c/e7700c74cda27fcce7b1f6ebf971e455.jpg", width: "700", height: "500" })
          )
>>>>>>> 3a3654f92d56ac6c11a4b83892ff32327c5f00a8
        )
      );
    }
  }]);

  return Perivous;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(Calender, null), contentNode);
ReactDOM.render(React.createElement(MyComponent, null), contentNode2);