import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 110px;
`;
S.SplashContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
S.SplashLogo = styled.img`
    width: 40%;
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
S.MainText = styled.div`
    margin: 10px 0 20px 0;
    text-align: center;
    color: var(--purple1);
    font-weight: 600;
    font-size: 1rem;
`;
S.ImgContainer = styled.div`
    width: 100%;
    display: flex;
    .inner {
        width: 50%;
        height: 35vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .text {
        width: 33%;
        position: absolute;
        color: var(--white);
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
        word-break: keep-all;
        text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
    }
`;
S.SubText = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 15px 0 25px 25px;
    font-size: 0.9rem;
    font-weight: 600;
`;
S.IconContainer = styled.div`
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    .imgdiv {
        width: 20%;
        height: 52px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .img2 {
        width: 30%;
    }
    .img3 {
        margin-left: 3px;
        width: 40%;
    }
    .img4 {
        width: 35%;
    }
    .imgtext {
        position: absolute;
        bottom: 0;
        font-size: 0.7rem;
        font-weight: 600;
    }
`;
S.MenuContainer = styled.div`
    margin: 30px 20px 10px 20px;
    height: 110px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .left-top {
        border-radius: 10px 0 0 0;
    }
    .right-top {
        border-radius: 0 10px 0 0;
    }
    .right-bottom {
        border-radius: 0 0 10px 0;
    }
    .left-bottom {
        border-radius: 0 0 0 10px;
    }
`;
S.Sale = styled.img`
    width: 8%;
    position: absolute;
    margin-bottom: 35px;
    margin-left: 60px;
    @media (min-width: 576px) {
        width: 28px;
    }
`;
S.MenuDiv = styled.div`
    background-color: var(--purple3);
    width: 32.8%;
    margin-bottom: 0.9%;
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
        font-size: 0.9rem;
        font-weight: 600;
    }
`;
S.ButtonContainer = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    .imgdiv {
        width: 25%;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .imgtext {
        margin-top: 6px;
        font-size: 0.7rem;
        font-weight: 600;
    }
    .subtext {
        margin-top: 2px;
        font-size: 0.6rem;
        font-weight: 300;
        color: var(--gray);
    }
`;

export { S };
