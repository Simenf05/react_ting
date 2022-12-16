
import Form from './Form'

import React from 'react';
import { useEffect, useState } from 'react';



function App() {

  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

  return(
    <>
      <h1>Velkommen til min kalkulator</h1>

      <p>{!data ? "loading" : data}</p>

      <Form nums={10} />

    </>
    
  );

}

export default App;
