import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { FiSearch, FiPlus } from 'react-icons/fi';
import { BiMenu, BiHeart } from 'react-icons/bi';

const NavigationBar = () => {
  const nav = useNavigate();
  return (
    <Wrapper>
      <BtnRect>
        <BiMenu size='38' />
        <div className='text'>메뉴</div>
      </BtnRect>
      <BtnRect onClick={() => nav('/searck')}>
        <FiSearch size='30' style={{ marginTop: '3px' }} />
        <div className='text'>검색</div>
      </BtnRect>
      <BtnRect onClick={() => nav('/bookmark')}>
        <BiHeart size='32' style={{ marginTop: '3px' }} />
        <div className='text'>찜</div>
      </BtnRect>
      <BtnRect>
        <Circle>
          <FiPlus size='40' color='#ffffff' />
        </Circle>
      </BtnRect>
    </Wrapper>
  );
};

export default NavigationBar;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  @media (min-width: 576px) {
    width: 390px;
  }
  height: 85px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 15px;
  box-shadow: 0px -1px 5px rgba(150, 150, 150, 0.2);
`;
const BtnRect = styled.div`
  width: 25%;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .text {
    font-size: 0.7rem;
    color: var(--gray);
  }
`;
const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--purple1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
`;
