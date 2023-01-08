import style from './Signin.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


function Signin() {
    const [id, setId] = useState('');
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
    const login = () => {
        console.log('login', params);
        axios.post(server + '/users/login', params)
        .then(res=>{
            console.log(res);
            if(res.status === 200){
                window.localStorage.setItem("token", res.data.token);
                document.location.pathname = '/home';
                console.log(document.location)
            }
        })
    };
    const onKeyEnter = (event)=>{
        if(event.key === 'Enter'){
            login();
        }
    }
    return (
        <div className={style.sign_in}>
            <h1><div>같이해</div><div>가치해</div></h1>
            <div className={style.content}>
                <input type="text" placeholder='아이디' value={id} onChange={changeId}/>
                <input type="password" placeholder='비밀번호' onChange={changePw} onKeyUp={onKeyEnter}/>
                <button onClick={login}>로그인</button>
                <span className={style.signup}>
                    <Link to="/sign_up">회원가입</Link>
                </span>
            </div>
        </div>
        
    );
}

export default Signin;