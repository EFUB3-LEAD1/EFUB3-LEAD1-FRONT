import styled from 'styled-components';

const M = {};
M.Wrapper = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
M.TopBar = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 700;
    svg {
        margin: 0 15px;
    }
`;
M.Profile = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: lightgray;
    margin-top: 11vh;
`;
M.Name = styled.div`
    margin: 20px 0;
    display: flex;
    font-size: 1.3rem;
    font-weight: 600;
    svg {
        position: absolute;
        margin: 3px 0 0 60px;
    }
`;
M.GrayDiv = styled.div`
    width: 80%;
    height: 45px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #f5f5f5;
    font-size: 0.9rem;
`;
M.TopDiv = styled.div`
    width: 80%;
    height: 8vh;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .inner {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .number {
        color: var(--purple1);
        font-size: 1.5rem;
        font-weight: 700;
    }
    .text {
        margin-top: 5px;
        color: var(--gray);
        font-size: 0.8rem;
    }
`;
M.BottomDiv = styled.div`
    width: 80%;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    padding: 10px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    margin: 10px 0 30px 0;
    .subtitle {
        color: dimgray;
        font-size: 1rem;
        margin: 10px 0 20px 0;
    }
    .inner {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .flex {
        display: flex;
        align-items: center;
        width: 45%;
        padding: 10px 0;
        svg {
            margin-left: 3px;
        }
    }
    .number {
        color: var(--purple1);
        font-size: 1.3rem;
        font-weight: 700;
        margin-left: 7px;
    }
    .text {
        font-weight: 600;
        font-size: 1.2rem;
    }
`;
export { M };
