import React, { useState } from 'react';

export default function ConnectForm(props) {
  const [name, setName] = useState('');
  const [gameId, setGameId] = useState('');

  function handleChange(event, setter) {
    setter(event.target.value);
  }

  function handleSubmit() {
  }

  return (
    <div className="ConnectForm">
      <form>
        <input value={name} onChange={e => handleChange(e, setName)} />
        <input value={gameId} onChange={e => handleChange(e, setGameId)} />
        <button type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
