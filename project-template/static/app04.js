"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var friendRow = function friendRow(props) {
  return React.createElement(
    "ul",
    { id: "data" },
    React.createElement(
      "div",
      { className: "row" },
      "Name:",
      React.createElement(
        "li",
        null,
        props.friend.name
      )
    ),
    React.createElement("br", null),
    React.createElement(
      "div",
      { className: "row" },
      "Location:",
      React.createElement(
        "li",
        null,
        props.friend.email
      )
    ),
    React.createElement("br", null),
    React.createElement(
      "div",
      { className: "row" },
      "Location:",
      React.createElement(
        "li",
        null,
        props.friend.username
      )
    ),
    React.createElement("br", null),
    React.createElement("br", null)
  );
};

function FriendTable(props) {
  var friendRows = props.friends.map(function (friend) {
    return React.createElement("friendRow", { key: friend._id, friend: friend });
  });
  return React.createElement(
    "div",
    { id: "bordered-table" },
    React.createElement(
      "ul",
      null,
      friendRow
    )
  );
}

var MyComponent = React.createClass({
  displayName: "MyComponent",

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
          "button",
          { id: "loginButton", onClick: this.switch.bind(null, "login"), className: this.state.login },
          "Profile"
        ),
        React.createElement(
          "button",
          { id: "signupButton", onClick: this.switch.bind(null, "signup"), className: this.state.signup },
          "Friends"
        )
      ),
      this.state.signup ? React.createElement(FriendsList, null) : null,
      this.state.login ? React.createElement(Profile, null) : null
    );
  }
});

var FriendsList = function (_React$Component) {
  _inherits(FriendsList, _React$Component);

  function FriendsList() {
    _classCallCheck(this, FriendsList);

    var _this = _possibleConstructorReturn(this, (FriendsList.__proto__ || Object.getPrototypeOf(FriendsList)).call(this));

    _this.loadData = _this.loadData.bind(_this);

    _this.state = {
      friends: []
    };
    return _this;
  }

  _createClass(FriendsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      var friend = this.state.friends;
      fetch("api/username").then(function (res) {
        if (res.ok) {
          res.json().then(function (json) {
            var friends = [];
            json.friends.forEach(function (friend) {
              friends.push(friend);
            });
            _this2.setState({ friends: friends });
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
        { id: "view" },
        React.createElement("hr", null),
        React.createElement(FriendTable, { friends: this.state.friends }),
        React.createElement("hr", null),
        React.createElement(
          "button",
          { type: "button", className: "btn btn-info" },
          "Edit"
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "a",
          { className: "btn btn-info", href: "/view02.html", role: "button" },
          "Calendar"
        )
      );
    }
  }]);

  return FriendsList;
}(React.Component);

var Profile = function (_React$Component2) {
  _inherits(Profile, _React$Component2);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Profile"
      );
    }
  }]);

  return Profile;
}(React.Component);

ReactDOM.render(React.createElement(MyComponent, null), contentNode);