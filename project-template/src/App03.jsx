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
        <h1>Create Event</h1>
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
    <form>
      <label for="ename"><b>Event Name</b></label>
      <input type="text" placeholder="Enter Event Name" name="ename" />

      <label for="edate"><b>Event Date</b></label>
      <input type="date" placeholder="Enter Event Date" name="edate" />
        
      <label for="elocation"><b>Event Location</b></label>
      <input type="text" placeholder="Enter Event Location" name="elocation" />
     
      <label for="edescription"><b>Event Description</b></label>
      <input type="text" placeholder="Enter Event Description" name="edescription" />
     
      <label for="einvitelist"><b>Event Attendee List</b></label>
      <input type="text" placeholder="Enter Event Attendee List" name="einvitelist" />
     
      </form>
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
        <button><a href="/view05.html">Save</a></button>
        <button><a href="/view02.html">Cancel</a></button>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
ReactDOM.render(<EventInfo />, contentNode2);
ReactDOM.render(<EventButtons />, contentNode3);


