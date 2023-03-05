import React from 'react'
import MediaQuery from 'react-responsive';
import funders from '../../../util/artist/funders.jpg'
import * as s from './Footer.theme';


export const Footer: React.FC = () => {

    return (

        
        <s.Wrapper>
            <MediaQuery minWidth={768}>
                
                {/* <a href="https://google.com" target="_blank">CSV</a> */}
                <s.FooterLink href='https://www.museum.manchester.ac.uk/event/dab-hands-2/' target="_blank"> Resident Artist</s.FooterLink>
                <p> | </p>
                <s.FooterLink href='https://www.lucysart.co.uk/' target="_blank"> Lucy&apos;s Website </s.FooterLink>
                <p> | </p>
                <s.FooterLink href='https://www.donaldsammut.com/' target="_blank"> Donald Sammut </s.FooterLink>
                <p> | </p>
                <s.Funders src={funders} loading='lazy' draggable='false' />
            </MediaQuery>

            <MediaQuery maxWidth={767}>
                <s.MobileView>
                    <s.FooterLink href='https://www.lucysart.co.uk/' target="_blank"> Lucy&apos;s Website </s.FooterLink>
                    <p> | </p>
                    <s.Funders src={funders} mobile={true} loading='lazy' draggable='false' />
                </s.MobileView>  
                
            </MediaQuery>
            
            
            
        </s.Wrapper>
        
        )
}