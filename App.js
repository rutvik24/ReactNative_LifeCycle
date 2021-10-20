import React from 'react';
import {Text} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log('constructor');
  }

  componentDidMount() {
    this.setState({
      message: 'i got changed',
    });
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return <Text style={{alignContent: 'center'}}>First Screen</Text>;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }

    console.log('shouldComponentUpdater');
    return false;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}
