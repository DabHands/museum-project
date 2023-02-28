import React from 'react'
import * as s from './DonaldSammut.theme';
import { MainH2, TertiaryH1 } from '../toolbox/Labels';
import { MainButton, TertiaryButton } from '../toolbox/Buttons';


export const DonaldSammut: React.FC = () => {

    return (
        <s.PageWrapper>
            <TertiaryH1>Donald Sammut</TertiaryH1>
            <p>
                Donald Sammut is a plastic surgeon and a specialising in the hand.
                He is also an artist and illustrator and uses drawing in his medical
                practice and teaching, encouraging his students to draw to gain a richer
                understanding of human anatomy. The &lsquo;That&apos;ll Need Stitching&rsquo; embroideries
                were based on his anatomical illustrations.

            </p>
            <p>
                Donald is founder of the UK charity, Working Hands.
                He has established a programme of hand surgery in Nepal
                and travels there once a year to reconstruct and reanimate paralysed
                hands in patients with leprosy. He is a Visiting Senior Lecturer in
                Hand Surgery at Kirtipur University Hospital, Kathmandu where he shares
                techniques with local surgeons.
            </p>

            <s.BlogLink href='https://www.donaldsammut.com/' target="_blank">
                  <TertiaryButton aria-label='Link to Donald Sammuts Website'> 
                     Visit his website
                  </TertiaryButton>
            </s.BlogLink>

            <MainH2> Working Hands </MainH2>
            <p>
                WORKING HANDS is a UK Registered Charity that raises funds for a surgical
                programme, currently based at a leprosy hospital in Nepal, supporting a team
                of Hand Surgeons who travel there to operate and to teach the local surgeons.
                Working Hands is independent, not linked to any major organization, and all
                donated funds find their way directly to the front line of treatment,
                purchasing equipment and consumables for each trip.
            </p>
            <p> You can donate to the Working Hands charity on their website: </p>

            <s.BlogLink href='https://www.workinghandscharity.org/' target="_blank">

                  <MainButton aria-label='Link to Working Hands Website'> 
                     Working Hands&apos; Website 
                  </MainButton>
            </s.BlogLink>
        </s.PageWrapper>
       
    )
};