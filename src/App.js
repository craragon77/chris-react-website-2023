import './App.css';
import Welcome from './components/welcome/welcome';
import Home from './components/home/home';
import {useLang} from './context/language';

function App() {
  const langSvc = useLang();
  return (
    <>
    {/* Provider imported into the highest-necessary component */}
        <div className="container">
          <div className="container-tint">
            <div className="content">
              <p>Good Morning Dave</p>
              {
                langSvc.lang ? <Home/> :  <Welcome/>
              }
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
