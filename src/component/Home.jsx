import { useState, useEffect } from "react";
import { CiWifiOff } from "react-icons/ci";

const Home = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="home-img">
      {isOnline ? (
        <img
          src="https://th.bing.com/th/id/OIP.3DDm_Yi7wjaOp4S3ZYK8GAHaHa?rs=1&pid=ImgDetMain"
          alt="error"
        />
      ) : (
        <div>
          <CiWifiOff className="wifi" />
          <h1 style={{ color: "red" }}>No Internet Connection.......</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
