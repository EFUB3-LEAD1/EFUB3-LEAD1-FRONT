import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import NavigationBar from '../_common/NavigationBar';
import { M } from './My.style';

import { BiArrowBack } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';

const My = () => {
    const nav = useNavigate();
    const nickname = '김하나';
    return (
        <M.Wrapper>
            <M.TopBar>
                <BiArrowBack size='30' onClick={() => nav(-1)} /> 마이페이지
            </M.TopBar>
            <M.Profile></M.Profile>
            <M.Name>
                {nickname}
                <BsChevronRight size='20' color='var(--gray)' strokeWidth='1' />
            </M.Name>
            <M.GrayDiv>
                여행 스타일 테스트 해보실래요?
                <BsChevronRight size='15' color='var(--gray)' />
            </M.GrayDiv>
            <M.TopDiv>
                <div className='inner'>
                    <div className='number'>0</div>
                    <div className='text'>할인쿠폰</div>
                </div>
                <div className='inner'>
                    <div className='number'>0</div>
                    <div className='text'>상품권</div>
                </div>
                <div className='inner'>
                    <div className='number'>0</div>
                    <div className='text'>기프트카드</div>
                </div>
                <div className='inner'>
                    <div className='number'>0M</div>
                    <div className='text'>마일리지</div>
                </div>
            </M.TopDiv>
            <M.BottomDiv>
                <div className='subtitle'>예약내역</div>
                <div className='inner'>
                    <div className='flex'>
                        <div className='text'>패키지</div>
                        <div className='number'>0</div>
                    </div>
                    <div className='flex'>
                        <div className='text'>호텔</div>
                        <div className='number'>0</div>
                    </div>
                    <div className='flex'>
                        <div className='text'>해외 항공</div>
                        <div className='number'>0</div>
                    </div>
                    <div className='flex'>
                        <div className='text'>투어/입장권</div>
                        <BsChevronRight size='18' color='var(--gray)' />
                    </div>
                    <div className='flex'>
                        <div className='text'>국내 항공</div>
                        <div className='number'>0</div>
                    </div>
                    <div className='flex' />
                </div>
                <div className='subtitle' style={{ marginTop: '30px' }}>
                    마이 메뉴
                </div>
                <div className='inner'>
                    <div className='flex'>
                        <div className='text'>MY플래너</div>
                    </div>
                    <div className='flex'>
                        <div className='text'>MY상품평</div>
                    </div>
                </div>
            </M.BottomDiv>
        </M.Wrapper>
    );
};

export default My;
