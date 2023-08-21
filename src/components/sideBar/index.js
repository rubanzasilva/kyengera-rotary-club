import React from 'react'
//import {SideBarContainer,Icon,CloseIcon, SideBtnWrap} from './SideBarElements';
import {SideBarContainer, Icon ,CloseIcon,SideBarWrapper,SideBarMenu,SideBtnWrap,SideBarRoute,SocialMedia, SocialMediaWrap,  SocialIcons, SocialIconLink} from './sideBarElements'
import {Typography } from "antd";
//import "antd/dist/antd.css";
// import { RightOutlined } from '@ant-design/icons';
import {FaTwitter, FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';

const { Title } = Typography;

const SideBar = ({title1,title5,isOpen,toggle}) => {
    return (
        <SideBarContainer 
        // isOpen={isOpen} onClick={toggle}>
        //     <Icon onClick={toggle}>
        //         <CloseIcon/>
        //     </Icon>

        isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SideBarWrapper>
                <SideBarMenu>
                    {/* <SideBarLink to="/About"> */}
                    <SideBarRoute to="/">   
                    <Title level={5} style={{color:"#000000",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",marginTop:"6px",fontFamily:"Lato,Roboto"}}>About me</Title>
                    </SideBarRoute>

                    <SideBarRoute to="/"> 
                    <Title level={5} style={{color:"#000000",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",fontFamily:"Lato,Roboto"}}>Projects of Interest</Title>
                    </SideBarRoute>
                    
                    {/* <SideBarLink to="/RoastedBeans"> */}
                    <SideBarRoute to="/">
                    <Title level={5} style={{color:"#000000",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",fontFamily:"Lato,Roboto"}}>My Blog</Title>
                    </SideBarRoute>

                    <SideBarRoute to="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/resumeSilva.pdf" target='_blank'>
                    <Title level={5} style={{color:"#000000",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",fontFamily:"Lato,Roboto"}}>My Resume</Title>
                    </SideBarRoute>
                   

                    <SideBtnWrap>
                    <SocialMedia>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/in/silver-rubanza/" target="_blank" arial-label="LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>
                        <SocialIconLink href="https://twitter.com/countfettucine/" target="_blank" arial-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="https://github.com/rubanzasilva/" target="_blank" aria-label="Github">
                            <FaGithub/>
                        </SocialIconLink>
                        <SocialIconLink href="mailto:rubanza@rubanzasilver.xyz" target="_blank" arial-label="Email">
                            <FaEnvelope/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
{/* 
                        <SideBarRoute to="/ContactUs">
                        <Button to="/" type="link" size="medium"  style={{color:"#008000",
                       borderRadius:"6px",minWidth:"100px",marginTop:"15px"  }}>Contact Us { <RightOutlined />} </Button>
                        </SideBarRoute> */}
                    </SideBtnWrap>

                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>

    );
};

export default SideBar