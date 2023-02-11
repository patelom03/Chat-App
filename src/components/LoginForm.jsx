import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        // given username and password, check to see if login works
        // if login works, good
        // else error message for bad login
        const authObject = { 'Project-ID': "fac4361d-7b28-4c26-8790-adc063f4065f", 'User-Name': username, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            // store the username and password locally 
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
            setError('');

        } catch (err) {
            setError('Wrong login info, please try agian.');
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h1 className='error-msg'>{error}</h1>
            </div>
        </div>
    )
}

export default LoginForm