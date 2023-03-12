import {useState, useEffect} from 'react';
import {useLang} from '../../context/language';

export default function Home(){
    const langSvc = useLang();
    return (
        <>
            <h1>{langSvc.lang == 'eng' ? 'Home Page' : 'Página de inicio'}</h1>
            <button onClick={() => langSvc.setLang(null)}>Clear</button>
        </>
    )
}