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

var EventRow = function EventRow(props) {
  return React.createElement(
    "ul",
    { className: "data" },
    React.createElement(
      "div",
      { className: "viewEvent" },
      "Name: ",
      props.event.name
    ),
    React.createElement("br", null),
    React.createElement(
      "div",
      { className: "viewEvent" },
      "Location: ",
      props.event.location
    ),
    React.createElement("br", null),
    React.createElement(
      "div",
      { className: "viewEvent" },
      "Date: ",
      props.event.eventdate
    ),
    React.createElement("br", null),
    React.createElement(
      "div",
      { className: "viewEvent" },
      "Description: ",
      props.event.description
    ),
    React.createElement("br", null),
    React.createElement(
      "div",
      { className: "viewEvent" },
      "Attendees: ",
      props.event.attendees
    ),
    React.createElement("br", null),
    React.createElement("br", null)
  );
};

function EventTable(props) {
  var eventRows = props.events.map(function (event) {
    return React.createElement(EventRow, { key: event._id, event: event });
  });
  return React.createElement(
    "div",
    { id: "bordered-table" },
    React.createElement(
      "ul",
      null,
      eventRows
    )
  );
}

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
        "name": form.inputName.value,
        "location": form.location.value,
        "eventdate": form.eventDate.value,
        "description": form.desc.value,
        "attendees": form.attendee.value

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
          alert('Event Saved');
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
          { className: "form-group", name: "event", onSubmit: this.handleEvent },
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "label",
                { "for": "inputName" },
                "Event Name"
              ),
              React.createElement("input", { type: "text", className: "form-control", id: "inputName", placeholder: "Event Name" }),
              React.createElement("br", null)
            )
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "label",
                { "for": "inputAddress" },
                "Location"
              ),
              React.createElement("input", { type: "text", className: "form-control", id: "location", placeholder: "Event Location" }),
              React.createElement("br", null)
            )
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "label",
                { "for": "inputName" },
                "Date"
              ),
              React.createElement("input", { type: "text", className: "form-control", id: "eventDate", placeholder: "MM/DD/YYYY" }),
              React.createElement("br", null)
            )
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "label",
                { "for": "desc" },
                "Description"
              ),
              React.createElement("input", { type: "name", className: "form-control", id: "desc", placeholder: "Description" })
            )
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "label",
                { "for": "attendee" },
                "Event Attendee List"
              ),
              React.createElement("input", { type: "name", className: "form-control", id: "attendee", placeholder: "Event Attendee List" })
            )
          ),
          React.createElement(
            "button",
            { className: "btn btn-info", type: "submit" },
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

    //this.viewNewevent = this.viewNewevent.bind(this);
    var _this2 = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));

    _this2.loadData = _this2.loadData.bind(_this2);

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

      var event = this.state.events;
      fetch("api/events").then(function (res) {
        if (res.ok) {
          res.json().then(function (json) {
            var events = [];
            json.records.forEach(function (event) {
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
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "view" },
          React.createElement("hr", null),
          React.createElement(EventTable, { events: this.state.events }),
          React.createElement("hr", null),
          React.createElement(
            "button",
            { className: "btn btn-info", type: "submit" },
            "Edit"
          ),
          React.createElement("br", null),
          React.createElement("br", null),
          React.createElement(
            "a",
            { className: "btn btn-info", href: "/view02.html", role: "button" },
            "Calendar"
          )
        )
      );
    }
  }]);

  return View;
}(React.Component);

var SearchBar = function (_React$Component3) {
  _inherits(SearchBar, _React$Component3);

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
              { className: "btn btn-info", href: "/view03.html", role: "button" },
              "Create Event"
            ),
            React.createElement(
              "a",
              { className: "btn btn-info", href: "/view02.html", role: "button" },
              "Calendar"
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
        ),
        React.createElement("br", null),
        React.createElement(
          "center",
          null,
          React.createElement(
            "h1",
            null,
            "Events"
          ),
          " "
        )
      );
    }
  }]);

  return SearchBar;
}(React.Component);

ReactDOM.render(React.createElement(MyComponent, null), contentNode);
ReactDOM.render(React.createElement(SearchBar, null), contentNode2);