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
                <center><h1>Calendar View</h1> </center>
                <center><div id='calendar'></div></center>
                </div>
              )
            }
          })
          
// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);

