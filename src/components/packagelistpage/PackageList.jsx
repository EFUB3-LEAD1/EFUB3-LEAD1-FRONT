import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import NavigationBar from '../_common/NavigationBar';
import PackageItem from './PackageItem';

import { S } from './PackageList.style';
import arrow from '../../assets/packagelistpage/arrow_left.png';
import search from '../../assets/packagelistpage/search.svg';
import thumbnail from '../../assets/packagelistpage/thumbnail.png';

const PackageList = () => {
    const pack = [
        {
            id: 1,
            thumbnail: { thumbnail },
            title: '서유럽 4국 10일',
            hashtag:
                '#시내호텔 2박 # 융프라우요흐 # 에펠탑 전망대 # 세느강유람선 # 베네치아 대운하투어 # 런던',
            explanation: '단 일주일간 40만원 할인',
            price: '4,499,000 원 ~',
            originalPrice: '4,899,000원',
            deal: 0,
        },
        {
            id: 2,
            thumbnail: { thumbnail },
            title: '서유럽 4국 10일',
            hashtag: '#시내호텔 2박 # 융프라우요흐 # 에펠탑 전망대',
            explanation: '단 일주일간 40만원 할인',
            price: '4,499,000 원 ~',
            originalPrice: '4,899,000원',
            deal: 0,
        },
    ];
    const nav = useNavigate();
    return (
        <S.Wrapper>
            <S.TopBar>
                <S.BackBtn onClick={() => nav('/')}>
                    <img src={arrow} width={25} />
                </S.BackBtn>
                <S.Title>전체 패키지 여행</S.Title>
            </S.TopBar>
            <S.SearchContainer>
                <S.SearchInput placeholder='떠나고 싶은 여행지가 있나요?' />
                <img src={search} width={25} />
            </S.SearchContainer>
            <S.SearchBtn onClick={() => nav('/search')}>검색</S.SearchBtn>
            <S.PackageList>
                {pack.map(item => {
                    console.log(item.thumbnail);
                    return (
                        <PackageItem
                            id={item.id}
                            thumbnail={item.thumbnail}
                            title={item.title}
                            hashtag={item.hashtag}
                            explanation={item.explanation}
                            price={item.price}
                            originalPrice={item.originalPrice}
                            deal={item.deal}
                        />
                    );
                })}
            </S.PackageList>
            <NavigationBar />
        </S.Wrapper>
    );
};

export default PackageList;
