
// This is a place holder for the initial application state.
const state = [


];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
var contentNode2 = document.getElementById("event");


let Calender  = React.createClass({
  getInitialState:function(){
    return {next:false,perivous:true}
  },
    switch:function(word)
    {
    let perivous,next;
    if(word == "perivous"){perivous = true;next = false;}
    else{next = true; perivous = false;}
    return this.setState({next:next,perivous:perivous})
    },
    
    render:function(){
            return (
              <div>
                    <div id="buttons">
                      <button id="signupButton"onClick={this.switch.bind(null,"perivous")} className={this.state.perivous}>January</button>
                      <button id="loginButton"onClick={this.switch.bind(null,"next")} className={this.state.next}>Febuary</button>
                     </div>
                      {this.state.perivous?<Perivous/>:null}
                      {this.state.next?<Next />:null}
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

 class Next extends React.Component {    
  constructor() {
    super();
  }
            render(){
            return (
                <div>
                   <div id="next">
                      <img src="https://i.pinimg.com/originals/e7/70/0c/e7700c74cda27fcce7b1f6ebf971e455.jpg"></img>
                  </div>
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
                      <img src="https://i.pinimg.com/originals/84/9b/bf/849bbfa252a24fb4734242a23a957ee8.jpg"></img>
                </div>
              </div>
            );
          }
        }     


// This renders the JSX component inside the content node:
ReactDOM.render(<Calender />, contentNode);
ReactDOM.render(<MyComponent />, contentNode2);