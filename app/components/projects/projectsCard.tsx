import React, { useState } from 'react';
import {motion} from 'framer-motion';

interface Props {
    img: string;
    title: string;
    description: string
}

export default function ProjectCard({ img, title, description }: Props) {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip(){
        if(!isAnimating){
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }

    return (
        <main>

            <div
            onClick={handleFlip}
            className= 'w-[450px] h-[280] rounded-none cursor-pointer'>
                <motion.div className='flip-card-inner w-full h-full'
                initial={false}
                animate={{rotateY: isFlipped ? 180 : 360}}
                transition={{duration:0.6, animationDirection: 'normal'}}
                onAnimationComplete={() => setIsAnimating(false)}
                ></motion.div>
                
            </div>
            
        </main>
    )
}