import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='flex flex-col h-screen'>

      <div className='flex h-5/6 bg-charcoal-black '>
        <div className='flex-1 content-center px-32 font-black'>
          <h1 className='py-5 font-cinzel text-5xl text-emerald-green'>
            THE LEGEND OF ZELDA: TEARS OF THE KINGDOM
          </h1>
          <p className='font-roboto text-light-cream'>
            Explora Hyrule desde el cielo hasta la tierra, conoce su historia y a sus héroes.
          </p>
          
          <div className='flex py-5 space-x-5 font-roboto text-deep-pine'>
            <Link to='/history' className='p-3 rounded-full bg-soft-gray hover:bg-emerald-green'>Historia</Link>
            <Link to='/characters' className='p-3 rounded-full bg-soft-gray hover:bg-emerald-green'>Conoce sus personajes</Link>
          </div>
        </div>

        <div className='flex-1 h-full px-10 pt-16 pb-5'>
          <img src='src\assets\images\Totk_art.jpg' alt="Arte de Tears of the Kingdom"  className='h-full w-auto rounded-4xl object-contain'>
          </img>
        </div>
      </div>

      <div></div>
    </div>
  )
}