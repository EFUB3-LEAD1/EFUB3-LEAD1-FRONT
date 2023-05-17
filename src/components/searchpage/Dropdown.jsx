import { S } from './Dropdown.style';

const Dropdown = props => {
    if (props.id === 0) {
        return (
            <S.Wrapper>
                <S.Ul>
                    <S.List>베트남</S.List>
                    <S.List>필리핀</S.List>
                    <S.List>말레이시아</S.List>
                    <S.List>라오스</S.List>
                    <S.List>브루나이</S.List>
                </S.Ul>
                <S.Ul>
                    <S.List>태국</S.List>
                    <S.List>싱가포르</S.List>
                    <S.List>인도네시아</S.List>
                    <S.List>캄보디아</S.List>
                </S.Ul>
            </S.Wrapper>
        );
    } else {
        return (
            <S.Wrapper>
                <S.Ul>
                    <S.List>스위스</S.List>
                    <S.List>체코</S.List>
                    <S.List>헝가리</S.List>
                    <S.List>프랑스</S.List>
                    <S.List>독일</S.List>
                    <S.List>포르투갈</S.List>
                    <S.List>그리스</S.List>
                </S.Ul>
                <S.Ul>
                    <S.List>크로아티아</S.List>
                    <S.List>노르웨이</S.List>
                    <S.List>스페인</S.List>
                    <S.List>오스트리아</S.List>
                    <S.List>영국</S.List>
                    <S.List>이탈리아</S.List>
                </S.Ul>
            </S.Wrapper>
        );
    }
};

export default Dropdown;
