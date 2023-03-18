import {useState, useEffect} from 'react';
import {useLang} from '../../context/language';
import {BsChevronDoubleDown} from 'react-icons/bs';
import './home.scss';

export default function Home(){
    const langSvc = useLang();
    return (
        <div className="home-container">
            <div className="home-tint">
                <h1>{langSvc.lang == 'eng' ? `Hello! I'm Chris, a web developer based in New England` : `!Saludes! Soy Chris, y soy informaticador quien vive en Nueva Inglaterra`}</h1>
                <button onClick={() => langSvc.setLang(null)}>Clear</button>
                <span className="chevron-icon"><BsChevronDoubleDown/></span>
            </div>
        </div>
    )
}