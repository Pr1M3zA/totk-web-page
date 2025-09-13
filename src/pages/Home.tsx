import React from 'react'

export default function Home() {
  return (
    <div className='h-5/6 flex'>

      <div className='flex space-x-2 bg-charcoal-black'>

        <div className='flex-1 content-center font-black px-32'>
          <h1 className='font-cinzel text-emerald-green text-5xl py-5'>THE LEGEND OF ZELDA: TEARS OF THE KINGDOM</h1>
          <p className='font-roboto text-light-cream'>Explora Hyrule desde el cielo hasta la tierra, conoce su historia y a sus héroes.</p>
          
          <div className='flex-row space-x-5 py-5 font-roboto text-deep-pine'>
            <button className='rounded-full p-3 bg-soft-gray hover:bg-emerald-green'>Historia</button>
            <button className='rounded-full p-3 bg-soft-gray hover:bg-emerald-green'>Conoce sus personajes</button>
          </div>

        </div>

        <div className='flex-1 content-center h-full p-10'>
          <img src='src\assets\images\Totk_art.jpg' className='rounded-4xl h-full'></img>
        </div>

      </div>

      <div className='bg-graphite-gray flex'>
      </div>

    </div>
  )
}
