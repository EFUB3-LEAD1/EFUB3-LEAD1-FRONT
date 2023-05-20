import React from 'react';
import styled from 'styled-components';
import no_result from '../../assets/searchresultpage/no_result.svg';

const NoResult = () => {
    return (
        <Wrapper>
            <img src={no_result} width='20%' />
            <Text>검색 결과가 없습니다.</Text>
            <SmallText>
                필터를 변경해보거나, 다른 날짜를 검색해보세요.
            </SmallText>
        </Wrapper>
    );
};

export default NoResult;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 80px 0px;
`;

const Text = styled.div`
    color: #969696;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 7%;
`;

const SmallText = styled.div`
    color: #969696;
    text-align: center;
    font-weight: 400;
    font-size: 0.75rem;
    margin-top: 3%;
`;
