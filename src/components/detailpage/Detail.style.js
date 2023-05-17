import styled from 'styled-components';

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
