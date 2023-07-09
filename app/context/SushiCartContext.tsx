import React, { createContext, useMemo, useState } from "react";

export type TSushiCartContext = {
  modal: boolean;
  handleChangeModal: () => void;
};

const SushiCartContext = createContext<TSushiCartContext>({
  modal: false,
  handleChangeModal: () => {},
});

const SushiCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<boolean>(false);

  const Context = useMemo(() => {

    const handleChangeModal = () => {
      setModal(!modal);
    };
    
    return { modal, handleChangeModal };
  }, [modal]);

  return (
    <SushiCartContext.Provider value={Context}>
      {children}
    </SushiCartContext.Provider>
  );
};
export { SushiCartProvider };

export default SushiCartContext;
