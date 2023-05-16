import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            pass,
        };

        axios.post('/api/login'), {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        .then((response) => {
            if(response.status === 200) {
                console.log('로그인 성공!');
            } else {
                console.error('로그인 실패...');
            }
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">이메일</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="yourmail@blabla.com" id="email" name="email" />
                <label htmlFor="password">비밀번호</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password" />
                <button type="submit">로그인</button>
            </form>
            <button><Link to ="/">메인화면으로</Link></button>
            <Link to ="/register">아직 계정이 없으신가요? 회원가입 가기</Link>
        </div>
    )
}

export default Login;