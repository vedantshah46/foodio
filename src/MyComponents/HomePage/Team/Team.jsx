import React from 'react'
import styled from "styled-components";
import './Team.css'; // Import your custom CSS file
import spoonfork from './Images/'

// Styled Components
const TeamSection = styled.section`
  text-align: center;
  background-color: #0b0b0b;
  padding: 60px 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  position: relative;

  &:before {
    content: "Our Team";
    font-size: 0.8rem;
    position: absolute;
    top: -30px;
    left: 0;
    right: 0;
    color: #e63946;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #d3d3d3;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TeamWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const MemberCard = styled.div`
  position: relative;
  width: 250px;
  text-align: center;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #e63946; /* Red Circle border */
  }

  /* Spoon/Fork on hover */
  &:hover::after {
    content: "🍴"; /* Placeholder - you can replace with a custom icon */
    position: absolute;
    top: 0;
    right: -30px;
    font-size: 2.5rem;
    color: #e63946;
    transform: rotate(-45deg);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberName = styled.h3`
  font-size: 1.3rem;
  margin-top: 15px;
  color: white;
`;

const Position = styled.p`
  font-size: 1rem;
  color: #e63946;
`;

const SocialIcons = styled.div`
  margin-top: 10px;

  a {
    color: white;
    font-size: 1.5rem;
    margin: 0 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #e63946;
    }
  }
`;
const Team = () => {
  return (
 <>
        <TeamSection>
      <Title>Our Culinary Artist</Title>
      <Subtitle>
        The kitchen brings a symphony of tastes to every plate, inviting you on a journey where each bite tells a story of skill, passion, and devotion to the craft.
      </Subtitle>
      <TeamWrapper>
        <MemberCard>
          <ImageWrapper>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Robert Williamson" />
          </ImageWrapper>
          <MemberName>Robert Williamson</MemberName>
          <Position>Kitchen Supervisor</Position>
          <SocialIcons>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-xing"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </SocialIcons>
        </MemberCard>

        <MemberCard>
          <ImageWrapper>
            <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="John Paul" />
          </ImageWrapper>
          <MemberName>John Paul</MemberName>
          <Position>Sous Culinaire</Position>
          <SocialIcons>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-xing"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </SocialIcons>
        </MemberCard>

        <MemberCard>
          <ImageWrapper>
            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Jane" />
          </ImageWrapper>
          <MemberName>Sarah Jane</MemberName>
          <Position>Junior Executive Chef</Position>
          <SocialIcons>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-xing"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </SocialIcons>
        </MemberCard>
      </TeamWrapper>
    </TeamSection>
 </>
  )
}

export default Team
