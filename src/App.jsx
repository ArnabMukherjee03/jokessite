import "./App.css"
import { Catagories } from './components/Catagories'
import { Random_jokes } from './components/Random_jokes'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   
   return <div className='container'>
      <ToastContainer/>
      <Catagories/>
      <Random_jokes/>
   </div>
}

export default App
