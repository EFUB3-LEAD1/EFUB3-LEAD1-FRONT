import React from 'react';
import Detail from '../components/detailpage/Detail';
import infoImage from '../assets/detailpage/InfoImage.png';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
    let { id } = useParams();
    const info = [
        {
            id: 1,
            infoImage: { infoImage },
            title: '서유럽 4국 10일',
            hashtag:
                '#시내호텔 2박 # 융프라우요흐 # 에펠탑 전망대 # 세느강유람선 # 베네치아 대운하투어 # 런던',
            explanation: '단 일주일간 40만원 할인',
            price: '4,499,000 원 ~',
            originalPrice: '4,899,000원',
            deal: 0,
        },
        {
            id: 2,
            infoImage: { infoImage },
            title: '서유럽 4국 10일',
            hashtag: '#시내호텔 2박 # 융프라우요흐 # 에펠탑 전망대',
            explanation: '단 일주일간 40만원 할인',
            price: '4,499,000 원 ~',
            originalPrice: '4,899,000원',
            deal: 0,
        },
    ];
    return <Detail info={info[id - 1]} />;
};

export default DetailPage;
