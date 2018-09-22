
import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       username:"",
      password:""
    };
  }

  render() {
    return (
      <form onSubmit ={(e) =>{ e.preventDefault()
        
      if(this.state.username !=="" && this.state.password!=="")
       return this.props.onSubmit()
      } }>
        <div>
          <label>
            Username
            <input value={this.state.username} 
            onChange={(e) => this.setState({
              username:e.target.value
            })}
            id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
             <input value={this.state.password}
             onChange={(e) => this.setState({
               password:e.target.value
             })}
            id="test-password" type="password" />
          </label>
        </div>
        <div>
          <button onClick ={() => {
 if(this.state.username !=="" && this.state.password!=="")
    return this.props.onSubmit()
          }}
          type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;