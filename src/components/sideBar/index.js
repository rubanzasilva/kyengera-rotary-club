import React from 'react'
//import {SideBarContainer,Icon,CloseIcon, SideBtnWrap} from './SideBarElements';
import {SideBarContainer, Icon ,CloseIcon,SideBarWrapper,SideBarMenu,SideBarRoute, SideBarLink, SideBarBtn, SideBarBtnLink} from './sideBarElements'
// import {Typography } from "antd";
//import "antd/dist/antd.css";
// import { RightOutlined } from '@ant-design/icons';
// import {FaTwitter, FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';

// const { Title } = Typography;

const SideBar = ({isOpen,toggle,info1,info2,info3,info4,info5,info6}) => {
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
                    <SideBarLink>{info1}</SideBarLink>
                    {/* <Title level={5} style={{color:"#000000",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",marginTop:"6px",fontFamily:"Lato,Roboto"}}>{info1}</Title> */}
                    </SideBarRoute>

                    <SideBarRoute to="/"> 
                        <SideBarLink>{info2}</SideBarLink>
                    {/* <Title level={5} style={{color:"#000000",fontSize:"17px",lineHeight:"1.10722",fontWeight:"400",letterSpacing:".004em",fontFamily:"Lato,Roboto"}}>{info2}</Title> */}
                    </SideBarRoute>
                    

                    <SideBarRoute to="/">
                        <SideBarLink>{info3}</SideBarLink>
                    </SideBarRoute>

                    <SideBarRoute to="/" target='_blank'>
                        <SideBarLink>{info4}</SideBarLink>
                    </SideBarRoute>

                    <SideBarRoute to="/" target='_blank'>
                        <SideBarLink>{info5}</SideBarLink>
                    </SideBarRoute>
                
                <SideBarBtn>
                    <SideBarBtnLink>{info6}</SideBarBtnLink>
                </SideBarBtn>

                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>

    );
};

export default SideBar