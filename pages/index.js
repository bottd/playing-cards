import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { requestSocket } from '../actions/socketActions';
import ConnectForm from '../components/ConnectForm';
import './index.css';

class ChatOne extends Component {
  static async getInitialProps({ req }) {
    return {};
  }

  render() {
    return (
      <main>
        <ConnectForm/>
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
