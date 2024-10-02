import { useEffect } from "react";
import { isLoggedIn } from "../utils/authService";
import Banner from "./sections/Banner";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const loggedIn = isLoggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard");
    }
  }, [loggedIn, navigate]);
  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
