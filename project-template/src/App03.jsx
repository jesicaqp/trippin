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
                      <form>
                        <div className="form-group">
                        <div className="row">
                            <label for="inputName">Event Name</label>
                            <input input type="name" className = "form-control" id="inputName" placeholder="Event Name" />
                          </div>
                        </div>
                        <div className="form-group">
                              <div className="row">
                                  <label for="inputName">Location</label>
                                  <input input type="name" className = "form-control" id="inputName" placeholder="Location
                                  " />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                  <label for="inputName">Event Name</label>
                                  <input input type="name" className = "form-control" id="inputName" placeholder="Description" />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                  <label for="inputName">Event Name</label>
                                  <input input type="name" className = "form-control" id="inputName" placeholder="Event Attendee List" />
                              </div>
                            </div>
                        <button type="submit" className="btn btn-info" onSubmit={this.handleEvent}>Submit</button>
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
                <button type="button" className="btn btn-info">Edit</button>
                <br></br>
                <br></br>
                <a className="btn btn-info" href="/view02.html" role="button">Calendar</a>
                </div>
             </div>   
          );
        }
      }
      

ReactDOM.render(<MyComponent />, contentNode);
