// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
var contentNode2 = document.getElementById("search");

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

class SearchBar extends React.Component {    
  constructor() {
    super();
          
  }

      render(){
        return (
          <div>
            <div className= "container">
              <nav className="navbar navbar-light">
                <a className="navbar-brand"></a>
                  <a className="btn btn-info" href="/view02.html" role="button">Calendar</a>
                  <a className="btn btn-info" href="/view03.html" role="button">Create Event</a>
                  <a className="btn btn-info" href="/view04.html" role="button">Profile</a>
                  <a className="btn btn-info" href="/view01.html" role="button">Sign Out</a>
              <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              </nav>
            </div>
        </div>
          
          );
      }
}

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
ReactDOM.render(<SearchBar />, contentNode2);