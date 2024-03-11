import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import JokeProvider from './context/JokesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <JokeProvider>
    <App />
    </JokeProvider>
)
