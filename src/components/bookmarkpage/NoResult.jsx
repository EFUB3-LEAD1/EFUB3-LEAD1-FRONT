import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import no_result from '../../assets/searchresultpage/no_result.svg';

const NoResult = () => {
    const nav = useNavigate();
    const token = localStorage.getItem('token');
    const [isLogIn, setIsLogin] = useState(!!token);
    return (
        <Wrapper>
            <img src={no_result} width='20%' />
            <Text>찜한 상품이 없습니다.</Text>
            <SmallText>
                {isLogIn
                    ? '마음에 드는 상품을 찜해보세요!'
                    : '로그인 후, 마음에 드는 상품을 찜해보세요!'}
            </SmallText>
            {!isLogIn && (
                <LoginBtn onClick={() => nav('/login')}>로그인 하기</LoginBtn>
            )}
        </Wrapper>
    );
};

export default NoResult;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40% 0px;
`;

const Text = styled.div`
    color: #969696;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 7%;
`;

const SmallText = styled.div`
    color: #969696;
    text-align: center;
    font-weight: 400;
    font-size: 0.75rem;
    margin-top: 3%;
`;

const LoginBtn = styled.div`
    margin-top: 5%;
    font-size: 0.8rem;
    border: 1px solid #e5e5e5;
    border-radius: 15px;
    color: #488efc;
    padding: 2% 4%;
`;
