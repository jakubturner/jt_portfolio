import React, { useEffect } from 'react';
import linkedInIcon from '../src/images/linkedIn.svg'
import githubIcon from '../src/images/githubIcon.svg'
import twitterIcon from '../src/images/Twitter.svg'

function App() {

    return (
        <main className='bgGradient w-screen h-screen relative'>
            <div className='bg-main-pattern w-full h-full absolute top-0 left-0 bg-cover bg-center'/>
            <div className=' md:px-24 h-screen flex flex-col justify-evenly'>
                <a href='mailto:kuba.turner@gmail.com'><button className='hover:bg-orangeGrep-default md:w-56 md:h-16 md:text-lg
                 absolute border-purpleRain-default border-2 rounded-2xl px-4 py-2
                 bg-gradient-to-r from-yellow-default to-orangeGrep-default
                 text-white-default right-5 top-5 border-solid text-sm'>Contact
                    me
                </button></a>
                <div className='md:pt-16 pl-8 pr-8 pt-32'>
                    <h1 className='md:text-8xl text-mintGreen-default w-32 h-8 font-black text-4xl inline leading-6'>Hi, I'm JT</h1>
                    <p className='md:text-2xl text-mintGreen-default font-normal text-base mt-4 leading-6'>React Developer.
                        Currently
                        working
                        full-time as a freelance React Developer for Cogvio. Also Learning R.Native & Ethical hacking</p>
                </div>
                <div className='md:pl-8 md:pr-8 md:flex-row md:flex md:justify-between pl-8 pr-8 pt-16 z-10' >
                    <div>
                        <a className='flex inline-flex' href='https://github.com/jakubturner/jakubturner' target={'_blank'}  rel={'noreferrer'} >
                            <img className='md:w-10 md:h-10' src={githubIcon} alt={'github Icon'}/>
                            <p className='md:text-3xl text-mintGreen-default font-normal text-sm leading-10 ml-2'>Github</p>
                        </a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/jakubturner/' target={'_blank'}  rel={'noreferrer'} className='flex inline-flex'>
                            <img className='md:w-10 md:h-10' src={linkedInIcon} alt={'LinkedIn Icon'}/>
                            <p className='md:text-3xl text-mintGreen-default font-normal text-sm leading-10 ml-2'>LinkedIn</p>
                        </a>
                    </div>
                    <div>
                        <a href='https://twitter.com/JakubJT' target={'_blank'}  rel={'noreferrer'}  className='flex inline-flex'>
                            <img className='md:w-10 md:h-10' src={twitterIcon} alt={'Twitter Icon'}/>
                            <p className='md:text-3xl text-mintGreen-default font-normal text-sm leading-10 ml-2'>Twitter</p>
                        </a>
                    </div>
                </div>
                <div className='pl-8 pr-8 pt-16 pb-8'>
                    <p className='md:mb-5 text-mintGreen-default font-normal text-sm leading-5'>
                        Fun fact:The Matrix's code is made out of Japanese sushi recipes from his wife's Japanese
                        cookbooks.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default App;
