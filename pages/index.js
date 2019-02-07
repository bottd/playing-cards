import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { requestSocket } from '../actions/socketActions';
import ConnectForm from '../components/ConnectForm';

class ChatOne extends Component {
  static async getInitialProps({ req }) {
    return {};
  }

  render() {
    return (
      <main>
        <ConnectForm />
        <style jsx>
          {`
            main {
              background-color: #007328;
              background-image: url('https://www.transparenttextures.com/patterns/felt.png');
              background-color: green;
              margin: 0;
              height: 100vh;
              width: 100vw;
            }
          `}
        </style>
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
