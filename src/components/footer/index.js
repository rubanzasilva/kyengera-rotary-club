import React from 'react';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLink,SocialMedia,SocialMediaWrap,WebsiteRights, FooterLogo, Img} from './footerElements';
// import {BackTop} from 'antd';
import { FloatButton } from 'antd';


const Footer = ({info1,info2,info3,info4,info5,info6}) => {
    return (
        <FooterContainer id='footerContainer'>
        <FooterWrap id='footerWrap'>
            

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

            <FooterLogo>
                        <Img src={'https://d3q0oijmiduzg2.cloudfront.net/kyengera-town/Rotary%20Logo_EN21.png'} alt='Kyengera Town rotary logo'></Img>

                    </FooterLogo>

        

            {/* <SocialMedia>
                <SocialMediaWrap>
                    <FooterLogo>
                        <Img src={'https://d3q0oijmiduzg2.cloudfront.net/kyengera-town/Rotary%20Logo_EN21.png'} alt='Kyengera Town rotary logo'></Img>

                    </FooterLogo>

                    <WebsiteRights>Built by Rubanza Silver © {new Date().getFullYear()}</WebsiteRights>

                </SocialMediaWrap>
            </SocialMedia> */}

        
            

        </FooterWrap>
        <FloatButton.BackTop/>
            
        </FooterContainer>
    )
}

export default Footer