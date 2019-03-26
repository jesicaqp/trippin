// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
//var contentNode2 = document.getElementById('eventinfo');
//var contentNode3 = document.getElementById('eventbuttons');
//signup = view, login = create
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
                        <button id="viewButton"onClick={this.switch.bind(null,"view")} className={this.state.view}>View Event</button>
                        <button id="createButton"onClick={this.switch.bind(null,"create")} className={this.state.create}>Create Event</button>
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
    }
              render(){
              return (
                  <div>
                     <div id="create">
                      <input type="text" id="name" placeholder="Event Name"/><br></br>
                      <input type="location" id="location" placeholder="Event Location"/><br></br>
                      <input type="date" id="date" placeholder="Event Date"/><br></br>
                      <input type="description" id="desc" placeholder="Event Description"/><br></br>
                      <input type="attendeelist" id="desc" placeholder="Event Attendee List"/><br></br>
                      <button id="save"><a href="/view02.html">SAVE</a></button>
                  </div>
                </div>
              );
            }
          }
  
  class View extends React.Component {
         constructor() {
         super();
    }
                render(){
                return (
                      <div>
                        <div id="view">
                         
                          <label for="edate"><h3><b>Event Date</b></h3></label>
                          <text>03/25/2019 to 04/02/2019</text>
                          <label for="elocation"><h3><b>Event Location</b></h3></label>
                          <text>This event will take place in Cape Cod, Massachusetts.</text>
                          <label for="edescritpion"><h3><b>Event Description</b></h3></label>
                          <text>A week of fun and relaxation for students before the second round of midterms. We will be celebrating the start of spring and the start of warmer temperatures and sunny skies. </text>
                          <label for="einvitelist"><h3><b>Event Attendee List</b></h3></label>
                          <text>Jesica Quinones, Aibhlin Fitzpatrick, Arushi Ahmed.</text> 
                          <br></br>
                          <button id="edit"><a href="/view03.html">Edit</a></button><br></br>
                          <button id="calendar"><a href="/view02.html">Calendar</a></button>
                        </div>
                      </div>
                    );
                  }
                }
  
  ReactDOM.render(<MyComponent />, contentNode);