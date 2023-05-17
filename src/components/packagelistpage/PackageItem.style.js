import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
S.Thumbnail = styled.img`
    margin-left: 7.5%;
    margin-bottom: 5%;
    width: 85%;
`;
S.Deal = styled.img`
    position: absolute;
    margin-top: 4%;
    margin-left: 35%;
    width: 10%;
`;
S.Info = styled.div`
    margin-left: 5%;
    margin-bottom: 10%;
`;
S.Title = styled.div`
    color: black;
    font-weight: 700;
    font-size: 1.2rem;
`;
S.HashTag = styled.div`
    color: #874dcc;
`;
S.Explanation = styled.div`
    color: #646464;
    font-size: 0.75rem;
    font-weight: 300;
    margin-top: 3%;
    margin-bottom: 4%;
`;
S.Price = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
S.OriginalPrice = styled.div`
    margin-left: 3%;
    color: #646464;
    font-size: 0.75rem;
    font-weight: 400;
    text-decoration: line-through;
`;
export { S };
