import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GetSpots } from '../../api/tour';
import { S } from './Search.style';
import arrow from '../../assets/packagelistpage/arrow_left.png';
import search from '../../assets/searchpage/search.svg';
import up from '../../assets/searchpage/up.svg';
import down from '../../assets/searchpage/down.svg';
import Dropdown from './Dropdown';
const Search = () => {
    const nav = useNavigate();
    const [view, setView] = useState(true);
    const [view2, setView2] = useState(true);
    const [spot, setSpot] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [userInput, setUserInput] = useState('');
    useEffect(() => {
        GetSpots()
            .then(res => {
                setSpot(res);
                console.log(spot);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);
    const saveInput = e => {
        setUserInput(e.target.value);
    };
    return (
        <S.Wrapper>
            <S.TopBar>
                <S.BackBtn onClick={() => nav('/')}>
                    <img src={arrow} width={25} />
                </S.BackBtn>
                <S.Title>여행지 검색</S.Title>
            </S.TopBar>
            <S.SearchContainer>
                <S.SearchInput
                    placeholder='국가명으로 검색'
                    value={userInput}
                    onChange={saveInput}
                />
                <img
                    src={search}
                    onClick={() =>
                        nav('/search/result', { state: { value: userInput } })
                    }
                />
            </S.SearchContainer>
            {!isLoading && (
                <S.Container>
                    <S.MiniTitle>주요지역</S.MiniTitle>
                    <S.Dropdown onClick={() => setView(!view)}>
                        <div className='text'>{spot[0].continent}</div>
                        {view ? <img src={up} /> : <img src={down} />}
                    </S.Dropdown>
                    {view && <Dropdown nations={spot[0].nations} />}
                    <S.Dropdown onClick={() => setView2(!view2)}>
                        <div className='text'>{spot[1].continent}</div>
                        {view2 ? <img src={up} /> : <img src={down} />}
                    </S.Dropdown>
                    {view2 && <Dropdown nations={spot[1].nations} />}
                </S.Container>
            )}
        </S.Wrapper>
    );
};

export default Search;

/*
                <S.Dropdown>
                    <div className='text'>일본</div>
                    <img src={down} />
                </S.Dropdown>*/
