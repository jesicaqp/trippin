'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
var contentNode2 = document.getElementById('eventinfo');
var contentNode3 = document.getElementById('eventbuttons');

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
          'Event Name: Trip to the Cape'
        )
      );
    }
  }]);

  return MyComponent;
}(React.Component);

var EventInfo = function (_React$Component2) {
  _inherits(EventInfo, _React$Component2);

  function EventInfo() {
    _classCallCheck(this, EventInfo);

    return _possibleConstructorReturn(this, (EventInfo.__proto__ || Object.getPrototypeOf(EventInfo)).call(this));
  }

  _createClass(EventInfo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { 'for': 'edate' },
          React.createElement(
            'h3',
            null,
            React.createElement(
              'b',
              null,
              'Event Date'
            )
          )
        ),
        React.createElement(
          'text',
          null,
          '03/25/2019 to 04/02/2019'
        ),
        React.createElement(
          'label',
          { 'for': 'elocation' },
          React.createElement(
            'h3',
            null,
            React.createElement(
              'b',
              null,
              'Event Location'
            )
          )
        ),
        React.createElement(
          'text',
          null,
          'This event will take place in Cape Cod, Massachusetts.'
        ),
        React.createElement(
          'text',
          null,
          'A week of fun and relaxation for students before the second round of midterms. We will be celebrating the start of spring and the start of warmer temperatures and sunny skies. '
        ),
        React.createElement(
          'label',
          { 'for': 'einvitelist' },
          React.createElement(
            'h3',
            null,
            React.createElement(
              'b',
              null,
              'Event Attendee List'
            )
          )
        ),
        React.createElement(
          'text',
          null,
          'Jesica Quinones, Aibhilin Fitzpatrick, Arushi Ahmed.'
        )
      );
    }
  }]);

  return EventInfo;
}(React.Component);

var EventButtons = function (_React$Component3) {
  _inherits(EventButtons, _React$Component3);

  function EventButtons() {
    _classCallCheck(this, EventButtons);

    return _possibleConstructorReturn(this, (EventButtons.__proto__ || Object.getPrototypeOf(EventButtons)).call(this));
  }

  _createClass(EventButtons, [{
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
            { href: '/view03.html' },
            'EDIT'
          )
        ),
        React.createElement(
          'button',
          null,
          React.createElement(
            'a',
            { href: '/view01.html' },
            'SHARE'
          )
        )
      );
    }
  }]);

  return EventButtons;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MyComponent, null), contentNode);
ReactDOM.render(React.createElement(EventInfo, null), contentNode2);
ReactDOM.render(React.createElement(EventButtons, null), contentNode3);