import { Outlet } from "react-router-dom";

const RootElement = () => {
  return (
    <div>
      Header
      <Outlet />
      Footer
    </div>
  );
};

export default RootElement;
