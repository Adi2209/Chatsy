import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import ChatPage from './pages/ChatPage';
import SnowStorm from 'react-snowstorm';
function App() {
  return (
    <div className="App">
      <SnowStorm />
        <Route path='/' component={Homepage} exact/>
        <Route path='/chats' component={ChatPage} />
    </div>
  );
}

export default App;
