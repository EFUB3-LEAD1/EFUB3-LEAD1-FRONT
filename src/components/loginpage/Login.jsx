import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { L } from './Login.style';

import logo from '../../assets/mainpage/logo.png';
import { BsChevronRight } from 'react-icons/bs';

import { RequestLogin } from '../../api/user';

const Login = () => {
    const nav = useNavigate();
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    useEffect(() => {
        if (inputId !== '' && inputPw !== '') setIsFilled(true);
    }, [inputId, inputPw]);

    const OnSubmit = e => {
        e.preventDefault();
        if (isFilled) {
            RequestLogin(inputId, inputPw)
                .then(res => {
                    console.log(res);
                    localStorage.setItem('token', res.accessToken);
                    // localStorage.setItem('refreshToken', res.refreshToken);
                    nav('/mypage');
                    window.location.reload();
                })
                .catch(err => console.log(err));
        } else {
            if (!inputId && !inputPw)
                alert('아이디와 비밀번호를 입력해주세요.');
            else if (!inputId && inputPw) alert('아이디를 입력해주세요.');
            else if (inputId && !inputPw) alert('비밀번호를 입력해주세요.');
        }
    };
    return (
        <L.Wrapper>
            <L.Logo src={logo} />
            <form onSubmit={e => OnSubmit(e)}>
                <L.Input
                    placeholder='아이디(이메일계정)'
                    value={inputId}
                    onChange={e => setInputId(e.target.value)}
                />
                <L.Input
                    placeholder='비밀번호'
                    type='password'
                    value={inputPw}
                    onChange={e => setInputPw(e.target.value)}
                />
                <L.LoginBtn isFilled={isFilled} type='submit'>
                    로그인
                </L.LoginBtn>
            </form>
            <L.OtherBtn>
                다른 방법으로 로그인하기
                <BsChevronRight size='15' color='var(--gray)' />
            </L.OtherBtn>
        </L.Wrapper>
    );
};

export default Login;
