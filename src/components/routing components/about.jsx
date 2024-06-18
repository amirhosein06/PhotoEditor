import styled from "styled-components";

const AboutContain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3%;
  font-family: "B Homa";
  font-size: 25px;
  font-weight: 500;
  & span{
    gap: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px !important;
  };
  & a{
    color: #000;
  };
`;
const LastLink = styled.a`
   font-size: 18px;
`;

const About = () => {
    return ( 
        <AboutContain>
            امــیــرحــســیــن ذوالــفــقــاری
            <span>
             <a href="https://www.linkedin.com/in/amirhosein-zolfaghari06/"><i class="bi bi-linkedin"></i></a>
             <a href="https://github.com/amirhosein06"><i class="bi bi-github"></i></a>
            </span>
            <LastLink href="https://github.com/amirhosein06?tab=repositories">نـمـونـه کـار های دیـگـر</LastLink>
        </AboutContain>
     );
}
 
export default About;