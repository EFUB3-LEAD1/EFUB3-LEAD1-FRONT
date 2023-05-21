import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { D } from './Detail.style';

import { BiArrowBack } from 'react-icons/bi';
import testimg from '../../assets/detailpage/testimg.png';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { MdCall } from 'react-icons/md';
import calendar from '../../assets/detailpage/calendar.svg';
import viatrue from '../../assets/detailpage/viatrue.svg';
import viafalse from '../../assets/detailpage/viafalse.svg';
import shoppingtrue from '../../assets/detailpage/shoppingtrue.svg';
import shoppingfalse from '../../assets/detailpage/shoppingfalse.svg';
import grouptrue from '../../assets/detailpage/grouptrue.svg';
import groupfalse from '../../assets/detailpage/groupfalse.svg';
import guidetrue from '../../assets/detailpage/guidetrue.svg';
import guidefalse from '../../assets/detailpage/guidefalse.svg';

import { getpackage } from '../../api/_mock';
import { GetPackage } from '../../api/tour';
import { Like, UnLike } from '../../api/user';

const Detail = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const num = Math.floor(Math.random() * 500);
    const [currentPackage, setCurrentPackage] = useState({});
    useEffect(() => {
        GetPackage(id)
            .then(res => {
                console.log(res);
                setCurrentPackage(res);
                setIsLiked(res.isHeart);
            })
            .catch(err => console.log(err));
    }, []);
    const token = localStorage.getItem('token');
    const [isLogin, setIsLogin] = useState(!!token);
    const [isLiked, setIsLiked] = useState(false);
    const ToggleLike = () => {
        if (isLogin) {
            if (isLiked) {
                UnLike(id)
                    .then(res => {
                        console.log(res);
                        setIsLiked(false);
                    })
                    .catch(err => console.log(err));
            } else {
                Like(id)
                    .then(res => {
                        console.log(res);
                        setIsLiked(true);
                    })
                    .catch(err => console.log(err));
            }
            console.log(isLiked);
        } else alert('로그인 후 찜 기능을 사용할 수 있습니다.');
    };
    return (
        <D.Wrapper>
            <BiArrowBack
                size='30'
                color='var(--white)'
                className='back'
                onClick={() => nav(-1)}
            />
            <D.InfoContainer>
                <D.InfoImage src={testimg} />
            </D.InfoContainer>
            <D.InfoTop>
                <BsFillCheckCircleFill size='15' color='var(--purple2)' />
                <span className='leftText'>약속한 여행! 100% 보상!</span>
                <span className='rightText'>개런티 프로그램 적용 상품</span>
            </D.InfoTop>
            <D.Container>
                <D.ItemNum>EW131230603LHT</D.ItemNum>
                <D.DetailContainer>
                    <div className='tagContainer'>
                        <div className='standard'>스탠다드</div>
                        <div className='depart'>출발 예정</div>
                    </div>
                    <div className='info'>여행상품 핵심정보</div>
                </D.DetailContainer>
                <D.Title>{currentPackage.title}</D.Title>
                <D.HashTag>{currentPackage.subTitle}</D.HashTag>
                <D.Explanation>
                    {currentPackage.category === 'HOT_DEAL' && '금주 핫딜'}
                </D.Explanation>
                <D.FlexContainer>
                    <span onClick={() => ToggleLike()}>
                        <FiHeart
                            size='19'
                            fill={isLiked ? '#FF0000' : '#ffffff'}
                            stroke={isLiked ? '#FF0000' : '#000000'}
                        />
                        좋아요
                    </span>
                    <div className='inner'>
                        <div className='button'>일정 펼침</div>
                        <span>{`${num}개 후기`}</span>
                    </div>
                </D.FlexContainer>
                {currentPackage.tourSpot && (
                    <D.Nation>
                        <span className='nation'>
                            {currentPackage.tourSpot[0].nation}:
                        </span>
                        &nbsp; <span className='blue'>여행 가능</span>
                        &nbsp;여행 전 입국 규정을 확인해 주세요
                    </D.Nation>
                )}
                <D.FlexContainer>
                    <D.IconRect>
                        <img src={calendar} className='img1' />
                        {currentPackage.tourPlan && (
                            <div className='text'>
                                {currentPackage.tourPlan.duration}
                            </div>
                        )}
                    </D.IconRect>
                    <D.IconRect>
                        <img
                            src={currentPackage.isLayOver ? viatrue : viafalse}
                        />
                        <div className='text'>
                            {currentPackage.isLayOver
                                ? '외국항공 경유있음'
                                : '외국항공 경유없음'}
                        </div>
                    </D.IconRect>
                    <D.IconRect>
                        <img
                            src={
                                currentPackage.isShopping
                                    ? shoppingtrue
                                    : shoppingfalse
                            }
                        />
                        <div className='text'>
                            {currentPackage.isShopping ? '쇼핑' : '쇼핑없음'}
                        </div>
                    </D.IconRect>
                    <D.IconRect>
                        <img
                            src={
                                currentPackage.isLayOver
                                    ? grouptrue
                                    : groupfalse
                            }
                        />
                        <div className='text'>
                            {currentPackage.isLayOver
                                ? '단체여행'
                                : '맞춤패키지'}
                        </div>
                    </D.IconRect>
                    <D.IconRect>
                        <img
                            src={
                                currentPackage.isLayOver
                                    ? guidetrue
                                    : guidefalse
                            }
                            className='img1'
                        />
                        <div className='text'>
                            {currentPackage.isLayOver
                                ? '인솔자동행'
                                : '인솔자 미동행'}
                        </div>
                    </D.IconRect>
                </D.FlexContainer>
            </D.Container>
            <D.BottomBar>
                <div className='circle'>
                    <MdCall size='30' />
                </div>
                <div className='circle' onClick={() => ToggleLike()}>
                    <FiHeart
                        size='30'
                        strokeWidth='1'
                        fill={isLiked ? '#ff0000' : '#ffffff'}
                        stroke={isLiked ? '#ff0000' : '#000000'}
                    />
                </div>
                <div className='button'>예약하기</div>
            </D.BottomBar>
        </D.Wrapper>
    );
};

export default Detail;
