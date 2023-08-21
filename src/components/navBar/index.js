import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn} from './navBarElements';

//import { Typography } from 'antd';

// const { Title } = Typography;

const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavBarContainer>
                  <NavLogo to='/'>
                  </NavLogo>

                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                          <NavLinks to="/" target='_blank'> About Silver </NavLinks>
                      </NavItem>
                      

                      <NavItem>
                          <NavLinks href="/" target='_blank'>Projects of interest</NavLinks>
                      </NavItem>


                      <NavItem>
                          <NavLinks to="/">My Blog</NavLinks>
                      </NavItem>

                      <NavItem>
                          <NavLinks to="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/resumeSilva.pdf" target='_blank'>My Resume</NavLinks>
                      </NavItem>

                      


                      

                  </NavMenu>

                  <NavBtn>
                      {/* <NavBtnLink to="/"> Contact me </NavBtnLink> */}
                  </NavBtn>
                  
              </NavBarContainer>
          </Nav>
            
        </>
    )
}

export default Navbar