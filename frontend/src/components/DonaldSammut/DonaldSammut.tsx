import React from 'react'
import * as s from './DonaldSammut.theme';
import { MainH2, TertiaryH1 } from '../toolbox/Labels';
import { MainButton, TertiaryButton } from '../toolbox/Buttons';


export const DonaldSammut: React.FC = () => {

    return (
        <s.PageWrapper>
            <TertiaryH1>Donald Sammut</TertiaryH1>
            <p>
                Donald Sammut is a Plastic Surgeon and a specialist Hand Surgeon. 
                He is also an artist and illustrator of both Medical and non-medical works.
                Each of the embroideries were of an illustration of his, based off the anatomy
                of the hands.

            </p>
            <p>
                He is involved in the training of surgeons in Hand Surgery, 
                as well as in the preparation and conduct of Hand Surgery examinations. 

                Founder of the UK Charity, Working Hands, he has established a programme
                of Hand Surgery in Nepal, and travels there once a year to reconstruct
                and reanimate paralysed hands in patients with leprosy, and,
                more importantly, to teach local surgeons.
                
                He is a Visiting Senior Lecturer in Hand Surgery at Kirtipur University
                Hospital, Kathmandu.
                
            </p>

            <s.BlogLink href='https://www.donaldsammut.com/' >
                  <TertiaryButton aria-label='Link to Donald Sammuts Website'> 
                     Visit his website!
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
            <s.BlogLink href='https://www.workinghandscharity.org/' >
                  <MainButton aria-label='Link to Working Hands Website'> 
                     Working Hands&apos; Website 
                  </MainButton>
            </s.BlogLink>

        </s.PageWrapper>
       
    )
};