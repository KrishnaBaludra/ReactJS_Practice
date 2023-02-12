import { useState } from "react";

export const Person = () => {
  const [person, setPerson] = useState({
    fname: "Murali",
    lname: "Krishna",
    email: "murali@gmail.com",
  } );
    
    const changePersonDetails = () =>
    {
        let newPerson = { ...person };
        newPerson[ 'lname' ] = "Naveen";
        setPerson( newPerson )
        

        // We Can do above three line in single line here we can show that one line
        setPerson({...person, fname:"Ram charan"})
    }

  return (
    <div>
          <h2>Hello Person Component</h2>
          <button onClick={changePersonDetails}>
              Change Person
          </button>
      <ul>
        <li>{person.fname}</li>
        <li>{person.lname}</li>
        <li>{person.email}</li>
      </ul>
    </div>
  );
};
