import { useLang } from "../../context/language";
import './welcome.scss';

export default function Welcome(){
    const langSvc = useLang();

    function setLanguage(str){
        console.log('firing')
        langSvc.setLang(str);
    }

    return (
        <>
            <h2 className="welcome">Welcome</h2>
            <h2 className="welcome">Bienvenidos</h2>

            <div>
                <p>Please select your language</p>
                <button onClick={() => setLanguage('eng')}>English</button>
                <button onClick={() => setLanguage('esp')}>Español</button>
            </div>
        </>
    )
}