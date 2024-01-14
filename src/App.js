import { AllRoutes } from './routes/AllRoutes';
import {Header, Footer} from './components';
import './App.css';

const App = () => {
  return(
    <div>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
};

export default App;