import React, { useState} from 'react';


export default function Registrer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        // Replace this with your actual registration API
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            setMessage('Registration successful');
        } else {
            setMessage('Registration failed');
        }
    };

    return (
        <div>
            <h2>Registrer</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit">Registro</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: "center",
       backgroundColor: "#ecf0f1",
       padding: 8,
    },
    inputContainer: {
       width: "100%",
       paddingHorizontal: 15,
       paddingVertical: 10,
       borderColor: "#d1d1d1",
       borderWidth: 1,
       borderRadius: 5,
    },
    inputField: {
       height: 40,
       fontSize: 14,
       color: "#000",
    },
    buttonContainer: {
       paddingHorizontal: 15,
       marginTop: 20,
    },
    stretch: {
       width: "100%",
       height: 100,
       resizeMode: "contain",
       marginBottom: 10,
       marginTop: 10,
       alignSelf: "center",
       justifyContent: "center",
       alignItems: "center",
       padding: 10,
    }
   });
   