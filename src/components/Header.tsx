import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <ul className='flex flex-row space-x-10 place-content-end pr-50 bg-charcoal-black text-emerald-green text-lg font-roboto font-medium'>
        <li><Link to='/' className='hover:text-light-cream'>Home</Link></li>
        <li><Link to='/history' className='hover:text-light-cream'>History</Link></li>
        <li><Link to='/characters' className='hover:text-light-cream'>Characters</Link></li>
      </ul>
    </header>
  )
}
