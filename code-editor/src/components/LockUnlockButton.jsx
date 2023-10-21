// LockUnlockButton.js
import React from 'react';

const LockUnlockButton = ({ locked, onClick }) => (
  <button onClick={onClick}>{locked ? 'Unlock' : 'Lock'}</button>
);

export default LockUnlockButton;
