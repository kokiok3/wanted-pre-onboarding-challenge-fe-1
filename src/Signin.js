import style from './Signin.module.css';

function Signin() {
    return (
        <div className={style.sign_in}>
            <h1><div>같이해</div><div>가치해</div></h1>
            <div className={style.content}>
                <input type="text" placeholder='아이디'/>
                <input type="password" placeholder='비밀번호'/>
                <button>로그인</button>
                <span>회원가입</span>
            </div>
        </div>
        
    );
}

export default Signin;