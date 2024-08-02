import { useEffect, useState } from "react";

const Typed = ({ titles }) => {
  const [index, setIndex] = useState(0);

  const changeString = () => {
    setIndex((prevIndice) => (prevIndice + 1) % titles.length);
  };

  useEffect(() => {
    const interval = setInterval(changeString, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="flex justify-center pb-7 text-3xl font-mono uppercase">
      <p id="titles">
        {titles[index]}
      </p>
    </p>
  );
};

export default Typed;
