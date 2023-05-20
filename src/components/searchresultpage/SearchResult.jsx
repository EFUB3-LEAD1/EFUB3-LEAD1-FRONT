import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { S } from './SearchResult.style';
import NavigationBar from '../_common/NavigationBar';
import SearchItem from './SearchItem';
import NoResult from './NoResult';
import arrow from '../../assets/packagelistpage/arrow_left.png';
import location_icon from '../../assets/searchresultpage/location.svg';
import calendar_icon from '../../assets/searchresultpage/calendar.svg';
import user_icon from '../../assets/searchresultpage/user_single.svg';
import setting_icon from '../../assets/searchresultpage/settings.svg';
import down_icon from '../../assets/searchresultpage/down.svg';
const SearchResult = () => {
    const nav = useNavigate();
    const location = useLocation();
    const userInput = location.state.value;
    const total_num = 0;
    return (
        <S.Wrapper>
            <S.TopBar>
                <S.BackBtn onClick={() => nav('/search')}>
                    <img src={arrow} width={25} />
                </S.BackBtn>
                <S.Title>{userInput}</S.Title>
            </S.TopBar>
            <S.Container>
                <img src={location_icon} />
                <S.SearchInfo>출발지 전체</S.SearchInfo>
                <img src={calendar_icon} />
                <S.SearchInfo>05.01~10.30 (전체)</S.SearchInfo>
                <img src={user_icon} />
                <S.SearchInfo>인원 1명</S.SearchInfo>
            </S.Container>
            <S.Container justify='center'>
                <S.SearchDrop className='set'>
                    <img src={setting_icon} />
                </S.SearchDrop>
                <S.SearchDrop>
                    금주 핫딜
                    <img src={down_icon} />
                </S.SearchDrop>
                <S.SearchDrop>
                    투어 조건
                    <img src={down_icon} />
                </S.SearchDrop>
                <S.SearchDrop>
                    투어 형태
                    <img src={down_icon} />
                </S.SearchDrop>
            </S.Container>
            <S.Line height='7px' />
            <S.Container>
                <S.Total>총 {total_num}개</S.Total>
            </S.Container>
            {total_num !== 0 ? <SearchItem /> : <NoResult />}
            <NavigationBar />
        </S.Wrapper>
    );
};

export default SearchResult;
