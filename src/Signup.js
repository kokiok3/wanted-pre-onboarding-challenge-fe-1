import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import style from './Signin.module.css';

function Signup() {
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
    const signUp = () => {
        console.log('signUp', params);
        axios.post(server + '/users/create', params)
        .then(res=>{
            console.log('signUp',res);
            if(res.status === 200){
                window.localStorage.setItem("token", res.data.token);
                Swal.fire({
                    icon: 'success',
                    title: '회원가입 성공',
                    confirmButtonColor: '#3085d6',
                }).then((result) => {
                    if (result.isConfirmed || result.isDismissed) {
                        document.location.pathname = '/';
                    }
                });
            }
        }).catch(e=>{
            Swal.fire({
                icon: 'error',
                title: '회원가입 실패',
                text: e.response.data.details,
                confirmButtonColor: '#d33',
            });
        })
    };
    const onKeyEnter = (event)=>{
        if(event.key === 'Enter'){
            signUp();
        }
    }
    return (
        <div className={style.sign_in}>
            <h1><div>같이해</div><div>가치해</div></h1>
            <div className={style.content}>
                <input type="text" placeholder='아이디' onChange={changeId}/>
                <input type="password" placeholder='비밀번호' onChange={changePw} onKeyUp={onKeyEnter}/>
                {/* <input type="password" placeholder='비밀번호 재확인'/> */}
                <button onClick={signUp}>회원가입</button>
                
                <span className={style.signup}>
                    <Link to="/">로그인 페이지로 돌아가기</Link>
                </span>
            </div>
        </div>
        
    );
}

export default Signup;