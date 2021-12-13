import linkedInIcon from '../src/images/linkedIn.svg'
import githubIcon from '../src/images/githubIcon.svg'
import twitterIcon from '../src/images/Twitter.svg'
import emailIcon from '../src/images/Email Icon.svg'
import yoda from '../src/images/Yoda.svg'

function App() {

    return (
        <main className='bgGradient w-screen h-screen relative'>
            <div className='bg-main-pattern w-full h-full absolute top-0 left-0 bg-cover bg-center'/>
                <div>
                    <img src={yoda}/>
                </div>
            <div className=' md:px-24 h-screen flex flex-col justify-evenly'>
                <div className='md:pt-16 pl-8 pr-8 pt-32'>
                    <div className='flex items-center'>
                        <div className='h-full'>
                            <h1 className='xl:text-9xl md:text-8xl text-mintGreen-default w-32 h-8 font-black text-4xl inline leading-6'>Hi,
                                I'm JT</h1>
                        </div>
                        <div className='h-full xl:ml-auto text-center'>
                            <img src={emailIcon} alt={'email icon'}/>
                            <a href='mailto:kuba.turner@gmail.com' className='xl:px-8 xl:py-8
                xl:static xl:justify-self-end xl:text-3xl hover:bg-orangeGrep-default md:w-56 md:text-lg
                absolute border-purpleRain-default border-2 rounded-2xl px-4 py-2
                bg-gradient-to-r from-yellow-default to-orangeGrep-default
                text-white-default right-5 top-5 border-solid text-sm align-middle'>Contact
                                me
                            </a>
                        </div>
                    </div>
                    <pre
                        className='xl:mt-8 md:text-2xl text-mintGreen-default font-normal text-base mt-4 leading-6 whitespace-normal'>React Developer.<br
                        className='xl:block hidden'/>
                         Currently working full-time as<br className='hidden xl:block'/> a freelance React Developer for Cogvio.<br
                            className='hidden xl:block'/> Also Learning R.Native & Ethical hacking.</pre>
                </div>
                <div
                    className='xl:max-w-2xl md:pl-8 md:pr-8 md:flex-row md:flex md:justify-between pl-8 pr-8 pt-16 z-10'>
                    <div>
                        <a className='flex inline-flex' href='https://github.com/jakubturner/jakubturner'
                           target={'_blank'} rel={'noreferrer'}>
                            <img className='md:w-10 md:h-10' src={githubIcon} alt={'github Icon'}/>
                            <p className='md:text-3xl text-mintGreen-default font-normal text-sm leading-10 ml-2'>Github</p>
                        </a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/jakubturner/' target={'_blank'} rel={'noreferrer'}
                           className='flex inline-flex'>
                            <img className='md:w-10 md:h-10' src={linkedInIcon} alt={'LinkedIn Icon'}/>
                            <p className='md:text-3xl text-mintGreen-default font-normal text-sm leading-10 ml-2'>LinkedIn</p>
                        </a>
                    </div>
                    <div>
                        <a href='https://twitter.com/JakubJT' target={'_blank'} rel={'noreferrer'}
                           className='flex inline-flex'>
                            <img className='md:w-10 md:h-10' src={twitterIcon} alt={'Twitter Icon'}/>
                            <p className='md:text-3xl text-mintGreen-default font-normal text-sm leading-10 ml-2'>Twitter</p>
                        </a>
                    </div>
                </div>
                <div className='pl-8 pr-8 pt-16 pb-8'>
                    <p className='md:mb-5 mb-5 text-mintGreen-default font-normal text-sm leading-5'>
                        Fun fact:The Matrix's code is made out of Japanese sushi recipes from his wife's Japanese
                        cookbooks.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default App;
