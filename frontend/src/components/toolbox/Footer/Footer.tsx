import React from 'react'
import MediaQuery from 'react-responsive';
import funders from '../../../util/artist/funders.jpg'
import * as s from './Footer.theme';


export const Footer: React.FC = () => {

    return (

        
        <s.Wrapper>
            <MediaQuery minWidth={700}>
                
               
                
                <p> Resident Artist </p>
                <p> | </p>
                <p> Lucy&apos;s Blog </p>
                <p> | </p>
                <p> Pinc College </p>
                <p> | </p>
                <s.Funders src={funders} />
            </MediaQuery>

            <MediaQuery maxWidth={699}>
                <s.MobileView>
                    <p> Lucy&apos;s Blog </p>
                    <p> | </p>
                    <s.Funders src={funders} mobile={true} loading='lazy' draggable='false' />
                </s.MobileView>  
                
            </MediaQuery>
            
            
            
        </s.Wrapper>
        
        )
}