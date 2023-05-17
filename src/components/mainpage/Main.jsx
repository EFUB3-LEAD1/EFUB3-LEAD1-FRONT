import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import NavigationBar from '../_common/NavigationBar';
import { S } from './Main.style';

import logo from '../../assets/mainpage/logo.png';
import { FaRegUserCircle } from 'react-icons/fa';
import mainimg1 from '../../assets/mainpage/mainimg1.png';
import mainimg2 from '../../assets/mainpage/mainimg2.png';
import flight from '../../assets/mainpage/flight.svg';
import jeju from '../../assets/mainpage/jeju.png';
import golf from '../../assets/mainpage/golf.svg';
import honeymoon from '../../assets/mainpage/honeymoon.svg';
import koreaflight from '../../assets/mainpage/korea_flight.svg';
import sale from '../../assets/mainpage/sale.svg';
import worldmap from '../../assets/mainpage/worldmap.svg';
import place from '../../assets/mainpage/place.svg';
import calendar from '../../assets/mainpage/calendar.svg';
import thumbup from '../../assets/mainpage/thumbup.svg';

const Main = () => {
    const nav = useNavigate();
    const [isSplash, setIsSplash] = useState(true);
    useEffect(() => {
        setTimeout(function () {
            setIsSplash(false);
        }, 1500);
    }, []);
    return (
        <S.Wrapper>
            {isSplash ? (
                <S.SplashContainer>
                    <S.SplashLogo src={logo} />
                </S.SplashContainer>
            ) : (
                <>
                    <S.TopBar>
                        <S.Logo src={logo} />
                        <S.MyPageBtn onClick={() => nav('/mypage')}>
                            <FaRegUserCircle size='25' />
                            <div className='text'>마이페이지</div>
                        </S.MyPageBtn>
                    </S.TopBar>
                    <S.MainText>원하시는 패키지를 선택해주세요!</S.MainText>
                    <S.ImgContainer>
                        <div
                            className='inner'
                            onClick={() => nav('/whole-package')}
                        >
                            <img src={mainimg1} />
                            <div className='text'>전체 패키지 전체보기</div>
                        </div>
                        <div className='inner'>
                            <img src={mainimg2} />
                            <div className='text'>맞춤 패키지 전체보기</div>
                        </div>
                    </S.ImgContainer>
                    <S.SubText>
                        원하면,&nbsp;
                        <span style={{ color: 'var(--purple1)' }}>
                            어디든 완벽하게!
                        </span>
                    </S.SubText>
                    <S.IconContainer>
                        <div className='imgdiv'>
                            <img className='img1' src={flight} />
                            <div className='imgtext'>해외여행</div>
                        </div>
                        <div className='imgdiv'>
                            <img className='img2' src={jeju} />
                            <div className='imgtext'>제주/국내</div>
                        </div>
                        <div className='imgdiv'>
                            <img className='img3' src={golf} />
                            <div className='imgtext'>골프</div>
                        </div>
                        <div className='imgdiv'>
                            <img className='img4' src={honeymoon} />
                            <div className='imgtext'>허니문</div>
                        </div>
                        <div className='imgdiv'>
                            <img className='img5' src={koreaflight} />
                            <div className='imgtext'>지방출발</div>
                        </div>
                    </S.IconContainer>
                    <S.MenuContainer>
                        <S.MenuDiv className='left-top'>
                            <div className='text'>항공</div>
                            <S.Sale src={sale} />
                        </S.MenuDiv>
                        <S.MenuDiv>
                            <div className='text'>해외호텔</div>
                        </S.MenuDiv>
                        <S.MenuDiv className='right-top'>
                            <div className='text'>국내숙박</div>
                        </S.MenuDiv>
                        <S.MenuDiv className='left-bottom'>
                            <div className='text'>렌터카</div>
                        </S.MenuDiv>
                        <S.MenuDiv>
                            <div className='text'>에어/투어텔</div>
                        </S.MenuDiv>
                        <S.MenuDiv className='right-bottom'>
                            <div className='text'>투어/입장권</div>
                        </S.MenuDiv>
                    </S.MenuContainer>
                    <S.ButtonContainer>
                        <div className='imgdiv'>
                            <img src={worldmap} />
                            <div className='imgtext'>해외여행정보</div>
                            <div className='subtext'>국가별 안내</div>
                        </div>
                        <div className='imgdiv'>
                            <img src={place} />
                            <div className='imgtext'>도시 정보</div>
                            <div className='subtext'>플레이스</div>
                        </div>
                        <div className='imgdiv'>
                            <img src={calendar} />
                            <div className='imgtext'>일정 생성</div>
                            <div className='subtext'>플래너</div>
                        </div>
                        <div className='imgdiv'>
                            <img src={thumbup} />
                            <div className='imgtext'>SAFETY&JOY</div>
                            <div className='subtext'>안심여행 지원</div>
                        </div>
                    </S.ButtonContainer>
                    <NavigationBar />
                </>
            )}
        </S.Wrapper>
    );
};

export default Main;
