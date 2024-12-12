import { createContext, useContext } from "react";

export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {
  const contextValue = {};
  return (
    <AdminContext.Provider value={contextValue}>
      {props.childern}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
