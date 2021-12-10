import React, { useEffect } from 'react';
import linkedInIcon from '../src/images/linkedIn.svg'
import githubIcon from '../src/images/githubIcon.svg'
import twitterIcon from '../src/images/Twitter.svg'

function App() {

    function Contact() {
        useEffect(() => {
            window.location.href = "https://seznam.cz";
        }, []);
    }
    return (
        <main className='bgGradient w-screen h-screen relative'>
            <div className='bg-main-pattern w-full h-full absolute top-0 left-0 bg-cover bg-center'/>
            <div className='h-screen flex flex-col justify-evenly'>
                <a href='mailto:kuba.turner@gmail.com'><button className='absolute border-purpleRain-default border-2 rounded-2xl px-4 py-2
                 bg-gradient-to-r from-yellow-default to-orangeGrep-default
                 bg-gradient-to-r from-cyan-500 to-blue-500 text-white-default right-5 top-5 border-solid text-sm'>Contact
                    me
                </button></a>
                <div className='pl-8 pr-8 pt-32'>
                    <h1 className='text-mintGreen-default w-32 h-8 font-black text-4xl inline leading-6'>Hi, I'm JT</h1>
                    <p className='text-mintGreen-default font-normal text-base mt-4 leading-6'>React Developer.
                        Currently
                        working
                        full-time as a freelance React Developer for Cogvio. Learning R.Native</p>
                </div>
                <div className='pl-8 pr-8 pt-16'>
                    <div>
                        <a onClick={()=>Contact}
                              className='flex inline-flex' >
                            <img src={githubIcon} alt={'github Icon'}/>
                            <p className='text-mintGreen-default font-normal text-sm leading-10 ml-2'>Github</p>
                        </a>
                    </div>
                    <div>
                        <a onClick={()=> console.log('klikam')} href='https://github.com/jakubturner/jakubturner' target={'_blank'} className='flex inline-flex'>
                            <img src={linkedInIcon} alt={'LinkedIn Icon'}/>
                            <p className='text-mintGreen-default font-normal text-sm leading-10 ml-2'>LinkedIn</p>
                        </a>
                    </div>
                    <div>
                        <a href='https://github.com/jakubturner/jakubturner' className='flex inline-flex'>
                            <img src={twitterIcon} alt={'Twitter Icon'}/>
                            <p className='text-mintGreen-default font-normal text-sm leading-10 ml-2'>Twitter</p>
                        </a>
                    </div>
                </div>
                <div className='pl-8 pr-8 pt-16 pb-8'>
                    <p className='text-mintGreen-default font-normal text-sm leading-5'>
                        Fun fact:The Matrix's code is made out of Japanese sushi recipes from his wife's Japanese
                        cookbooks.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default App;
