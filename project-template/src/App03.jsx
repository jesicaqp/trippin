// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
var contentNode2 = document.getElementById("search");

const EventRow = (props) => (
  <ul className="data">
    <div className="viewEvent">Name: {props.event.name}</div><br></br>
    <div className="viewEvent">Location: {props.event.location}</div><br></br>
    <div className="viewEvent">Date: {props.event.eventdate}</div><br></br>
    <div className="viewEvent">Description: {props.event.description}</div><br></br>
    <div className="viewEvent">Attendees: {props.event.attendees}</div><br></br>
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
        "name": form.inputName.value,
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
                <form className="form-group" name="event" onSubmit={this.handleEvent}>                        
                <div className="form-group">
                  <div className="row">
                      <label for="inputName">Event Name</label>
                      <input type="text" className="form-control" id="inputName" placeholder="Event Name"/><br></br>
                    </div>
                  </div>
                 <div className="form-group">
                       <div className="row">
                           <label for="inputAddress">Location</label>
                            <input type="text" className="form-control" id="location" placeholder="Event Location"/><br></br>
                       </div>
                     </div>
                     <div className="form-group">
                       <div className="row">
                           <label for="inputName">Date</label>
                           <input type="text" className="form-control" id="eventDate" placeholder="MM/DD/YYYY"/><br></br>
                       </div>
                     </div>
                     <div className="form-group">
                       <div className="row">
                           <label for="desc">Description</label>
                           <input type="name" className = "form-control" id="desc" placeholder="Description" />
                       </div>
                     </div>
                     <div className="form-group">
                       <div className="row">
                           <label for="attendee">Event Attendee List</label>
                           <input type="name" className = "form-control" id="attendee" placeholder="Event Attendee List" />
                       </div>
                     </div>
                  <button className="btn btn-info" type="submit">SAVE</button>
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
                <button className="btn btn-info" type="submit">Edit</button>
                <br></br>
                <br></br>
                <a className="btn btn-info" href="/view02.html" role="button">Calendar</a>
                </div>
             </div>   
          );
        }
      }
       
class SearchBar extends React.Component {    
    constructor() {
      super();
                    
    }
          
                render(){
                  return (
                    <div>
                      <div className= "container">
                        <nav className="navbar navbar-light">
                          <a className="navbar-brand"></a>
                          <a className="btn btn-info" href="/view03.html" role="button">Create Event</a>
                            <a className="btn btn-info" href="/view02.html" role="button">Calendar</a>
                            <a className="btn btn-info" href="/view04.html" role="button">Profile</a>
                            <a className="btn btn-info" href="/view01.html" role="button">Sign Out</a>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </nav>
                      </div>
                <br></br>
                <center><h1>Events</h1> </center>
                  </div>
                    
                    );
                }
          }
      

ReactDOM.render(<MyComponent />, contentNode);
ReactDOM.render(<SearchBar />, contentNode2);
