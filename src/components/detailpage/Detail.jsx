import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import NavigationBar from '../_common/NavigationBar';
import { S } from './Detail.style';
import back_arrow from '../../assets/detailpage/back_arrow.svg';

const Detail = props => {
    const nav = useNavigate();
    // info[id].title
    return (
        <S.Wrapper>
            <S.InfoImage>
                <img src={props.info.infoImage.infoImage} />
            </S.InfoImage>
            <S.BackBtn onClick={() => nav('/whole-package')}>
                <img src={back_arrow} width={25} />
            </S.BackBtn>
            <NavigationBar />
        </S.Wrapper>
    );
};
export default Detail;
