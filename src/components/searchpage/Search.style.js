import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
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
S.SearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    margin-top: 70px;
    width: 100%;
    height: 66px;
    border-bottom-style: solid;
    border-width: 1px;
    border-color: var(--gray);
    img {
        width: 25px;
    }
`;
S.SearchInput = styled.input`
    border: 0;
    outline: 0;
    margin-left: 7%;
    width: 80%;
    color: black;
    font-weight: 700;
    font-size: 1rem;
`;
S.Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 7% 7%;
`;
S.MiniTitle = styled.div`
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--purple1);
`;
S.Dropdown = styled.div`
    width: 100%;
    height: 60px;
    margin: 5px 0px;
    background-color: var(--gray2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
        margin-left: 5%;
        font-weight: 600;
    }
    img {
        margin-right: 5%;
    }
`;
export { S };
