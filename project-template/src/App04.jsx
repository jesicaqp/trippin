// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

let MyComponent  = React.createClass({
  getInitialState:function(){
    return {signup:false,login:true}
  },
    switch:function(word)
    {
    let signup,login;
    if(word == "signup"){signup = true;login = false;}
    else{login = true; signup = false;}
    return this.setState({login:login,signup:signup})
    },
    
    render:function(){
            return (
              <div>
                    <div id="buttons">
                       <button id="loginButton"onClick={this.switch.bind(null,"login")} className={this.state.login}>Profile</button>
                      <button id="signupButton"onClick={this.switch.bind(null,"signup")} className={this.state.signup}>Friends</button>
                     </div>
                      {this.state.signup?<FriendsList/>:null}
                      {this.state.login?<Profile />:null}
                </div>
              )
            }
          })

class FriendsList extends React.Component {    
  constructor() {
    super();

  }

            render(){
            return (
              <div>Friends</div>

            );
          }
        }

class Profile extends React.Component {
       constructor() {
       super();
  }
              render(){
              return (
                    
                    <div>Profile</div>
                  );
                }
              }

ReactDOM.render(<MyComponent />, contentNode);