import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { S } from './Search.style';
import arrow from '../../assets/packagelistpage/arrow_left.png';
import search from '../../assets/searchpage/search.svg';
import up from '../../assets/searchpage/up.svg';
import down from '../../assets/searchpage/down.svg';
import Dropdown from './Dropdown';
const Search = () => {
    const nav = useNavigate();
    const [view, setView] = useState(false);
    const [view2, setView2] = useState(true);

    const [userInput, setUserInput] = useState('');
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
            <S.Container>
                <S.MiniTitle>주요지역</S.MiniTitle>
                <S.Dropdown onClick={() => setView(!view)}>
                    <div className='text'>동남아</div>
                    {view ? <img src={up} /> : <img src={down} />}
                </S.Dropdown>
                {view && <Dropdown id={0} />}
                <S.Dropdown onClick={() => setView2(!view2)}>
                    <div className='text'>유럽</div>
                    {view2 ? <img src={up} /> : <img src={down} />}
                </S.Dropdown>
                {view2 && <Dropdown id={1} />}
                <S.Dropdown>
                    <div className='text'>일본</div>
                    <img src={down} />
                </S.Dropdown>
            </S.Container>
        </S.Wrapper>
    );
};

export default Search;
