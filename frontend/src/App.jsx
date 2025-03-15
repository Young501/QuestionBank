import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then(response => setMessage(response.data.message))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Node.js 项目</h1>
      <p>来自后端的消息: {message}</p>
    </div>
  );
}

export default App;
