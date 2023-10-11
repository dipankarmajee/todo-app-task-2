import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const TodoLayout = () => {
  const [activeBgColor, setActiveBgColor] = useState(
    localStorage.getItem("theme") || "bg-light"
  );

  const onClickSetColor = (currentColor) => {
    setActiveBgColor(currentColor);
  };

  useEffect(() => {
    localStorage.setItem("theme", activeBgColor);
  }, [activeBgColor]);

  return (
    <div
      className={`todo-layout-container px-2 ${activeBgColor} d-flex flex-column gap-4 justify-content-center align-items-center`}
    >
      <div className="d-flex justify-content-center align-items-center">
        <Outlet />
      </div>
      <div className="d-flex justify-content-center gap-4">
        <button
          onClick={() => onClickSetColor("bg-secondary bg-opacity-25")}
          className="bg-light p-3 rounded-circle outline-none border-0 shadow"
        ></button>
        <button
          onClick={() => onClickSetColor("bg-primary bg-opacity-75")}
          className="bg-primary bg-opacity-75 p-3 rounded-circle outline-none border-0 shadow"
        ></button>
        <button
          onClick={() => onClickSetColor("bg-dark")}
          className="bg-dark p-3 rounded-circle outline-none border-0 shadow"
        ></button>
      </div>
    </div>
  );
};

export default TodoLayout;
