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
    justify-content: ${props => props.justify};
    margin: 0% 5% 3% 5%;
    .set {
        margin-right: 3%;
    }
`;
S.SearchInfo = styled.div`
    color: #5583f7;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0% 3%;
`;
S.SearchDrop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray2);
    border-radius: 10px;
    padding: 3% 3%;
    margin: 0% 2.5%;
    color: var(--purple5);
    font-size: 0.75rem;
    font-weight: 600;
`;
S.Line = styled.div`
    background-color: var(--gray2);
    width: 100%;
    height: ${props => props.height};
`;
S.Total = styled.div`
    font-size: 0.85rem;
    font-weight: 600;
    margin: 5% 0%;
`;
export { S };
