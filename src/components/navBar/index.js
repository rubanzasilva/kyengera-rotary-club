import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './navBarElements';
// import logo from '../navBar/rlogo.svg'
import { Img } from '../navBar/navBarElements';

//import { Typography } from 'antd';

// const { Title } = Typography;

const Navbar = ({toggle,info1,info2,info3,info4,info5,info6,imga}) => {
    return (
        <>
          <Nav>
              <NavBarContainer>
                  <NavLogo to='/'>
                    <Img src={'https://d3q0oijmiduzg2.cloudfront.net/kyengera-town/Rotary%20Logo_EN21.png'} alt='Rotary Club Of Kyengera Town'/>
                  </NavLogo>

                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                          <NavLinks to="/" target='_blank'> {info1} </NavLinks>
                      </NavItem>
                      

                      <NavItem>
                          <NavLinks href="/" target='_blank'>{info2}</NavLinks>
                      </NavItem>


                      <NavItem>
                          <NavLinks to="/">{info3}</NavLinks>
                      </NavItem>

                      <NavItem>
                          <NavLinks to="/" target='_blank'>{info4}</NavLinks>
                      </NavItem>

                      <NavItem>
                          <NavLinks to="/" target='_blank'>{info5}</NavLinks>
                      </NavItem>

                      

                  </NavMenu>

                  <NavBtn>
                      <NavBtnLink to="/"> {info6} </NavBtnLink>
                  </NavBtn>
                  
              </NavBarContainer>
          </Nav>
            
        </>
    )
}

export default Navbar