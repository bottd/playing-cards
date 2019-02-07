import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { requestSocket } from '../actions/socketActions';

class ChatOne extends Component {
  static async getInitialProps({ req }) {
    return {};
  }

  render() {
    return (
      <main>
        <h1>Hello World</h1>
      </main>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  requestSocket: () => dispatch(requestSocket()),
});
export default connect(
  null,
  mapDispatchToProps,
)(ChatOne);
