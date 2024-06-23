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
                >
                    <div 
                    style={{backgroundImage: `url(${img})`}}
                    className='W-full h-full group relative flip-card-front bg-cover bg-center text-[#3C3633] rounded-lg p-4'>
                        <div className='absolute inset-0 w-full h-full rounded-md bg-[#EEEDEB] opacity-50 z-[-1]'/>
                        <div className='flex flex-col gap-20 pt-3 z-[30]'>
                            <h1 className='text-[#3C3633] text-2xl font-semibold'>{title}</h1>
                            <p className='text-[#747264] text-[20px]'>{description}</p>
                        </div>
                    </div>
                </motion.div>
                
            </div>
            
        </main>
    )
}