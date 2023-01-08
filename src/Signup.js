import style from './Signin.module.css';

function Signup() {
    return (
        <div className={style.sign_in}>
            <h1><div>같이해</div><div>가치해</div></h1>
            <div className={style.content}>
                <input type="text" placeholder='아이디'/>
                <input type="password" placeholder='비밀번호'/>
                <input type="password" placeholder='비밀번호 재확인'/>
                <button>회원가입</button>
            </div>
        </div>
        
    );
}

export default Signup;