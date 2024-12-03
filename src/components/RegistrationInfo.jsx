import { useState } from 'react';

function RegistrationInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Your Details</legend>
                    <label>Name:
                        <input type="text" value={name}
                        onChange={e => setName(e.target.value)} />
                    </label>
                    <br/>
                    <label>Email:
                        <input type="text" value={email}
                        onChange={e => setEmail(e.target.value)} />
                    </label>
                </fieldset>
                <button onClick={e => {
                    alert(`Thanks for signing over your data for free, ${name}! We promise to only use your email address ${email} for good, and maybe a tiny bit of evil.`);
                    e.preventDefault();
                }}>Submit
                </button>
            </form>
        </div>
    );
  }

export default RegistrationInfo;