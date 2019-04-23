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
                      <button id="signupButton"onClick={this.switch.bind(null,"signup")} className={this.state.signup}>Sign Up</button>
                      <button id="loginButton"onClick={this.switch.bind(null,"login")} className={this.state.login}>Login</button>
                     </div>
                      {this.state.signup?<Signup/>:null}
                      {this.state.login?<Login />:null}
                </div>
              )
            }
          })

class Signup extends React.Component {    
  constructor() {
    super();
  }
            render(){
            return (

              <form>
                <div className = "form-group">
                <label for = "inputName">Name</label>
                  <div className = "row">
                    <div className="col">
                      <input type="name" className = "form-control" id="inputName" placeholder=" First Name"/>
                   </div> 
                    <div className="col">
                     <input  type="name" className = "form-control" id="inputName" placeholder=" Last Name"/>
                    </div> 
                 </div>              
              </div>

                <div className = "form-group">  
                   <label for = "inputEmail">Username</label>
                    <input type="email" className = "form-control" id="inputEmail" placeholder=" Username"/>
                  </div>
              <div className = "form-group">
                <label for = "inputPassword">Password</label>
                <input type="password" className = "form-control" id="password"placeholder=" Password"/>
              </div>  
              <div className = "form-group">
                <label for = "inputPassword">Confirm Password</label>
                <input type="password" className= "form-control" id="password"placeholder=" Password"/>
              </div>  
              <a className="btn btn-info" href="/view03.html" role="button">Create Event</a>
            </form>

            );
          }
        }

class Login extends React.Component {
       constructor() {
       super();
  }
              render(){
              return (
                    
                        <form>
                        <div className = "form-group">
                          <label for = "inputEmail">Username</label>
                          <input type="email" className = "form-control" id="inputEmail" placeholder=" Username"/>
                        </div>
                        <div className = "form-group">
                          <label for = "inputPassword">Password</label>
                          <input type="password" className = "form-control" id="password"placeholder=" Password"/>
                        </div>  
                        <a className="btn btn-info" href="/view02.html" role="button">Login</a>
                      </form>
                  );
                }
              }

ReactDOM.render(<MyComponent />, contentNode);
