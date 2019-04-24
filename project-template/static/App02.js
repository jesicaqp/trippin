'use strict';

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
    eventLimit: true // allow "more" link when too many events
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
            'a',
            { className: 'btn btn-info', href: '/view02.html', role: 'button' },
            'Calendar'
          ),
          React.createElement(
            'a',
            { className: 'btn btn-info', href: '/view03.html', role: 'button' },
            'Create Event'
          ),
          React.createElement(
            'a',
            { className: 'btn btn-info', href: '/view04.html', role: 'button' },
            'Profile'
          ),
          React.createElement(
            'a',
            { className: 'btn btn-info', href: '/view01.html', role: 'button' },
            'Sign Out'
          ),
          React.createElement(
            'form',
            { className: 'form-inline' },
            React.createElement('input', { className: 'form-control mr-sm-2', type: 'search', placeholder: 'Search', 'aria-label': 'Search' }),
            React.createElement(
              'button',
              { className: 'btn btn-outline-success my-2 my-sm-0', type: 'submit' },
              'Search'
            )
          )
        )
      ),
      React.createElement('br', null),
      React.createElement(
        'center',
        null,
        React.createElement(
          'h1',
          null,
          'Calendar View'
        ),
        ' '
      ),
      React.createElement(
        'center',
        null,
        React.createElement('div', { id: 'calendar' })
      )
    );
  }
});

// This renders the JSX component inside the content node:
ReactDOM.render(React.createElement(MyComponent, null), contentNode);