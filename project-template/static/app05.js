"use strict";

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
//var contentNode2 = document.getElementById('eventinfo');
//var contentNode3 = document.getElementById('eventbuttons');
//signup = view, login = create

var Dropdown = React.createClass({
  displayName: "Dropdown",

  getInitialState: function getInitialState() {
    return {
      listVisible: false
    };
  },

  select: function select(item) {
    this.props.selected = item;
  },

  show: function show() {
    this.setState({ listVisible: true });
    document.addEventListener("click", this.hide);
  },

  hide: function hide() {
    this.setState({ listVisible: false });
    document.removeEventListener("click", this.hide);
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "dropdown-container" + (this.state.listVisible ? " show" : "") },
      React.createElement(
        "div",
        { className: "dropdown-display" + (this.state.listVisible ? " clicked" : ""), onClick: this.show },
        React.createElement(
          "span",
          { style: { color: this.props.selected.hex } },
          this.props.selected.name
        ),
        React.createElement("i", { className: "fa fa-angle-down" })
      ),
      React.createElement(
        "div",
        { className: "dropdown-list" },
        React.createElement(
          "div",
          null,
          this.renderListItems()
        )
      )
    );
  },

  renderListItems: function renderListItems() {
    var items = [];
    for (var i = 0; i < this.props.list.length; i++) {
      var item = this.props.list[i];
      items.push(React.createElement(
        "div",
        { onClick: this.select.bind(null, item) },
        React.createElement(
          "span",
          { style: { color: item.hex } },
          item.name
        )
      ));
    }
    return items;
  }
});

var colours = [{
  name: "Red",
  hex: "#F21B1B"
}, {
  name: "Blue",
  hex: "#1B66F2"
}, {
  name: "Green",
  hex: "#07BA16"
}];

React.render(React.createElement(Dropdown, { list: colours, selected: colours[0] }), contentNode);