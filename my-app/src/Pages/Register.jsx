import React, { useState } from "react";
import { Link } from "react-router-dom";
import DaumPostcode from 'react-daum-postcode';
import axios from "axios";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [birthdate, setBrithdate] = useState('');

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
    
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        setAddress(fullAddress);
      };

    const postCodeStyle = {
    display: 'block',
    position: 'relative',
    top: '0%',
    width: '400px',
    height: '400px',
    padding: '7px',
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            pass,
            name,
            address,
            birthdate,
        };
        axios.post('/api/register', {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => {
            if(response.status === 200) {
                //페이지 이동?(로그인 창으로)
                console.log('회원가입이 되었습니다!');
            } else {
                console.error('회원가입에 실패하였습니다...');
            }
        })
        .catch((error) => {
            console.error(error);
        })
    }

    //추가할 것: kakao 주소검색 API 넣기
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>이름</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name"/>
                <label htmlFor="email">이메일</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="yourmail@blabla.com" id="email" name="email" />
                <label htmlFor="password">비밀번호</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password" />
                
                <label htmlFor="address">주소</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <input value={address} readOnly={true} style={{ marginRight: '10px' }} type="text" id="address" name="address" />
                <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
                </div>

                <label htmlFor="email">생년월일</label>
                <input value={birthdate} onChange={(e) => setBrithdate(e.target.value)} type="date" id="birthdate" name="birthdate" />
                <button type="submit">제출</button>
            </form>
            <button><Link to = "/">메인화면으로 가기</Link></button>
            <Link to = "/login">이미 계정이 있으신가요? 로그인 가기</Link>
        </div>
    )
}

export default Register;