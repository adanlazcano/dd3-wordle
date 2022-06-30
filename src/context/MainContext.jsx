import { createContext, useState } from "react";

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [indexBoard, setIndexBoard] = useState(0);

  const data = { indexBoard, setIndexBoard };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export { MainProvider };

export default MainContext;
