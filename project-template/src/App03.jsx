// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

const EventRow = (props) => (
  <ul id="data">
   <div className="row">Name:<li>{props.event.name}</li></div><br></br>
    <div className="row">Location:<li>{props.event.location}</li></div><br></br>
    <div className="row">Date:<li>{props.event.eventdate}</li></div><br></br>
    <div className="row">Description:<li>{props.event.description}</li></div><br></br>
    <div className="row">Attendees:<li>{props.event.attendees}</li></div><br></br>
    <br></br>
  </ul>
);

function EventTable(props) {
  const eventRows = props.events.map(event => (
    <EventRow key={event._id} event={event} />
  ));
  return (
    <div id="bordered-table">
    <ul>
      {eventRows}
      </ul>
    </div>
  );
}

let MyComponent  = React.createClass({
    getInitialState:function(){
      return {view:false,create:true}
    },
      switch:function(word)
      {
      let view, create;
      if(word == "view"){view = true;create = false;}
      else{create = true; view = false;}
      return this.setState({create:create,view:view})
      },
      
      render:function(){
        return (
          <div>
                <div id="buttons">
                  <button id="viewButton" onClick={this.switch.bind(null,"view")} className={this.state.view}>View Event</button>
                  <button id="createButton" onClick={this.switch.bind(null,"create")} className={this.state.create}>Create Event</button>
                  </div>
                  {this.state.view?<View />:null}
                  {this.state.create?<Create />:null}
            </div>
                )
              }
            })
  
  class Create extends React.Component {    
    constructor() {
      super();
      this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(e){
    e.preventDefault();
    let form = document.forms.event;
    const submitReq = {
        "name": form.name.value,
        "location": form.location.value,
        "eventdate": form.eventDate.value,
        "description" : form.desc.value,
        "attendees": form.attendee.value
      
    }
     fetch('/api/events', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submitReq),
    })

    .then(res => res.json())
    .then(json => {
     // console.log(json.success);
      if (json.success) {
      alert('Failed to add event.\n Error description: ' + json.msg);
      }
      else {
        alert('Event Saved');
      }
    });
  }
              render(){
              return (
                  <div>
                      <form id="create" name="event" onSubmit={this.handleEvent}>
                      <input type="text" id="name" placeholder="Event Name"/><br></br>
                      <input type="location" id="location" placeholder="Event Location"/><br></br>
                      <input type="text" id="eventDate" placeholder="Event Date"/><br></br>
                      <input type="description" id="desc" placeholder="Event Description"/><br></br>
                      <input type="attendeelist" id="attendee" placeholder="Event Attendee List"/><br></br>
                      <button id="save" type="submit">SAVE</button>
                  </form>
                </div>
              );
            }
          }
  
  class View extends React.Component {
    constructor() {
	     super();
	     //this.viewNewevent = this.viewNewevent.bind(this);
	     this.loadData = this.loadData.bind(this);
	     
	     this.state = {
	      events: [],
	     };
    
    }


    componentDidMount() {
    	this.loadData();
  	}

 
loadData(){
    let event = this.state.events;
    fetch("api/events")
      .then(res => {
        if (res.ok) {
          res.json().then( json => {
          	let events = [];
            json.records.forEach(event => {
              events.push(
                event
              )
            });
            this.setState({events: events})
          })
        }
      }).catch( err => {
        alert("There was a problem: " + err.message)
      });

  }
  

    render(){
        return (
        <div>
              <div id="view">
                <hr />
                <EventTable events={this.state.events} />
                <hr />
                <button id="edit">Edit</button><br></br>
                <button id="calendar"><a href="/view02.html">Calendar</a></button>
                </div>
             </div>   
          );
        }
      }

ReactDOM.render(<MyComponent />, contentNode);
