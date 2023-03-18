import './App.css';
import Welcome from './components/welcome/welcome';
import Home from './components/home/home';
import Bio from './components/bio/bio';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import {useLang} from './context/language';

function App() {
  const langSvc = useLang();
  return (
    <>
    {/* Provider imported into the highest-necessary component */}
      {
        !langSvc.lang ? 
          <div className="container">
            <div className="container-tint">
              <div className="content">
                <Welcome/> 
              </div>
            </div>
          </div>
          :  
          <>
            <Home/>
            <Bio/>
            <Projects/>
          </>
          
      }
    </>
  );
}

export default App;
