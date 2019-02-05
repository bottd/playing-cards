import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { loadData } from '../actions';

class ChatOne extends Component {
  // fetch old messages data from the server
  static async getInitialProps({ req }) {
    return {};
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
        <h1>Hello World</h1>
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
