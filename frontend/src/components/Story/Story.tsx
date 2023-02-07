import React from 'react'
import * as s from './Story.theme';
import { MainH2, SecondaryH1 } from '../toolbox/Labels';
import maquette from '../../util/story/Maquette.gif'


export const Story: React.FC = () => {

    const renderEmbroideryText = () => {
        return (<>
            <s.PageText>
                During lockdown, Manchester Museum&apos;s artist in residence, Lucy Burscough,
                facilitated a community artwork embroidering anatomical drawings of the hand.

                Specific groups were targeted with the intention of boosting wellbeing & community
                spirit at a time when people were at risk of poor mental health.
                
            </s.PageText>

            <s.PageText>
                Beautiful kits were posted out, resulting in embroidered contributions from nearly 300 
                medical students and healthcare workers, students from Pinc College and Broadwalk Pupil 
                Referral Unit and residents of the North West region who were members of the Embroiderer&rsquo;s 
                Guild. The embroideries became the &lsquo;skin&rsquo; of a large sculpture of a sewing hand.
                
                This website has been designed for you to explore this sculpture and its embroideries, 
                and perhaps learn a little about the anatomy of the hand. 
            </s.PageText>

            <s.PageText>
                This part of the Dab Hands project was inspired by the anatomical hand drawings of
                hand surgeon and artist, Mr Donald Sammut.
                Donald uses drawing in his medical practice to gain a greater understanding of his
                patients&rsquo; specific difficulties and as a teaching aid for anatomy and surgical techniques.
            </s.PageText>

            <s.PageText>
                The embroidery kits were designed to be accessible to first time embroiderers
                as well as old hands at the craft. Each included some information about the anatomical
                structures that would be sewn, together with all the equipment required and links to
                online resources.
            </s.PageText>

            <s.PageText>
                Every one of the embroideries that came back was beautiful and skilful and told a story 
                about the human hand and its ability to manipulate the finest of tools, in this case for 
                creative, community and educational endeavour. 
            </s.PageText>

            <s.Quote>
                “I could not work in my NHS job for several months. I felt really bad about leaving the
                team I work with &apos;in the lurch&apos; but the project helped me feel that I was still
                able to represent them and their experiences of Covid in a positive way.”
            </s.Quote>

            <s.PageText>
                Every one of the embroideries that came back was beautiful and skilful and told a story
                about the human hand and its ability to manipulate the finest of tools, in this case for
                creative, community and educational endeavour.
            </s.PageText>
        </>
        )
    }

    const renderHandText = () => {
        return (
            <>
                <s.PageText>
                            Lucy has sculpted a 1.5m high model of a hand which she hopes
                            describes the grace and accuracy that can be achieved by a skilled hand at work sewing.
                </s.PageText>

                <s.Spanel>
                    <s.PageText>
                        
                        <s.PageText>
                            The first stage was making a small maquette in plasticene modelled on her own hand. 
                            This was 1/10 the scale of the final sculpture so that measurements could easily be taken and scaled up. 
                        </s.PageText>
                        <s.PageText>
                        These drawings by Caroline Johnson show Lucy at work making the sculpture. 
                        She used heat-activated felt as the main construction material,
                        </s.PageText>
                    </s.PageText>
                    

                    <s.AccompanyImage
                    draggable={false}
                    loading="lazy"
                    src={maquette} />
                </s.Spanel>


                
                

                {/* Add Slideshow Of Images in. Tutorial: https://www.youtube.com/watch?v=l1MYfu5YWHc */}

                <s.PageText>
                    The embroideries make up the surface of the hand and have been arranged so that the
                    embroideries describe the underlying anatomy in their particular area of the hand.
                    Please explore the rest of this website to learn more about the embroideries and the
                    anatomy that they represent
                </s.PageText>
            </>
        )
    }

    return (
        <s.PageWrapper>
            <SecondaryH1>{"‘That’ll Need Stitching’ Embroidered Sculpture: The Embroideries."}</SecondaryH1>
            {renderEmbroideryText()}
            <MainH2> Making the Hand </MainH2>
            {renderHandText()}
            
        </s.PageWrapper>
       
    )
};