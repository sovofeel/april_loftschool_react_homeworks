import React from "react";

export default ({email, password, onChange, onClick}) => (
  <div>
    <input name="email" value={email} placeholder="Email" onChange={onChange} />
    <input
      name="password"
      type="password"
      value={password}
      placeholder="Password"
      onChange={onChange}
    />
    <button onClick={onClick}>Submit</button>
  </div>
)
