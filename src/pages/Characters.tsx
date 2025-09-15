import characters from '/src/characters.json'
import Character from '../components/Character'

export default function Characters() {
  let charactersCopy = characters.map((item, index)=> ({...item, background: index%2 === 0 ? 'bg-charcoal-black' : 'bg-graphite-gray'}))

  return (
    <div className='overflow-x-auto'>
      <div className='flex py-15 justify-center bg-charcoal-black'>
        <h1 className='font-cinzel w-min text-4xl px-10 text-emerald-green text-center font-black border-b-4 border-light-cream'>
          PERSONAJES
        </h1>
      </div>
      <div>
        <ul>
          {charactersCopy.map((character) => (
            <li key={character.name}>
              <Character {...character} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
