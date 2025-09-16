export default function History() {
  return (
    <div>
      <div className='flex py-15 justify-center bg-charcoal-black'>
        <h1 className='w-min text-4xl px-10 font-cinzel text-center font-black border-b-4 text-emerald-green border-light-cream'>
          HISTORIA
        </h1>
      </div>

      <div className='flex  px-10 md:px-30 space-x-4 bg-charcoal-black font-roboto font-black text-light-cream'>
        <div className='items-center'>
          <p className='py-5'>
            Tras la derrota de Calamity Ganon, Hyrule comienza una etapa de reconstrucción. El castillo se levanta de nuevo como símbolo de esperanza, 
            y los habitantes intentan recuperar la paz perdida. Sin embargo, bajo la superficie, algo extraño despierta. 
            Una fuerza oscura oculta en lo profundo amenaza con romper el frágil equilibrio del reino. 
          </p>

          <p className='py-5'>
            Link y Zelda, conscientes de ese peligro, exploran antiguas ruinas donde descubren rastros de un mal que parece más antiguo que el propio Ganon.
            Durante la investigación, un poder maligno se libera y sacude los cimientos de Hyrule. 
            El castillo se eleva hacia los cielos envuelto en energía oscura, y Zelda desaparece sin dejar rastro.
          </p>
        </div>
        <div className='flex items-center'>
          <img src='src\assets\images\Totk_1.png' alt="Link y Zelda explorando" className='h-fit w-4/5 rounded-4xl'></img>
        </div>
      </div>

      <div className='flex space-x-4 space-y-4 px-10 md:px-30 font-roboto font-black text-light-cream'>
        <div className='flex items-center justify-center'>
          <img src='src\assets\images\Totk_2.png' alt="Link y Zelda explorando" className='h-fit w-4/5 rounded-4xl'></img>
        </div>

        <div className='flex items-center'>
          <p>
            Link, debilitado tras el ataque, recibe un nuevo brazo que le otorga habilidades misteriosas. 
            Gracias a este poder, logra despertar en un mundo transformado. Ahora, Hyrule no solo se extiende en vastas llanuras y montañas, 
            también se abre hacia los cielos, con islas flotantes llenas de secretos, y hacia profundidades subterráneas cargadas de peligros.
          </p>
        </div>
      </div>

      <div className='flex items-center bg-charcoal-black py-10 space-x-2 space-y-4 font-roboto font-black text-light-cream px-10 md:px-30'>
        <p>
          La misión es clara: rescatar a Zelda y enfrentar la amenaza que busca corromper el reino. A lo largo del viaje, 
          Link conoce nuevas comunidades y aliados, se encuentra con enemigos más fuertes y se enfrenta a acertijos que desafían su ingenio. 
          Cada paso lo acerca a la verdad sobre el origen del mal que resurge y sobre el papel de los antiguos sabios que protegieron Hyrule en tiempos lejanos.
        </p>
      </div>

      <div className='flex flex-1 h-80 justify-center content-center bg-charcoal-black'>
        <img src='src\assets\images\Totk_3.png' alt="Los sabios" className='h-full rounded-4xl self-center'></img>
      </div>
    </div>
  )
}
