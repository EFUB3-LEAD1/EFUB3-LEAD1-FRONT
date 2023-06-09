import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import calendar from '../../assets/searchresultpage/calendar_2.svg';
import hotel from '../../assets/searchresultpage/hotel.svg';
import del from '../../assets/bookmarkpage/delete.svg';

const BookmarkItem = ({ key, id, title, subTitle, price, duration }) => {
    const nav = useNavigate();
    return (
        <Wrapper onClick={() => nav(`/whole-package/detail/${id}`)}>
            <Badge>전체 패키지</Badge>
            <Container justify='space-between'>
                <Title>{title}</Title>
                <img src={del} />
            </Container>
            <HashTag>{subTitle}</HashTag>
            <Container margin='4% 0%'>
                <img src={calendar} />
                <Text>{duration}</Text>
                <img src={hotel} />
                <Text>3/4성급</Text>
            </Container>
            <Price>
                <span className='people'>1인 </span>
                {price} 원~
            </Price>
            <Line />
        </Wrapper>
    );
};

export default BookmarkItem;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0% 5%;
`;

const Badge = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
    background-color: black;
    color: white;
    border-radius: 2px;
    padding: 0.5% 1%;
    width: 17%;
`;

const Title = styled.div`
    font-weight: 700;
    color: black;
    margin-top: 2%;
    margin-bottom: 3%;
`;

const HashTag = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
    color: #9b9b9b;
`;

const Text = styled(HashTag)`
    margin: 0% 2%;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: ${props => props.margin};
    justify-content: ${props => props.justify};
`;

const Price = styled.div`
    font-weight: 800;
    color: black;
    text-align: end;
    .people {
        font-size: 0.9rem;
        font-weight: 700;
    }
`;

const Line = styled.div`
    background-color: var(--gray2);
    width: 100%;
    height: 1.5px;
    margin-top: 6%;
    margin-bottom: 6%;
`;
