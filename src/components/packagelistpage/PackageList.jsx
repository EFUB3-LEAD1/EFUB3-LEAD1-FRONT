import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GetAllPackages } from '../../api/tour';
import NavigationBar from '../_common/NavigationBar';
import PackageItem from './PackageItem';

import { S } from './PackageList.style';
import arrow from '../../assets/packagelistpage/arrow_left.png';
import search from '../../assets/packagelistpage/search.svg';

const PackageList = () => {
    const nav = useNavigate();
    const [pack, setPack] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [userInput, setUserInput] = useState('');
    const saveInput = e => {
        setUserInput(e.target.value);
    };
    useEffect(() => {
        GetAllPackages()
            .then(res => {
                setPack(res.tours);
                setIsLoading(false);
                console.log(pack);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <S.Wrapper>
            <S.TopBar>
                <S.BackBtn onClick={() => nav('/')}>
                    <img src={arrow} width={25} />
                </S.BackBtn>
                <S.Title>전체 패키지 여행</S.Title>
            </S.TopBar>
            <S.SearchContainer>
                <S.SearchInput
                    placeholder='떠나고 싶은 여행지가 있나요?'
                    value={userInput}
                    onChange={saveInput}
                />
                <img src={search} width={25} />
            </S.SearchContainer>
            <S.SearchBtn
                onClick={() =>
                    nav('/search/result', { state: { value: userInput } })
                }
            >
                검색
            </S.SearchBtn>
            <S.PackageList>
                {!isLoading &&
                    pack.map(item => {
                        return (
                            <PackageItem
                                key={item.tourId}
                                id={item.tourId}
                                thumbnail={item.imageUrl}
                                title={item.title}
                                hashtag={item.subTitle}
                                explanation={item.contents}
                                price={item.price}
                                originalPrice={'4,999,000'}
                                deal={item.category}
                            />
                        );
                    })}
            </S.PackageList>
            <NavigationBar />
        </S.Wrapper>
    );
};

export default PackageList;
