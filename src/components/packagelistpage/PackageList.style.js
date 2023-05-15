import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
S.TopBar = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    height: 50px;
`;
S.Title = styled.div`
    margin-left: 10px;
    font-size: 1.2rem;
    font-weight: 800;
`;
S.BackBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
S.Background = styled.img`
    width: 100%;
    position: relative;
`;
S.Blur = styled.img`
    width: 100%;
    position: absolute;
    margin-top: 150px;
`;

export { S };
