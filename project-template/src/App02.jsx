// This is a place holder for the initial application state.
const state = [


];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid' ],
    defaultDate: '2019-04-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
   
       ]
  });

  calendar.render();
});

let MyComponent  = React.createClass({
  getInitialState:function(){
    return {next:true,previous:false}
  },
    switch:function(word)
    {
    let previous,next;
    if(word == "previous"){previous = true;next = false;}
    else{next = true; previous = false;}
    return this.setState({next:next,previous:previous})
    },
    
    render:function(){
            return (
              <div>
                <div className= "container">
                <nav className="navbar navbar-light">
                <a className="navbar-brand"></a>
                <div id="next">
                  <button id="view"onClick={this.switch.bind(null,"next")} className={this.state.next}>Calendar</button>
                </div>
                    <a className="btn btn-primary" href="/view03.html" role="button">Create Event+</a>
                    <button type="button" className="btn btn-primary">My Account</button>
                    <div id="previous">
                    <button id="friends"onClick={this.switch.bind(null,"previous")} className={this.state.perivous}>Friends</button>            
                    </div>
                 <a className="btn btn-primary" href="/view01.html" role="button">Sign Out</a>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </nav>
                </div>
                {this.state.next?<Next />:null}
                {this.state.previous?<Previous/>:null}
                </div>
              )
            }
          })

 class Next extends React.Component {    
  constructor() {
    super();
  }
            render(){
            return (
                <div>
                   <div id="next">
                   <h1>Calendar View</h1> 
                   <center><div id='calendar'></div></center>
                  </div> 
              </div>
            );
          }
        }   

class Previous extends React.Component {    
 constructor() {
    super();
  }
            render(){
            return (
                <div>
                   <div id="friends">
                   <h1>Friends List</h1>                
                </div>
              </div>
            );
          }
        }     

        
        
// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);

