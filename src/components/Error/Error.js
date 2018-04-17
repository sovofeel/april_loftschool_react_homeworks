import React from 'react';

export const Error = ({ error }) =>
  (error && <p className="error">Неверный пароль и/или почта.</p>) || null;

export default Error;
