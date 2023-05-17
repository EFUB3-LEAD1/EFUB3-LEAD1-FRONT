import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;
S.InfoContainer = styled.div`
    max-height: 310px;
    overflow: hidden;
`;
S.InfoImage = styled.img`
    width: 100%;
    margin-top: -20%;
`;
S.BackBtn = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
`;
S.InfoTop = styled.div`
    position: absolute;
    width: 100%;
    height: 50px;
    margin-top: 290px;
    background-color: var(--purple3);
    border-radius: 20px 20px 0px 0px;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 0.8rem;
    img {
        margin-left: 10%;
    }
    .leftText {
        margin-left: 2%;
    }
    .rightText {
        margin-left: 1%;
        color: var(--purple1);
    }
`;
S.ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;
`;
S.ItemNum = styled.div`
    margin-top: 9%;
    font-size: 0.75rem;
    font-weight: 400;
    color: #666666;
`;
S.DetailContainer = styled.div`
    margin: 2% 0%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tagContainer {
        display: flex;
        width: 200px;
        font-weight: 600;
        font-size: 0.7rem;
    }
    .standard {
        background-color: var(--purple1);
        color: white;
        border-radius: 3px;
        padding: 5px 7px;
        font-weight: 600;
        font-size: 0.7rem;
    }
    .depart {
        color: var(--purple1);
        border-style: solid;
        border-radius: 3px;
        border-width: 2px;
        padding: 3px 5px;
        margin-left: 5%;
    }
    .info {
        margin-top: 8px;
        font-size: 0.8rem;
        font-weight: 600;
        text-decoration: underline;
    }
`;
S.Title = styled.div`
    margin-top: 2%;
    color: black;
    font-weight: 700;
    font-size: 1.2rem;
`;
S.HashTag = styled.div`
    font-size: 1.1rem;
    color: #874dcc;
`;
S.Explanation = styled.div`
    color: #646464;
    font-size: 0.75rem;
    font-weight: 300;
    margin-top: 7%;
`;
export { S };
/*
const D = {};
D.Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
        position: absolute;
        top: 0;
        left: 0;
        padding: 20px;
        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3));
    }
`;
export { D };
*/