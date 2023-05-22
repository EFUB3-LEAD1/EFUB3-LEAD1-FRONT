import styled from 'styled-components';

const D = {};
D.Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .back {
        position: absolute;
        top: 0;
        left: 0;
        padding: 20px;
        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3));
    }
`;
D.InfoContainer = styled.div`
    width: 100%;
    height: 300px;
`;
D.InfoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
D.InfoTop = styled.div`
    position: absolute;
    width: 100%;
    height: 50px;
    margin-top: 250px;
    background-color: var(--purple3);
    border-radius: 20px 20px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 0.8rem;
    .leftText {
        margin-left: 3%;
    }
    .rightText {
        margin-left: 1%;
        color: var(--purple1);
    }
`;
D.Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 20px;
    padding-bottom: 130px;
    .content {
        margin: 18px 0 0 8px;
        font-size: 0.9rem;
        word-break: keep-all;
    }
`;
D.ItemNum = styled.div`
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--gray);
`;
D.DetailContainer = styled.div`
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
        color: var(--purple4);
        border-style: solid;
        border-radius: 3px;
        border-width: 2px;
        padding: 3px 5px;
        margin-left: 5%;
    }
    .info {
        font-size: 0.8rem;
        font-weight: 500;
        text-decoration: underline;
    }
`;
D.Title = styled.div`
    margin: 2% 0;
    color: black;
    font-weight: 700;
    font-size: 1.3rem;
`;
D.HashTag = styled.div`
    font-size: 1.1rem;
    color: var(--purple4);
`;
D.Explanation = styled.div`
    color: var(--gray);
    font-size: 1rem;
    font-weight: 300;
    margin-top: 5%;
`;
D.FlexContainer = styled.div`
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        display: flex;
        align-items: center;
        font-size: 1rem;
        svg {
            margin-right: 5px;
        }
    }
    .inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .button {
            border: 1px solid var(--purple4);
            border-radius: 3px;
            padding: 2px 7px;
            font-size: 0.8rem;
            color: var(--purple4);
            margin-bottom: 5px;
        }
        span {
            font-size: 0.8rem;
            color: var(--purple4);
        }
    }
`;
D.Nation = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    font-size: 0.9rem;
    border-radius: 10px;
    margin-top: 25px;
    .nation {
        font-weight: 700;
        margin-left: 15px;
    }
    .blue {
        color: var(--blue);
    }
`;
D.IconRect = styled.div`
    padding-top: 20px;
    width: 18%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 60%;
    }
    .img1 {
        width: 50%;
        margin: 5px 0 3px 0;
    }
    .text {
        margin-top: 10px;
        text-align: center;
        width: 90%;
        font-size: 0.8rem;
        word-break: keep-all;
    }
`;
D.BottomBar = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    border-top: 1px solid #d9d9d9;
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 576px) {
        width: 390px;
    }
    .circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #d9d9d9;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
    }
    .button {
        color: var(--white);
        background-color: var(--purple1);
        width: 60%;
        height: 50px;
        border-radius: 26px;
        margin: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 1rem;
        :active {
            background-color: var(--purple2);
        }
    }
`;
export { D };
