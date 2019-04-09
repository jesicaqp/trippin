"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
//var contentNode2 = document.getElementById('eventinfo');
//var contentNode3 = document.getElementById('eventbuttons');
//signup = view, login = create

var MyComponent = React.createClass({
  displayName: "MyComponent",

  getInitialState: function getInitialState() {
    return { view: false, create: true };
  },
  switch: function _switch(word) {
    var view = void 0,
        create = void 0;
    if (word == "view") {
      view = true;create = false;
    } else {
      create = true;view = false;
    }
    return this.setState({ create: create, view: view });
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
          { id: "viewButton", onClick: this.switch.bind(null, "view"), className: this.state.view },
          "View Event"
        ),
        React.createElement(
          "button",
          { id: "createButton", onClick: this.switch.bind(null, "create"), className: this.state.create },
          "Create Event"
        )
      ),
      this.state.view ? React.createElement(View, null) : null,
      this.state.create ? React.createElement(Create, null) : null
    );
  }
});

var Create = function (_React$Component) {
  _inherits(Create, _React$Component);

  function Create() {
    _classCallCheck(this, Create);

    var _this = _possibleConstructorReturn(this, (Create.__proto__ || Object.getPrototypeOf(Create)).call(this));

    _this.handleEvent = _this.handleEvent.bind(_this);
    return _this;
  }

  _createClass(Create, [{
    key: "handleEvent",
    value: function handleEvent(e) {
      e.preventDefault();
      var form = document.forms.event;
      var submitReq = {
        "name": form.name.value,
        "location": form.location.value,
        "date": form.date.value,
        "description": form.desc.value,
        "attendees": form.desc.value

      };
      fetch('/api/events', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitReq)
      }).then(function (res) {
        return res.json();
      }).then(function (json) {
        // console.log(json.success);
        if (json.success) {
          alert('Failed to add event.\n Error description: ' + json.msg);
        } else {
          console.log(json);
          alert(json.msg);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { id: "create", name: "event", onSubmit: this.handleEvent },
          React.createElement("input", { type: "text", id: "name", placeholder: "Event Name" }),
          React.createElement("br", null),
          React.createElement("input", { type: "location", id: "location", placeholder: "Event Location" }),
          React.createElement("br", null),
          React.createElement("input", { type: "date", id: "date", placeholder: "Event Date" }),
          React.createElement("br", null),
          React.createElement("input", { type: "description", id: "desc", placeholder: "Event Description" }),
          React.createElement("br", null),
          React.createElement("input", { type: "attendeelist", id: "desc", placeholder: "Event Attendee List" }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { id: "save", type: "submit" },
            "SAVE"
          )
        )
      );
    }
  }]);

  return Create;
}(React.Component);

var View = function (_React$Component2) {
  _inherits(View, _React$Component2);

  function View() {
    _classCallCheck(this, View);

    var _this2 = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));

    _this2.viewNewevent = _this2.viewNewevent.bind(_this2);

    _this2.state = {
      events: []
    };
    return _this2;
  }

  _createClass(View, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      var event = this.state.event;
      fetch("api/events/" + event.toString()).then(function (res) {
        if (res.ok) {
          res.json().then(function (json) {
            var events = [];
            json.events.forEach(function (video) {
              events.push(event);
            });
            _this3.setState({ events: events });
          });
        }
      }).catch(function (err) {
        alert("There was a problem: " + err.message);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var eventForm = React.createElement(CMyComponent, { event: this.state.event });
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "view" },
          eventForm,
          React.createElement(
            "button",
            { id: "edit" },
            "Edit"
          ),
          React.createElement("br", null),
          React.createElement(
            "button",
            { id: "calendar" },
            React.createElement(
              "a",
              { href: "/view02.html" },
              "Calendar"
            )
          )
        )
      );
    }
  }]);

  return View;
}(React.Component);

ReactDOM.render(React.createElement(MyComponent, null), contentNode);