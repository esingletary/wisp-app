import React from 'react';

class Welcome extends React.Component<{name: string}> {
  render() {
    return <h1>Hello there {this.props.name}</h1>
  }
}

export default Welcome;