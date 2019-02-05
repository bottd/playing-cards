import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { loadData } from '../actions';

class ChatOne extends Component {
  // fetch old messages data from the server
  static async getInitialProps({ req }) {
    const response = await fetch('http://localhost:3000/messages/chat1');
    const messages = await response.json();
    return { messages };
  }

  componentDidMount() {
    //this.subscribe();
  }

  componentDidUpdate() {
    //this.subscribe();
  }

  // close socket connection
  componentWillUnmount() {
    //this.props.socket.off('message.chat1', this.handleMessage);
    //this.props.socket.off('message.chat2', this.handleOtherMessage);
  }

  //this.props.socket.emit('message.chat1', message);
  render() {
    return (
      <main>
        <button onClick={this.props.loadData}>FETCH THINGS</button>
      </main>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  loadData: dispatch => dispatch(loadData()),
});
export default connect(
  null,
  mapDispatchToProps,
)(ChatOne);
