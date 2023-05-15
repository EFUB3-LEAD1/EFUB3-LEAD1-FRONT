import React from 'react';
import { useNavigate } from 'react-router';
import NavigationBar from '../_common/NavigationBar';

import { S } from './PackageList.style';
import background from '../../assets/packagelistpage/background.png';
import backgroundBlur from '../../assets/packagelistpage/backgroundBlur.png';
import arrow from '../../assets/packagelistpage/arrow_left.png';

const PackageList = () => {
    const nav = useNavigate();
    return (
        <S.Wrapper>
            <S.TopBar>
                <S.BackBtn onClick={() => nav('/')}>
                    <img src={arrow} width={25} />
                </S.BackBtn>
                <S.Title>전체 패키지 여행</S.Title>
            </S.TopBar>
            <S.Background src={background} />
            <S.Blur src={backgroundBlur} />
            <NavigationBar />
        </S.Wrapper>
    );
};

export default PackageList;
