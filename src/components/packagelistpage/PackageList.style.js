import styled from 'styled-components';
import background from '../../assets/packagelistpage/background.png';

const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
    height: auto;
    padding-bottom: 100px;
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
    box-shadow: 0px -1px 5px rgba(150, 150, 150, 0.2);
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
    margin-top: 60px;
    width: 85%;
    height: 66px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);
    border: none;
    border-radius: 11px;
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
S.SearchBtn = styled.button`
    margin-top: 3%;
    width: 85%;
    height: 56px;
    background-color: var(--purple1);
    color: white;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    border-radius: 11px;
`;
S.PackageList = styled.div`
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export { S };
