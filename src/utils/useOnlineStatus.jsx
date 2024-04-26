import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineSatus] = useState(true);

  // check online status
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineSatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineSatus(true);
    });
  }, []);

  //boolean values
  return onlineStatus;
};

export default useOnlineStatus;
