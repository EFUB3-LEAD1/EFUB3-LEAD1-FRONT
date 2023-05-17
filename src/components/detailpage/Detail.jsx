import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { D } from './Detail.style';

import { BiArrowBack } from 'react-icons/bi';

const Detail = () => {
    const nav = useNavigate();
    const { id } = useParams();
    return (
        <D.Wrapper>
            <BiArrowBack
                size='30'
                color='var(--white)'
                onClick={() => nav(-1)}
            />
        </D.Wrapper>
    );
};

export default Detail;
