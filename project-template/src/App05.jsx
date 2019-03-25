// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
var contentNode2 = document.getElementById('eventinfo');
var contentNode3 = document.getElementById('eventbuttons');

class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Event Name: Trip to the Cape</h1>
      </div>
    );
  }
}

class EventInfo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    <div>
      
      <label for="edate"><h3><b>Event Date</b></h3></label>
      <text>03/25/2019 to 04/02/2019</text>
        
      <label for="elocation"><h3><b>Event Location</b></h3></label>
      <text>This event will take place in Cape Cod, Massachusetts.</text>
     
      <text>A week of fun and relaxation for students before the second round of midterms. We will be celebrating the start of spring and the start of warmer temperatures and sunny skies. </text>

      <label for="einvitelist"><h3><b>Event Attendee List</b></h3></label>
      <text>Jesica Quinones, Aibhilin Fitzpatrick, Arushi Ahmed.</text> 
      </div>
    );
  }
}

class EventButtons extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button><a href="/view03.html">EDIT</a></button>
        <button><a href="/view01.html">SHARE</a></button>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
ReactDOM.render(<EventInfo />, contentNode2);
ReactDOM.render(<EventButtons />, contentNode3);


