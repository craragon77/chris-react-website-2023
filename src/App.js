import './App.css';
import Welcome from './components/welcome/welcome';
import {LangProvider} from './context/language';

function App() {
  return (
    <>
    {/* Provider imported into the highest-necessary component */}
      <LangProvider>
        <div className="container">
          <div className="container-tint">
            <div className="content">
              <p>Good Morning Dave</p>
                <Welcome/>
            </div>
          </div>
        </div>
      </LangProvider>
    </>
  );
}

export default App;
