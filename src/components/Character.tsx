interface CharacterProps {
   name: string;
   description: string;
   image: string;
   background: string;
}

const Characters: React.FC<CharacterProps> = ({ name, description, image, background }) => {
   let pathImage = 'src/assets/images/' + image;
   return (
      <div className= {`flex px-10 md:px-30 items-center p-5 ${background}`}>
         <div className='flex w-40 p-5'>
            <img src={pathImage} alt={name} className='w-fit h-auto'/>
         </div>
         <div className='flex flex-col w-fit p-5'>
            <h2 className='font-cinzel text-3xl font-black text-light-cream'>{name}</h2>
            <p className='font-roboto font-black text-light-cream border-2 border-emerald-green p-5 rounded-4xl'>{description}</p>
         </div>
      </div>
   );
}

export default Characters;