
import {HomeIcon, MagnifyingGlassIcon, BoltIcon, UserIcon, RectangleStackIcon  } from '../node_modules/@heroicons/react/24/outline';
import HeaderIcons from './HeaderIcons';


function Header() {
  return (
    <header className=' flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
    <div className='flex flex-grow justify-evenly max-w-2xl'>
    <HeaderIcons title="Home" Icon={HomeIcon} />
    <HeaderIcons title="Trending" Icon={BoltIcon} />
    <HeaderIcons title="Search" Icon={MagnifyingGlassIcon} />
    <HeaderIcons title="Collection" Icon={RectangleStackIcon} />
     <HeaderIcons title="Account" Icon={UserIcon} />
    </div>

    
   
      <div className='text-2xl font-body ' ><h1 className='mb-4 cursor-pointer '>Wlicks</h1></div>
    
  </header>
    
  
  )
}

export default Header