import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';


export const Nav = styled.nav`
 height: 120px;
 margin-top:10px;
 display:flex;
 justify-content:center;
 align-items:center;
 position:sticky;
 top:0;
 border:border-box;
 background-color: #ffffff;
 cursor:pointer;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;


 @media screen and (max-width:960px) {
     transition: 0.8s all ease;
     height:80px;
 }
`

export const NavBarContainer = styled.div`
 display:flex;
 justify-content:space-between;
 height:80px;
 width:90%;
 padding: 0;
 max-width:2400px;

 @media screen and (max-width:960px) {
     width:80%;
        
    }
`


export const NavLogo = styled(LinkR)`
 color:#000000;
 justify-self:flex-start;
 justify-content:flex-start;
 cursor:pointer;
 font-size:1.5rem;
 line-height:24px;
 display:flex;
 align-items:center;
 margin-right:-16px; 
 left:0;
 font-weight:bold;
 text-decoration:none;

 @media screen and (max-width:960px) {
        transition: 0.8s all ease;
        justify-content:center;
        align-items:center;
        align-text:center;
        padding-top:16px;
        // margin-right:34%;  
    }
`


export const MobileIcon = styled.div`
 display:none;

 @media screen and (max-width:780px) {
     display:block;
     position:absolute;
     top:0;
     right:0;
     transform: translate(-100%,60%);
     font-size:1.8rem;
     cursor:pointer;
     color:#0067C8;
 }
`

export const NavMenu = styled.ul`
 display:flex;
 align-items:center;
 list-style:none;
 text-align:center;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
 width:100%;
 padding:8px;

 @media screen and (max-width:760px) {
     display:none;
 }
`

export const NavItem = styled.li`
 height:80px;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
`

//to change the color of the links in the navbar
export const NavLinks = styled(LinkR)`
//  color:#D0CFCD;
 color:#54565A;
 display:flex;
 align-items:center;
 text-decoration:none;
 padding:0 1.5em;
 height:100%;
 cursor:pointer;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
 font-size:14px;
 line-height:22px;

 
 &:visited {
    color:#901F93;
}

&:hover {
    color:#F7A81B;
    border-bottom: 2px solid #F7A81B;
    
}

&:active {
    border-bottom: 2px solid #0067C8;
    color:#0067C8;
}

@media screen and (max-width:960px) {
    padding:0 12px ;
}




`

export const NavBtn = styled.nav`
 display:flex;
 align-items:center;
 height:80px;


 @media screen and (max-width:768px) {
     display:none;
 }
 ${'' /* height:80px;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif; */}
`

export const NavBtnLink = styled(LinkR)`
 color:#0067C8;
 display: flex;
 justify-content:flex-start;
 margin-left:-16px;
 align-items:center;
 font-style: normal;
 text-align:center;
 font-weight:400;
 font-size: 16px;
 line-height:24px;
 width:120px;
//  padding:12px;
 
 &:hover {
     transition: all 0.2s ease-in-out;
     border-bottom: 2px solid #F7A81B;
 }
`

export const Img = styled.img`  
    // height:78px;
    // width:64px;
    height:120px;
    object-fit: contain;
    border-radius: 4px;
    justify-content:flex-start;
    margin-right:48px;

    @media screen and (max-width:960px) {
     transition: 0.8s all ease;
     height:44px;
 }
`

// export const SocialMedia = styled.section`
//  max-width:1000px;
//  width:80%;
// `
// export const SocialMediaWrap = styled.div`
//  display:flex;
//  justify-content:space-between;
//  align-items:center;
//  max-width:1100px;
//  margin: 0px auto 0 auto;

//  @media screen and (max-width:820px) {
//      flex-direction:column;
//  }
// `


// export const SocialIcons = styled.div`
//  display:flex;
//  justify-content:space-between;
//  align-items:center;
//  width:240px;
// `
// export const SocialIconLink = styled.a`
//  ${'' /* color:#F7F2EF; */}
//  color:#35241A;
//  font-size:24px;
// `