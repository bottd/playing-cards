import React, { useState } from 'react';
import { connect } from 'react-redux';
import { requestSocket } from '../../actions/socketActions';
import { resetOwner, setOwner } from '../../actions/ownerActions';
import { updateUsername } from '../../actions/usernameActions';
import { updateRoomID } from '../../actions/roomIdActions';

function ConnectForm(props) {
  const [name, setName] = useState('');
  const [gameId, setGameId] = useState('');
  const [selected, setSelected] = useState('player');

  function changeSelected(newValue) {
    setSelected(newValue);
  }

  function handleChange(event, setter) {
    setter(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (selected === 'player' && name !== '' && gameId !== '') {
      props.resetOwner();
      props.updateRoomID(gameId);
    } else if (name !== '') {
      props.setOwner();
    }
    props.updateUsername(name);
    props.requestSocket();
    setName('');
    setGameId('');
  }

  return (
    <div className="ConnectForm">
      <div className="toggle-container">
        <button
          onClick={() => changeSelected('player')}
          className={`select-player ${selected === 'player' ? 'active' : ''}`}>
          Player
        </button>
        <button
          onClick={() => changeSelected('dealer')}
          className={`select-dealer ${selected === 'dealer' ? 'active' : ''}`}>
          Dealer
        </button>
      </div>
      {selected === 'player' ? (
        <form className="player-form">
          <input
            placeholder="Player Name"
            value={name}
            onChange={e => handleChange(e, setName)}
          />
          <input
            placeholder="Game ID"
            value={gameId}
            onChange={e => handleChange(e, setGameId)}
          />
          <button className="join-game" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      ) : (
        <form className="dealer-form">
          <input
            placeholder="Player Name"
            value={name}
            onChange={e => handleChange(e, setName)}
          />
          <button className="create-game" type="submit" onClick={handleSubmit}>
            Create Game
          </button>
        </form>
      )}
      <style jsx>{`
        .ConnectForm {
          background-color: #fff;
          box-sizing: border-box;
          height: 40%;
          width: 60%;
        }
        .toggle-container {
          width: 100%;
          display: flex;
          margin-bottom: 1%;
          height: 15%;
        }
        .select-player,
        .select-dealer {
          background-color: #fff;
          border: none;
          border-bottom: 4px solid transparent;
          font-size: 1.25em;
          width: 50%;
        }
        .create-game,
        .join-game {
          background-color: #fff;
          border: 1px solid #004489;
          font-size: 1.25em;
          width: 31%;
        }
        .active {
          border-bottom: 4px solid #004489;
        }
        input {
          font-size: 1.25em;
          margin: 0 0 1% 0;
          width: 30%;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  requestSocket: () => dispatch(requestSocket()),
  resetOwner: () => dispatch(resetOwner()),
  setOwner: () => dispatch(setOwner()),
  updateUsername: username => dispatch(updateUsername(username)),
  updateRoomID: id => dispatch(updateRoomID(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ConnectForm);
