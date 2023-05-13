import React from 'react';
import { useNavigate } from 'react-router';
import NavigationBar from '../_common/NavigationBar';

import { S } from './Main.style';
import logo from '../../assets/mainpage/logo.png';
import { FaRegUserCircle } from 'react-icons/fa';

const Main = () => {
    const nav = useNavigate();
    return (
        <S.Wrapper>
            <S.TopBar>
                <S.Logo src={logo} />
                <S.MyPageBtn onClick={() => nav('/mypage')}>
                    <FaRegUserCircle size='25' />
                    <div className='text'>마이페이지</div>
                </S.MyPageBtn>
            </S.TopBar>
            <NavigationBar />
        </S.Wrapper>
    );
};

export default Main;
