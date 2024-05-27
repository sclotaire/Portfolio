import React from 'react'
import Image from 'next/image'
import PlanPerfect from '../../images/plan-perfect.png'
import ProfilePic from '../../images/profile-img.png'
import MockupOne from '../../images/mockup-1.png'
import MockupTwo from '../../images/mockup-2.png'


const Hero = () => {
    return (
        <main>
            <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
    <div className='col-span-7'>
                    <Image
                    src={MockupOne}
                    alt='Image of Soumaya Clotaire'
                    height={5000}
                    width={5000}
                    />
                </div>
		{/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<Image src={MockupOne} alt="A mockup of the plan perfect app" width={30000} height={30000} className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
        <div>
        {/* <Image src={MockupTwo} alt="A mockup of the plan perfect app" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
        {/* </div> */} 
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Hi, I'm 
				<span className="dark:text-violet-600"> Soumaya Clotaire</span> and I'm a Software Developer
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">A creative enthusiast that stumbled into code
				<br  className="hidden md:inline lg:hidden" /> and can't come out!
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Portfolio</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">About me</a>
			</div>
		</div>
	</div>
</section>
            {/* <div className='grid grid-cols-1'>
                <div className='col-span-8 place-content-right'>
                    <h1 className="text-white font-bold mb-4 text-right text-4xl lg:text-7xl">Hi, I'm Soumaya Clotaire</h1>
                    <p className='text-[#b8b4b4] text-right font-semibold text-1xl lg:text-2xl'>and I'm a creative enthusiast</p>
                </div>
                <button className='px-3 py-7 '>Portfolio</button>
                <button>About me</button>
                <div className='col-span-6'>
                    <Image
                    src={ProfilePic}
                    alt='Image of Soumaya Clotaire'
                    height={400}
                    width={400}
                    />
                </div>
            </div> */}
        </main>
    )
}

export default Hero

{/* <h1 className="text-white font-bold text-right text-8xl">Hi, I'm</h1>
<h2 className="text-white font-bold mb-4 text-right text-8xl">Soumaya</h2>
<h3 className="text-white font-bold mb-4 text-right text-8xl">Clotaire</h3>
<p className='text-[#b8b4b4] font-semibold text-2xl text-right'>and I'm a creative enthusiast</p> */}