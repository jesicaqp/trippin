
// This is a place holder for the initial application state.
const state = [


];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
var contentNode2 = document.getElementById("event");


let Calender = React.createClass({
  getInitialState:function(){
    return {Feb:false,Jan:true}
  },
    switch:function(word)
    {
    let Jan,Feb;
    if(word == "Jan"){Jan = true; Feb = false;}
    else{Feb = true; Jan = false;}
    return this.setState({Feb:Feb,Jan:Jan})
    },
    
    render:function(){
            return (
              <div>
                    <div id="buttons">
                      <button id="perivous"onClick={this.switch.bind(null,"perivous")} className={this.state.Jan}>Previous Month</button>
                      <button id="next"onClick={this.switch.bind(null,"next")} className={this.state.Feb}>Next Month</button>
                     </div>
                      {this.state.Jan?<Perivous />:null}
                      {this.state.Feb?<Next />:null}
                </div>
              )
            }
          })


class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button type="button" class="btn btn-primary"><a href="/view03.html">Create Event+</a></button>
       <center><h1>Calendar View</h1></center> 
      </div>
  
    );
  }
}

class Perivous extends React.Component {    
 constructor() {
    super();
  }
            render(){
            return (
                <div>
                   <div id="perivous">
                     <center> <img src="https://i.pinimg.com/originals/84/9b/bf/849bbfa252a24fb4734242a23a957ee8.jpg" width= "700" height="500"></img></center>
                </div>
              </div>
            );
          }
        } 

 class Next extends React.Component {    
  constructor() {
    super();
  }
            render(){
            return (
                <div>
                   <div id="next">
                     <center> <img src="https://i.pinimg.com/originals/e7/70/0c/e7700c74cda27fcce7b1f6ebf971e455.jpg" width="700" height="500"></img></center>
                </div>
              </div>
            );
          }
        }       


// This renders the JSX component inside the content node:
ReactDOM.render(<Calender />, contentNode);
ReactDOM.render(<MyComponent />, contentNode2);