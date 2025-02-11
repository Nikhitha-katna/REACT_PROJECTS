import {useContext , createContext} from 'react';

export const ThemeContext = createContext({
    ThemeMode : "light",
    darkTheme :  () => {},
    lightTheme : () => {}

});


export const ThemeContextprovider = ThemeContext.Provider

export default function useTheme (){
    return useContext(ThemeContext)
}

