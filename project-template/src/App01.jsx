let Parent  = React.createClass({
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
                      <p id="signupButton" onClick={this.switch.bind(null,"signup")} className={this.state.signup}>Sign In</p>
                      <p id="loginButton" onClick={this.switch.bind(null,"login")} className={this.state.login}> Login</p>
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
                <div>
                   <div id="signup">
                   <input type="text" id="name" placeholder="username"/>
                    <input type="email" id="email" placeholder="Email"/>
                    <input type="password" id="password" placeholder="Password"/>
                    <input type="password" id="confirm" placeholder="Confirm Password"/>
                    <button id="send"><a href="/view02.html">Sign Up</a></button>
                </div>
              </div>
            )
          }
        }

class Login extends React.Component {
       constructor() {
       super();
  }
              render(){
              return (
                    <div>
                      <div id="login">
                      <input type="email" id="email" placeholder="Email"/>
                      <input type="password" id="password" placeholder="Password"/>
                      <button id="send"><a href="/view02.html">Login</a></button>
                      </div>
                    </div>
                  )
                }
              }

ReactDOM.render(<Parent/>,document.getElementById("contents"))