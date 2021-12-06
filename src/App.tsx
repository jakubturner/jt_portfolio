import React from 'react';

function App() {
  return (
        <main className='bgGradient w-screen h-screen relative'>
            <div className='bg-main-pattern w-full h-full absolute top-0 left-0 bg-cover bg-center'></div>
            <div>
              <div className='pl-8 pr-8 pt-16' >
                <h1 className='text-mintGreen-default w-32 h-8 font-black text-4xl inline'>Hi, I'm JT</h1>
                <p className='text-mintGreen-default font-medium text-sm mt-4'>React Developer. Currently working full-time as a freelance React Developer for Cogvio. Learning R.Native</p>
                </div>
            </div>
        </main>
  );
}

export default App;
