import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:"",
    };
  }

    render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={(e) => this.setState({message:e.target.value})}
        />
        <span>{this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}


export default TwitterMessage;