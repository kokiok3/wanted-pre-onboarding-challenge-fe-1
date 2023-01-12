import style from './Signin.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


function Signin() {
    const [id, setId] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [pw, setPw] = useState('');

    const changeId = (event)=>{
        setId(event.target.value)
    }
    const changePw = (event)=>{
        setPw(event.target.value)
    }
    const server = 'http://localhost:8080';
    const params = {
        "email": id,
        "password": pw
    }
    const login = (evt) => {
        evt.preventDefault();
        // console.log('login', params, evt);
        
        axios.post(server + '/users/login', params)
        .then(res=>{
            if(res.status === 200){
                window.localStorage.setItem("token", res.data.token);
                document.location.pathname = '/home';
                console.log(document.location)
            }
        })
        .catch(e=>{
            setErrMsg((prev)=>{
                return prev = e.response.data.details;
            });
        })
    };
    return (
        <div className={style.sign_in}>
            <h1><div>같이해</div><div>가치해</div></h1>
            <form className={style.content} onSubmit={login}>
                <input type="email" pattern='[a-zA-Z0-9]+@[a-zA-Z0-9]+\.+[a-zA-Z]+\.*[a-zA-Z]*' placeholder='이메일' value={id} onChange={changeId} required/>
                <input type="password" placeholder='비밀번호' onChange={changePw} required/>

                {errMsg ? <span className={style.errMsg}>⚠ {errMsg}</span> : null}

                <button type='submit'>로그인</button>
                <span className={style.signup}>
                    <Link to="/sign_up">회원가입</Link>
                </span>
            </form>
        </div>
        
    );
}

export default Signin;