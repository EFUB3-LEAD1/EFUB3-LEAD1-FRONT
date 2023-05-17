import styled from 'styled-components';

const L = {};
L.Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
L.Logo = styled.img`
    width: 40%;
    margin-bottom: 10vh;
`;
L.Input = styled.input`
    margin: 5px;
    width: 60%;
    height: 40px;
    border: 1px solid var(--gray);
    border-radius: 10px;
    outline: 0;
    padding: 5px 10px;
    font-size: 1rem;
`;
L.LoginBtn = styled.button`
    width: 60%;
    height: 50px;
    border: 0;
    border-radius: 20px;
    padding: 0 10px;
    margin: 30px 0 50px 0;

    background-color: ${props =>
        props.isFilled ? 'var(--purple1)' : 'var(--purple3)'};
    color: ${props => (props.isFilled ? 'var(--white)' : 'var(--gray)')};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
`;
L.OtherBtn = styled.div`
    color: var(--gray);
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    svg {
        margin-left: 8px;
    }
`;
export { L };
