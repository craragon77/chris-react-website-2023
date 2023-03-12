import {createContext, useContext, useState} from 'react';

//1.) create the context as a null value
const LangContext = createContext(null);

//2.) create the provider functions and hooks as needed
export const LangProvider = ({children, ...service}) => {
    //language can either be English or Spanish
    const [lang, setLang] = useState(null);

    //3.) export values as needed
    const values = {
        //states live here
        lang: lang,
        //hooks live here
        setLang: (val) => setLang(val)
    };

    return (
        <LangContext.Provider value={values}>
            {children}
        </LangContext.Provider>
    )
};

export const useLang = () => {
    return useContext(LangContext);
}

