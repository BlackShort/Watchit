import { createContext, useState } from "react";

export const StateContextApi = createContext();

export const StateContextApiProvider = ({children}) =>{
    const [openMenu, setOpenMenu] = useState(false);

    return(
        <StateContextApi.Provider value={{openMenu, setOpenMenu}}>{children}</StateContextApi.Provider>
    );
};