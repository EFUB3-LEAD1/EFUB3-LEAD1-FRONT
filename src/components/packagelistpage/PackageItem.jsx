import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { S } from './PackageItem.style';
import thumb from '../../assets/packagelistpage/thumbnail.png';
import best_item from '../../assets/packagelistpage/best_item.png';
import early_sold from '../../assets/packagelistpage/early_sold_out.png';
import this_week from '../../assets/packagelistpage/this_week_deal.png';

const PackageItem = ({
    id,
    thumbnail,
    title,
    hashtag,
    explanation,
    price,
    originalPrice,
    deal,
}) => {
    const dealImage = [this_week, best_item, early_sold];
    const nav = useNavigate();
    return (
        <S.Wrapper>
            <S.ImageContainer>
                <S.Thumbnail
                    src={thumb}
                    onClick={() => nav(`/whole-package/detail/${id}`)}
                ></S.Thumbnail>
                <S.Deal src={dealImage[deal]} />
            </S.ImageContainer>
            <S.Info>
                <S.Title>{title}</S.Title>
                <S.HashTag>{hashtag}</S.HashTag>
                <S.Explanation>{explanation}</S.Explanation>
                <S.Price>
                    <div>{price}</div>
                    <S.OriginalPrice>{originalPrice}</S.OriginalPrice>
                </S.Price>
            </S.Info>
        </S.Wrapper>
    );
};
export default PackageItem;
