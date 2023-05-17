import React from 'react';
import { useNavigate } from 'react-router';
import { S } from './Detail.style';
import back_arrow from '../../assets/detailpage/back_arrow.svg';
import verified from '../../assets/detailpage/verified.svg';

const Detail = props => {
    const nav = useNavigate();
    // info[id].title
    return (
        <S.Wrapper>
            <S.InfoContainer>
                <S.InfoImage src={props.info.infoImage.infoImage} />
            </S.InfoContainer>
            <S.BackBtn onClick={() => nav('/whole-package')}>
                <img src={back_arrow} width={25} />
            </S.BackBtn>
            <S.InfoTop>
                <img src={verified} />
                <div className='leftText'>약속한 여행! 100% 보상!</div>
                <div className='rightText'>개런티 프로그램 적용 상품</div>
            </S.InfoTop>
            <S.ItemContainer>
                <S.ItemNum>{props.info.itemNum}</S.ItemNum>
                <S.DetailContainer>
                    <div className='tagContainer'>
                        <div className='standard'>스탠다드</div>
                        <div className='depart'>출발 예정</div>
                    </div>
                    <div className='info'>여행상품 핵심 정보</div>
                </S.DetailContainer>
                <S.Title>{props.info.title}</S.Title>
                <S.HashTag>{props.info.hashtag}</S.HashTag>
                <S.Explanation>{props.info.deal}</S.Explanation>
            </S.ItemContainer>
        </S.Wrapper>
    );
};
export default Detail;
