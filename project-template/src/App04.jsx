// This is a place holder for the initial application state.
const state = [


];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
var contentNode2 = document.getElementById("event");


let Calender  = React.createClass({
  getInitialState:function(){
    return {next:false,previous:true}
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
                    <div id="buttons">
                      <button id="signupButton"onClick={this.switch.bind(null,"previous")} className={this.state.perivous}>Previous Month</button>
                      <button id="loginButton"onClick={this.switch.bind(null,"next")} className={this.state.next}>Next Month</button>
                     </div>
                      {this.state.previous?<Previous/>:null}
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
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="nav navbar-nav">
             <button type="button" class="btn btn-info"><a href="/view03.html">Create Event+</a></button>
             <button type="button" class="btn btn-info"><a href="#">My Account</a></button>
             <button type="button" class="btn btn-info"><a href="#">Friends</a></button>
             <button type="button" class="btn btn-info"><a href="/view01.html">Sign Out</a></button>
             <input type="text" class="form-control" placeholder="Search" name="search" />
            </div>
          </div>
      </nav>
  
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

class Previous extends React.Component {    
 constructor() {
    super();
  }
            render(){
            return (
                <div>
                   <div id="previous">
                      <center> <img src="https://i.pinimg.com/originals/84/9b/bf/849bbfa252a24fb4734242a23a957ee8.jpg" width= "700" height="500"></img></center>
                </div>
              </div>
            );
          }
        }     


// This renders the JSX component inside the content node:
ReactDOM.render(<Calender />, contentNode);
ReactDOM.render(<MyComponent />, contentNode2);
  