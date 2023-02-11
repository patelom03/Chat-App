import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
      <ChatEngine
        height="100vh"
        projectID="fac4361d-7b28-4c26-8790-adc063f4065f"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    );
  };

export default App;