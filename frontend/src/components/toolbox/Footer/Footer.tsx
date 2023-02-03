import React from 'react'
import MediaQuery from 'react-responsive';
import funders from '../../../util/artist/funders.jpg'
import * as s from './Footer.theme';


export const Footer: React.FC = () => {

    return (

        
        <s.Wrapper>
            <MediaQuery minWidth={700}>
                
               
                <s.FooterLink href=''> Resident Artist</s.FooterLink>
                <p> | </p>
                <s.FooterLink href='https://www.lucysart.co.uk/'> Lucy&apos;s Blog </s.FooterLink>
                <p> | </p>
                <s.FooterLink href='https://pinccollege.co.uk/'> Pinc College </s.FooterLink>
                <p> | </p>
                <s.Funders src={funders} loading='lazy' draggable='false' />
            </MediaQuery>

            <MediaQuery maxWidth={699}>
                <s.MobileView>
                    <s.FooterLink href='https://www.lucysart.co.uk/'> Lucy&apos;s Blog </s.FooterLink>
                    <p> | </p>
                    <s.Funders src={funders} mobile={true} loading='lazy' draggable='false' />
                </s.MobileView>  
                
            </MediaQuery>
            
            
            
        </s.Wrapper>
        
        )
}