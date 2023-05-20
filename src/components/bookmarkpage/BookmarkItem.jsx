import React from 'react';
import styled from 'styled-components';
import calendar from '../../assets/searchresultpage/calendar_2.svg';
import hotel from '../../assets/searchresultpage/hotel.svg';
import del from '../../assets/bookmarkpage/delete.svg';

const BookmarkItem = props => {
    return (
        <Wrapper>
            <Container margin='5% 0%'>
                <BlackBadge>패키지/호텔</BlackBadge>
                <WhiteBadge>투어/입장권</WhiteBadge>
            </Container>
            <Container justify='space-between'>
                <Total>총 {props.total_num}개</Total>
                <Delete>전체 삭제</Delete>
            </Container>
            <Badge>전체 패키지</Badge>
            <Container justify='space-between'>
                <Title>서유럽 4국 10일</Title>
                <img src={del} />
            </Container>
            <HashTag>
                #시내호텔 2박 #융프라우요흐 #에펠탑 전망대 #세느강유람선
                #베네치아 대운하투어 #런던
            </HashTag>
            <Container margin='4% 0%'>
                <img src={calendar} />
                <Text>10일</Text>
                <img src={hotel} />
                <Text>3/4성급</Text>
            </Container>
            <Price>
                <span className='people'>1인 </span>4,499,000 원~
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

const Total = styled.div`
    font-size: 0.85rem;
    font-weight: 600;
    margin: 5% 0%;
`;

const Delete = styled(Total)`
    font-size: 0.75rem;
    color: var(--gray);
`;

const TopBadge = styled.div`
    border-radius: 19.5px;
    font-size: 0.9rem;
    font-weight: 400;
    padding: 2.5% 3.5%;
    margin-right: 5%;
`;
const BlackBadge = styled(TopBadge)`
    color: white;
    background-color: #303032;
`;
const WhiteBadge = styled(TopBadge)`
    color: var(--gray);
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
`;
