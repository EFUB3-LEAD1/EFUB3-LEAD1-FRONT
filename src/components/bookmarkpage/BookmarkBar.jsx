import React from 'react';
import styled from 'styled-components';

const BookmarkBar = ({ total_num }) => {
    return (
        <Wrapper>
            <Container margin='5% 0%'>
                <BlackBadge>패키지/호텔</BlackBadge>
                <WhiteBadge>투어/입장권</WhiteBadge>
            </Container>
            <Container justify='space-between'>
                <Total>총 {total_num}개</Total>
                <Delete>전체 삭제</Delete>
            </Container>
        </Wrapper>
    );
};

export default BookmarkBar;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0% 5%;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: ${props => props.margin};
    justify-content: ${props => props.justify};
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
