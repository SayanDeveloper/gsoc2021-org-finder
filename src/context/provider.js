import axios from "axios";
import React, {useState, createContext} from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {

    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);

    return (
        <GlobalContext.Provider value={{all: [data, setData], Filtered: [filtered, setFiltered]}}>
            {children}
        </GlobalContext.Provider>
    )
};
