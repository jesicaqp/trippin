// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById('contents');
var contentNode2 = document.getElementById('login');
var contentNode3 = document.getElementById('signup');

class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Login In</h1>
      </div>
    );
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    username:'',
    password:' '
    };
  }

  render() {
    return (
    <form>
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" onChange = {(event,newValue) => this.setState({username:newValue})}/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw"  onChange = {(event,newValue) => this.setState({password:newValue})}/>
        
      </form>
    );
  }
}

class SignUp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button onClick={(event) => this.handleClick(event)}><a href="/view02.html">Login</a></button>
        <button onClick={(event) => this.handleClick(event)}><a href="/view04.html">Sign Up</a></button>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
ReactDOM.render(<Login />, contentNode2);
ReactDOM.render(<SignUp />, contentNode3);

