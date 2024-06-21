import { useState } from "react";
import Cursor from "../components/cursor";
import GlobalContext from "./globalContext"

const Global = ({children}) => {
    const [isActive, setActive] = useState(false)
    return(
        <GlobalContext.Provider
            value={{isActive, setActive}}
            >
                <Cursor isActive={isActive}/>
            {children}
        </GlobalContext.Provider>
    )

}
export default Global;