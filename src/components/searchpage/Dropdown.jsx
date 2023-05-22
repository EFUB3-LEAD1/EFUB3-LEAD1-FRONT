import { S } from './Dropdown.style';
import { useNavigate } from 'react-router';

const Dropdown = ({ nations }) => {
    const nav = useNavigate();
    return (
        <S.Wrapper>
            {nations.map(nation => {
                return (
                    <S.List
                        onClick={() =>
                            nav('/search/result', { state: { value: nation } })
                        }
                    >
                        {nation}
                    </S.List>
                );
            })}
        </S.Wrapper>
    );
};

export default Dropdown;
