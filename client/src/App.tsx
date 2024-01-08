import { useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function fetchData() {
    fetch("http://localhost:3000", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      // headers: {
      //   "Content-Type": "application/json",
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.Response);
      })
      .catch((err: any) => {
        console.log(err);
        setError(err);
      });
  }

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 50,
        alignItems: "center",
      }}
    >
      <button style={{ width: "fit-content" }} onClick={fetchData}>
        Send GET request
      </button>

      {data ? (
        <p style={{ color: "wheat" }}> {data}</p>
      ) : (
        <p style={{ color: "wheat" }}>{error}</p>
      )}
    </section>
  );
};

export default App;
