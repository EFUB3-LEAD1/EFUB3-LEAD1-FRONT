import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
S.TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    height: 50px;
`;
S.Logo = styled.img`
    width: 100px;
    margin-bottom: 10px;
`;
S.MyPageBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
        font-size: 0.6rem;
        font-weight: 400;
        margin-top: 5px;
    }
`;

export { S };
