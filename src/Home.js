import style from './Home.module.css';

function Home() {
    const logout = ()=>{
        console.log('by')
        window.localStorage.removeItem('token');
        document.location.pathname = '/';
    }
    return (
        <div className={style.home}>
            <header>
                <h1><div>같이해</div><div>가치해</div></h1>
                <div>
                    <span>유저이름</span>
                    <span className={style.logout} onClick={logout}>로그아웃</span>
                </div>
            </header>
            <main>
                <section>
                    <div>
                        <button>+</button>
                    </div>
                    {/* <div className={style.content_main}>
                        <span>+ 버튼을 눌러 내용을 추가해 보세요.</span>
                    </div> */}
                    <div className={`${style.content_main} ${style.content_main2}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
                
                <aside className={style.detail}>
                    <div>상세보기</div>
                    <div className={style.detail_content}>
                        <button>수정</button>
                        <textarea />
                    </div>
                </aside>
            </main>
        </div>
    );
}

export default Home;