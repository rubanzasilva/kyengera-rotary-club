import React from 'react';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLink,SocialMedia,SocialMediaWrap,WebsiteRights,SocialIcons,SocialIconLink, FooterLogo, Img} from './footerElements';
// import {BackTop} from 'antd';
import { FloatButton } from 'antd';
import {FaTwitter, FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = ({info1,info2,info3,info4,info5,info6}) => {
    return (
        <FooterContainer id='footerContainer'>
        <FooterWrap id='footerWrap'>
        <FooterLogo id='footerLogo'>
                        <Img src={'https://d3q0oijmiduzg2.cloudfront.net/kyengera-town/Rotary%20Logo_EN21.png'} alt='Kyengera Town rotary logo'></Img>

                    </FooterLogo>
            

            <FooterLinksContainer id='footerLinksContainer'>
                
                <FooterLinksWrapper id='footerLinksWrapper'>

                


                 <FooterLinkItems id='footerLinkItemA'>

                     {/* <FooterLinkTitle>My Resume</FooterLinkTitle> */}

                     <FooterLink to="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/resumeSilva.pdf" target='_blank'>{info1}</FooterLink>

                 </FooterLinkItems>



                 <FooterLinkItems id='footerLinkItemB'>

                     {/* <FooterLinkTitle>My Projects Of Interest</FooterLinkTitle> */}
   
                     <FooterLink href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/antelopes.jpeg" target='_blank'>{info2}</FooterLink>
                    
                     
                 </FooterLinkItems>



                 <FooterLinkItems id='footerLinkItemC'>

                     {/* <FooterLinkTitle>My Blog</FooterLinkTitle> */}

                     <FooterLink href="mailto:rubanza@rubanzasilver.xyz" target="_blank" arial-label="Email">{info3}</FooterLink>

                 </FooterLinkItems>


                 <FooterLinkItems id='footerLinkItemD'>

                     {/* <FooterLinkTitle>Email Me</FooterLinkTitle> */}
   
                     <FooterLink href="https://twitter.com/countfettucine/" target="_blank" arial-label="Twitter">{info4}</FooterLink>

                 </FooterLinkItems>

                 
                 

                 


                 

                </FooterLinksWrapper>

            </FooterLinksContainer>
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
        

            

        
            

        </FooterWrap>
        <FloatButton.BackTop/>
            
        </FooterContainer>
    )
}

export default Footer