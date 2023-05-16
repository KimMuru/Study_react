import React from "react";
import imageSrc from './logo.png';
import { Link } from "react-router-dom";

export function Home(){
    return (
        <div className="auth-form-container">
            <h2>~별봉이네에 오신 것을 환영합니다~</h2>
            <img src={imageSrc} alt="My image" />
            <form className="main-form">
                <button><Link to="/login">로그인하러 가기</Link></button>
                <button><Link to="/register">회원가입하러 가기</Link></button>
            </form>
        </div>
    );
}

export default Home;

