import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';

class ChatOne extends Component {
  // fetch old messages data from the server
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
export default connect(
  null,
  null,
)(ChatOne);
