import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4001/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      console.log(res);
      const resJson = await res.json();
      console.log(resJson);
      if (res.status === 201) {
        setUsername("");
        setEmail("");
        setPassword("");
        setMessage("User created successfully");
      } else {
        setMessage("Email is already in use. Please Log In");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username"></label>
            <input
              value={username}
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              value={email}
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              value={password}
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Signup</button>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
