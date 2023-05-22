import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GetLikes } from '../../api/user';
import { S } from './Bookmark.style';
import NavigationBar from '../_common/NavigationBar';
import BookmarkItem from './BookmarkItem';
import BookmarkBar from './BookmarkBar';
import NoResult from './NoResult';
import arrow from '../../assets/packagelistpage/arrow_left.png';
const Bookmark = () => {
    const nav = useNavigate();
    const [likes, setLikes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('token');
    const [isLogin, setIsLogin] = useState(!!token);
    useEffect(() => {
        GetLikes()
            .then(res => {
                setLikes(res);
                setIsLoading(false);
                console.log(likes);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <S.Wrapper>
            <S.TopBar>
                <S.BackBtn onClick={() => nav('/')}>
                    <img src={arrow} width={25} />
                </S.BackBtn>
                <S.Title>찜</S.Title>
            </S.TopBar>
            <S.Line height='2px' />
            {!isLoading && isLogin && <BookmarkBar total_num={likes.length} />}
            {likes.length !== 0 ? (
                !isLoading &&
                likes.map(item => {
                    return (
                        <BookmarkItem
                            key={item.tourId}
                            id={item.tourId}
                            title={item.title}
                            subTitle={item.subTitle}
                            price={item.price}
                            duration={item.tourPlan.duration}
                        />
                    );
                })
            ) : (
                <NoResult />
            )}
            <NavigationBar />
        </S.Wrapper>
    );
};

export default Bookmark;
