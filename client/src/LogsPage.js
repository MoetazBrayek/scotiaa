import {useEffect, useState} from "react";
const axios = require("axios");

const LogsPage = () => {
  const [logs, setlogs] = useState([]);
  useEffect(() => {
    redirect();
    return;
  }, []);
  const redirect = async () => {
    const response = await axios.get("/visitors");
    setlogs(response.data);
  };

  return (
    <div>
      {logs.map((item) => (
        <>
          _________________________ _________________________
          <br />
          device :{JSON.stringify(item.clientInfo.device)}
          client :{JSON.stringify(item.clientInfo.client)}
          <br />
          antiBotInfo:{JSON.stringify(item.antiBot)}
        </>
      ))}
    </div>
  );
};

export default LogsPage;
