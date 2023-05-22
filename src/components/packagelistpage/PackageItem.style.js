import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
S.ImageContainer = styled.div`
    position: relative;
`;
S.Thumbnail = styled.img`
    margin-left: 7.5%;
    margin-bottom: 5%;
    width: 85%;
    border-radius: 5%;
`;
S.Deal = styled.img`
    position: absolute;
    top: 12%;
    right: 15%;
    width: 15%;
`;
S.Info = styled.div`
    margin: 0% 5% 10% 5%;
`;
S.Title = styled.div`
    color: black;
    font-weight: 700;
    font-size: 1.2rem;
`;
S.HashTag = styled.div`
    margin-top: 0.5%;
    font-weight: 500;
    color: #874dcc;
`;
S.Explanation = styled.div`
    color: #646464;
    font-size: 0.75rem;
    font-weight: 300;
    margin-top: 4%;
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
