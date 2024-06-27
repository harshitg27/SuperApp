import React from 'react'
import './Registration.css'
import { useState } from 'react'

function Registration() {
    const [userDeatails, setUserDeatails] = useState({ name: '', userName: '', email: '', mobile: '', policy: false })
    const [error, setError] = useState({ name: '', userName: '', email: '', mobile: '', policy: false })
    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{11}$/;
        return phoneRegex.test(phone)
    }
    function validate() {
        setError({ name: '', userName: '', email: '', mobile: '', policy: false })
        if (userDeatails.name.trim().length === 0) {
            setError((error)=>{return{
                ...error,
                name: 'Name is required'
            }})
        }
        if (userDeatails.userName.trim().length === 0) {
            setError((error)=>{return{
                ...error,
                userName: 'UserName is required'
            }})
        }
        if (userDeatails.email.trim().length === 0) {
            setError((error)=>{return{
                ...error,
                email: 'Email is required'
            }})
        }
        if (userDeatails.mobile.trim().length === 0 || validatePhone(userDeatails.mobile)) {
            setError((error)=>{return{
                ...error,
                mobile: 'Phone is either empty or invalid'
            }})
        }
        if (!userDeatails.policy) {
            setError((error)=>{return{
                ...error,
                policy: 'Check this box if you want to proceed'
            }})
        }
    }
    return (
        <div className='registration'>
            <section className='layout'>
                <h1> Discover new things on Superapp</h1>
            </section>
            <section className='registrationPage'>
                <div className='rgsPageHeading'>
                    <h1> Super app</h1>
                    <h4>Create Your new account</h4>
                </div>
                <div className='registrationForm'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        validate()
                    }}>
                        <div className="input-box">
                            <input type="text"
                                placeholder="Name"
                                value={userDeatails.name}
                                onInput={(e) => setUserDeatails((prevState) => ({
                                    ...prevState,
                                    name: e.target.value
                                }))} />
                            <p>{error.name}</p>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="UserName" value={userDeatails.userName}
                                onInput={(e) => setUserDeatails((prevState) => ({
                                    ...prevState,
                                    userName: e.target.value
                                }))} />
                            <p>{error.userName}</p>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" value={userDeatails.email}
                                onInput={(e) => setUserDeatails((prevState) => ({
                                    ...prevState,
                                    email: e.target.value
                                }))} />
                            <p>{error.email}</p>
                        </div>
                        <div className="input-box">
                            <input type="tel" placeholder="Mobile" value={userDeatails.mobile}
                                onInput={(e) => setUserDeatails((prevState) => ({
                                    ...prevState,
                                    mobile: e.target.value
                                }))} />
                            <p>{error.mobile}</p>
                        </div>
                        <div className="policy">
                            <input type="checkbox" name='checkbox' id='checkbox' checked={userDeatails.policy}
                                onChange={(e) => setUserDeatails((prevState) => ({
                                    ...prevState,
                                    policy: e.target.checked
                                }))} />
                            <label htmlFor='checkbox'>  Share my registration data with Superapp</label>
                            <p>{error.policy}</p>
                        </div>
                        <div className="input-box button">
                            <button type="Submit" >SIGN UP</button>
                        </div>

                    </form>
                    <div className="signUpText">
                        <p>By clicking on Sign up. you agree to Superapp <span>Terms and Condition of Use</span></p>
                    </div>
                    <div className="signUpText">
                        <p>To learn more about how Superapp collects , uses , shares and protects
                            your personal data please head Superapp <span>Privacy Policy</span></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Registration
