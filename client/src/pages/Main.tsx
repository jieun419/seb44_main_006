import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import mainImg from '../assets/mainImg.png';
import cssToken from '../styles/cssToken';
import CursorPointer from '../components/ui/cursor/cursorPointer';

const MainContainer = styled.main`
  cursor: none;
  display: flex;
`;

const SectionBox = styled.section`
  height: ${cssToken.HEIGHT['h-screen']};
  width: ${cssToken.WIDTH['w-screen']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainLink = styled(Link)`
  cursor: none;
  text-decoration: none;
  outline: none;
  font-size: 80px;
  font-weight: ${cssToken.FONT_WEIGHT.bold};
  > span {
    display: block;
    width: ${cssToken.WIDTH['w-full']};
  }
  &:hover span {
    display: none;
  }
`;

const CommunitySection = styled(SectionBox)`
  background: ${cssToken.COLOR.white};
  flex: 1;
  transition: 0.3s;
  > a {
    color: ${cssToken.COLOR['point-900']};
    &::after {
      content: '';
    }
    &:hover::after {
      content: '커뮤니티';
    }
  }
`;

const ScheduleSection = styled(SectionBox)`
  background-image: url(${mainImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex: 2;
  transition: 0.3s;
  > a {
    color: ${cssToken.COLOR.white};
    &::after {
      content: '';
    }
    &:hover::after {
      content: '일정 등록';
    }
  }
`;

const Main = () => {
  const [isHovered, setIsHovered] = useState<boolean>(true);

  const handleMouseEnter = () => {
    setIsHovered((prev) => !prev);
  };
  const handleMouseLeave = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <MainContainer>
      <CursorPointer isMouseHover={isHovered} />
      <CommunitySection>
        <MainLink
          to="/"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Community</span>
        </MainLink>
      </CommunitySection>
      <ScheduleSection>
        <MainLink
          to="/"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Schedule</span>
        </MainLink>
      </ScheduleSection>
    </MainContainer>
  );
};

export default Main;
