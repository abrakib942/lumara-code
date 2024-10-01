import { Link } from "react-router-dom";

import { Button } from "antd";

const NotFound = () => {
  return (
    <div className="text-5xl text-center flex flex-col items-center justify-center">
      <p> Not Found</p>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
