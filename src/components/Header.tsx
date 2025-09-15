import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0'>
      <ul className='flex flex-row space-x-10 place-content-end pr-50 bg-charcoal-black text-emerald-green text-lg font-roboto font-black'>
        <li><Link to='/' className='hover:text-light-cream'>Inicio</Link></li>
        <li><Link to='/history' className='hover:text-light-cream'>Historia</Link></li>
        <li><Link to='/characters' className='hover:text-light-cream'>Personajes</Link></li>
      </ul>
    </header>
  )
}
