import React, { useState } from 'react';
import './ConnectForm.css';

export default function ConnectForm(props) {
  const [name, setName] = useState('');
  const [gameId, setGameId] = useState('');
  const [selected, setSelected] = useState('player');

  function changeSelected(newValue) {
    setSelected(newValue);
  }

  function handleChange(event, setter) {
    setter(event.target.value);
  }

  function handleSubmit() {}

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
          <input value={name} onChange={e => handleChange(e, setName)} />
          <input value={gameId} onChange={e => handleChange(e, setGameId)} />
          <button type="submit" onClick={handleSubmit} />
        </form>
      ) : (
        <form className="dealer-form">
          <input value={name} onChange={e => handleChange(e, setName)} />
          <button className="create-game">Create Game</button>
        </form>
      )}
    </div>
  );
}
