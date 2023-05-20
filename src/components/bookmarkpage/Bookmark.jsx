import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { S } from './Bookmark.style';
import NavigationBar from '../_common/NavigationBar';
import BookmarkItem from './BookmarkItem';
import NoResult from './NoResult';
import arrow from '../../assets/packagelistpage/arrow_left.png';
const Bookmark = () => {
    const nav = useNavigate();
    const total_num = 0;
    return (
        <S.Wrapper>
            <S.TopBar>
                <S.BackBtn onClick={() => nav('/')}>
                    <img src={arrow} width={25} />
                </S.BackBtn>
                <S.Title>찜</S.Title>
            </S.TopBar>
            <S.Line height='2px' />
            {total_num !== 0 ? (
                <BookmarkItem total_num={total_num} />
            ) : (
                <NoResult />
            )}
            <NavigationBar />
        </S.Wrapper>
    );
};

export default Bookmark;
