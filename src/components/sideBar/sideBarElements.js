import styled from 'styled-components';
import {Link as Link$} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

//design for the whole sidebar container when its clicked
export const SideBarContainer = styled.aside`
 position:fixed;
 z-index:999;
 width:100%;
 height:100%;
 background:#ffffff;
 display:grid;
 align-items:center;
 top:0;
 left:0;
 transititon: 0.3s ease-in-out;
 /* Helps with the side bar toggle button showing up on mobile and not desktop */
 opacity: ${({ isOpen}) => (isOpen ? '100%' : '0' )};
 top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};

`

export const Icon = styled.div`
 position:absolute;
 top:1.2rem;
 right:1.5rem;
 background:transparent;
 font-size:2rem;
 cursor:pointer;
 outline:none;
`

export const CloseIcon = styled(FaTimes)`
 color:#0067C8;
`

export const SideBarWrapper = styled.div`
 color:#0067C8;
`

export const SideBarMenu = styled.ul`
 display:grid;
 grid-template-columns: 1fr;
 grid-template-rows:repeat(6, 80px);
 text-align:center;

 @media screen and (max-width:480px) {
     grid-template-rows:repeat(6,80px);
 }
`


export const SideBarLink = styled(Link$)`
 display:flex;
 align-items:center;
 justify-content:center;
 font-size:16px;
 line-height:24px;
 text-decoration:none;
 list-style:none;
 transititon: 0.2s ease-in-out;
 text-decoration:none;
 color:#000000;
 cursor:pointer;

 &:hover {
     color:#F7A81B;
     transititon:0.2 ease-in-out;
 }
`

export const SideBtnWrap = styled.div`
 display:flex;
 justify-content:center;
`

export const SideBarRoute = styled(LinkR)`
 padding: 16px 64px;
 color:forestgreen;
 background:#FFFFFF;
 font-size:16px;
 line-height:24px;
 cursor:pointer;
 transititon: all 0.2s ease-in-out;
 text-decoration: none;

 &:hover {
     transititon: all 0.2s ease-in-out;
     background:#FFFFFF;
     color:#010606;
 }

 &:active {
    transition: all 0.2s ease-in-out;
    border-bottom: 2px solid #0067C8;
}
`


export const SocialMedia = styled.section`
 max-width:1000px;
 width:80%;
`
export const SocialMediaWrap = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 max-width:1100px;
 margin: 42px auto 0 auto;

 @media screen and (max-width:820px) {
     flex-direction:column;
 }
`

export const SocialIcons = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 width:240px;
`
export const SocialIconLink = styled.a`
 ${'' /* color:#F7F2EF; */}
 color:#35241A;
 font-size:24px;
`

export const SideBarBtn = styled.nav`
 display:flex;
 align-items:center;
 justify-content:center;
 height:80px;


 @media screen and (max-width:768px) {
     display:none;
 }
 ${'' /* height:80px;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif; */}
`

export const SideBarBtnLink = styled(LinkR)`
 color:#0067C8;
 background:;
 display: flex;
 cursor:pointer;
 transititon: all 0.2s ease-in-out;
 text-decoration: none;
 font-size:16px;
 line-height:24px;

 &:hover {
     transititon: all 0.2s ease-in-out;
     color:#F7A81B;
 }
 
 &:active {
     transition: all 0.2s ease-in-out;
     border-bottom: 2px solid #0067C8;
 }

 &:visited {
    transition: all 0.2s ease-in-out;
    border-bottom: 2px solid #901F93;
}
`