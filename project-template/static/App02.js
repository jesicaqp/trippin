'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['interaction', 'dayGrid'],
    defaultDate: '2019-04-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: []
  });

  calendar.render();
});

var MyComponent = React.createClass({
  displayName: 'MyComponent',

  getInitialState: function getInitialState() {
    return { next: true, previous: false };
  },
  switch: function _switch(word) {
    var previous = void 0,
        next = void 0;
    if (word == "previous") {
      previous = true;next = false;
    } else {
      next = true;previous = false;
    }
    return this.setState({ next: next, previous: previous });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'nav',
          { className: 'navbar navbar-light' },
          React.createElement('a', { className: 'navbar-brand' }),
          React.createElement(
            'div',
            { id: 'next' },
            React.createElement(
              'button',
              { id: 'view', onClick: this.switch.bind(null, "next"), className: this.state.next },
              'Calendar'
            )
          ),
          React.createElement(
            'a',
            { className: 'btn btn-primary', href: '/view03.html', role: 'button' },
            'Create Event+'
          ),
          React.createElement(
            'button',
            { type: 'button', className: 'btn btn-primary' },
            'My Account'
          ),
          React.createElement(
            'div',
            { id: 'previous' },
            React.createElement(
              'button',
              { id: 'friends', onClick: this.switch.bind(null, "previous"), className: this.state.perivous },
              'Friends'
            )
          ),
          React.createElement(
            'a',
            { className: 'btn btn-primary', href: '/view01.html', role: 'button' },
            'Sign Out'
          ),
          React.createElement('input', { 'class': 'form-control mr-sm-2', type: 'search', placeholder: 'Search', 'aria-label': 'Search' }),
          React.createElement(
            'button',
            { 'class': 'btn btn-outline-success my-2 my-sm-0', type: 'submit' },
            'Search'
          )
        )
      ),
      this.state.next ? React.createElement(Next, null) : null,
      this.state.previous ? React.createElement(Previous, null) : null
    );
  }
});

var Next = function (_React$Component) {
  _inherits(Next, _React$Component);

  function Next() {
    _classCallCheck(this, Next);

    return _possibleConstructorReturn(this, (Next.__proto__ || Object.getPrototypeOf(Next)).call(this));
  }

  _createClass(Next, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { id: 'next' },
          React.createElement(
            'h1',
            null,
            'Calendar View'
          ),
          React.createElement(
            'center',
            null,
            React.createElement('div', { id: 'calendar' })
          )
        )
      );
    }
  }]);

  return Next;
}(React.Component);

var Previous = function (_React$Component2) {
  _inherits(Previous, _React$Component2);

  function Previous() {
    _classCallCheck(this, Previous);

    return _possibleConstructorReturn(this, (Previous.__proto__ || Object.getPrototypeOf(Previous)).call(this));
  }

  _createClass(Previous, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { id: 'friends' },
          React.createElement(
            'h1',
            null,
            'Friends List'
          )
        )
      );
    }
  }]);

  return Previous;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MyComponent, null), contentNode);