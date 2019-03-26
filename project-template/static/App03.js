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

    return _possibleConstructorReturn(this, (Create.__proto__ || Object.getPrototypeOf(Create)).call(this));
  }

  _createClass(Create, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "create" },
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
            { id: "save" },
            React.createElement(
              "a",
              { href: "/view02.html" },
              "SAVE"
            )
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

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "view" },
          React.createElement(
            "label",
            { "for": "edate" },
            React.createElement(
              "h3",
              null,
              React.createElement(
                "b",
                null,
                "Event Date"
              )
            )
          ),
          React.createElement(
            "text",
            null,
            "03/25/2019 to 04/02/2019"
          ),
          React.createElement(
            "label",
            { "for": "elocation" },
            React.createElement(
              "h3",
              null,
              React.createElement(
                "b",
                null,
                "Event Location"
              )
            )
          ),
          React.createElement(
            "text",
            null,
            "This event will take place in Cape Cod, Massachusetts."
          ),
          React.createElement(
            "label",
            { "for": "edescritpion" },
            React.createElement(
              "h3",
              null,
              React.createElement(
                "b",
                null,
                "Event Description"
              )
            )
          ),
          React.createElement(
            "text",
            null,
            "A week of fun and relaxation for students before the second round of midterms. We will be celebrating the start of spring and the start of warmer temperatures and sunny skies. "
          ),
          React.createElement(
            "label",
            { "for": "einvitelist" },
            React.createElement(
              "h3",
              null,
              React.createElement(
                "b",
                null,
                "Event Attendee List"
              )
            )
          ),
          React.createElement(
            "text",
            null,
            "Jesica Quinones, Aibhlin Fitzpatrick, Arushi Ahmed."
          ),
          React.createElement("br", null),
          React.createElement(
            "button",
            { id: "edit" },
            React.createElement(
              "a",
              { href: "/view03.html" },
              "Edit"
            )
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