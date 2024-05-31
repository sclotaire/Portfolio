import React from 'react'
import Image from 'next/image'
import FrontMockup from '../../images/front-cover-mockup-2.png'
import portfolio from '../portfolio/page'
import Link from 'next/link'


export default function Hero() {
    return (
        <main>
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className='col-span-3'>
                        <Image
                            src={FrontMockup}
                            alt='numerous phones showing a mockup of the plan perfect app'
                            className='w-full'
                            height={1000}
                            width={1000}
                        />
                    </div>
                    <div className="flex flex-col justify-left justify-center p-4 py-12 px-7 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-right">
                        <h1 className="text-5xl text-[#3C3633] font-bold leading-none sm:text-5xl">Hi, I'm
                            <span className="text-[#9f7a62]"> Soumaya Clotaire</span> and I'm a Software Engineer
                        </h1>
                        <p className="mt-6 mb-8 text-[#747264] text-lg sm:mb-12">A creative enthusiast that stumbled into code
                            <br className="hidden md:inline lg:hidden" /> and can't come out!
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
                            <Link href="/portfolio" className="px-8 py-3 text-lg font-semibold rounded bg-[#9f7a62] dark:text-gray-50">Portfolio</Link>
                            <Link href="/about" className="px-8 py-3 text-lg text-[#9f7a62] font-semibold border rounded dark:border-[#9f7a62]">About me</Link>
                        </div>
                    </div>
                </div>
        </main>
    )
}


