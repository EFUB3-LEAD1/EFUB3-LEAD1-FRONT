import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 80px 0px;
`;
S.TopBar = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    padding: 10px 0px;
    height: 50px;
    width: 100%;
    @media (min-width: 576px) {
        width: 390px;
    }
    background-color: white;
    z-index: 1;
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
    margin-left: 20px;
`;
S.Container = styled.div`
    display: flex;
    align-items: center;
    margin: 0% 5% 3% 5%;
    justify-content: ${props => props.justify};
`;
S.Line = styled.div`
    margin-left: 5%;
    background-color: black;
    width: 90%;
    height: ${props => props.height};
`;
S.Total = styled.div`
    font-size: 0.85rem;
    font-weight: 600;
    margin: 5% 0%;
`;
export { S };
