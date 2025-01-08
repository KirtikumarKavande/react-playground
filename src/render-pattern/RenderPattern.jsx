import { useState } from "react";

const RenderPattern = ({ render }) => {
  const [position, setPosition] = useState({ x: "", y: "" });

  document.addEventListener("mousemove", (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  });

  return render(position);
};

export default RenderPattern;
