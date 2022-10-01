import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

type SerchContextType = {
  serch: string;
  setSerch: Dispatch<SetStateAction<string>>
};

export const SerchContext = createContext<SerchContextType>({} as SerchContextType);

export const SerchProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [serch, setSerch] = useState("");
  return (
    <SerchContext.Provider value={{ serch, setSerch }}>
      {children}
    </SerchContext.Provider>
  );
};