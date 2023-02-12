import { useState } from "react";

export function User ()
{
    const [message, setMessage] = useState("Welcome to Functions")
    return (
      <div>
        <h2>{message}Jai Sriram</h2>
            <button onClick={() =>
            {
                setMessage("I am Changed")
        }}>Change </button>
      </div>
    ); 
}