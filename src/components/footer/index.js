import React from 'react';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights} from './footerElements';
// import {BackTop} from 'antd';
import { FloatButton } from 'antd';


const Footer = () => {
    return (
        <FooterContainer id='footerContainer'>
        <FooterWrap id='footerWrap'>

            <FooterLinksContainer id='footerLinksContainer'>
                <FooterLinksWrapper id='footerLinksWrapper'>


                 <FooterLinkItems id='footerLinkItemA'>

                     {/* <FooterLinkTitle>My Resume</FooterLinkTitle> */}

              
                     <FooterLink to="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/resumeSilva.pdf" target='_blank'>Resume</FooterLink>

                 </FooterLinkItems>



                 <FooterLinkItems id='footerLinkItemB'>

                     {/* <FooterLinkTitle>My Projects Of Interest</FooterLinkTitle> */}
   
                     <FooterLink href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/antelopes.jpeg" target='_blank'>Projects Of Interest</FooterLink>
                    
                     
                 </FooterLinkItems>



                 <FooterLinkItems id='footerLinkItemC'>

                     {/* <FooterLinkTitle>My Blog</FooterLinkTitle> */}

                     <FooterLink href="mailto:rubanza@rubanzasilver.xyz" target="_blank" arial-label="Email">Email Me</FooterLink>

                 </FooterLinkItems>


                 <FooterLinkItems id='footerLinkItemD'>

                     {/* <FooterLinkTitle>Email Me</FooterLinkTitle> */}
   
                     <FooterLink href="https://twitter.com/countfettucine/" target="_blank" arial-label="Twitter">Twitter</FooterLink>

                 </FooterLinkItems>
                 

                 

                </FooterLinksWrapper>

            </FooterLinksContainer>

        

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/"> 
                    <p>Silver Rubanza</p> 
                    </SocialLogo>

                    <WebsiteRights>Built by Me - Silva with ReactJs © {new Date().getFullYear()}</WebsiteRights>

                </SocialMediaWrap>
            </SocialMedia>

        
            

        </FooterWrap>
        <FloatButton.BackTop/>
            
        </FooterContainer>
    )
}

export default Footer