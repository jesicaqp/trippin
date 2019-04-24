// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

const friendRow = (props) => (
  <ul id="data">
    <div className="row">Name:<li>{props.friend.name}</li></div><br></br>
    <div className="row">Location:<li>{props.friend.email}</li></div><br></br>
    <div className="row">Location:<li>{props.friend.username}</li></div><br></br>
    <br></br>
  </ul>
);

function FriendTable(props) {
  const friendRows = props.friends.map(friend => (
    <friendRow key={friend._id} friend={friend} />
  ));
  return (
    <div id="bordered-table">
    <ul>
      {friendRow}
      </ul>
    </div>
  );
}

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
    this.loadData = this.loadData.bind(this);
	     
    this.state = {
     friends: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }


loadData(){
  let friend = this.state.friends;
  fetch("api/username")
    .then(res => {
      if (res.ok) {
        res.json().then( json => {
          let friends = [];
          json.friends.forEach(friend => {
            friends.push(
              friend
            )
          });
          this.setState({friends: friends})
        })
      }
    }).catch( err => {
      alert("There was a problem: " + err.message)
    });

}
            render(){
            return (
              <div id="view">
              <hr />
              <FriendTable friends={this.state.friends} />
              <hr />
              <button type="button" className="btn btn-info">Edit</button>
              <br></br>
              <br></br>
              <a className="btn btn-info" href="/view02.html" role="button">Calendar</a>
              </div> 

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