import Image from '../assets/logo-small.png'
import Text from '../assets/logo-text-horizontal-short.png'

function Logo() {
  return (
    <div className='flex items-center gap-5 hover:cursor-pointer'>
        <div className="w-15 h-10"><img src={Image} alt="Logo Image" className="drop-shadow-xl drop-shadow-black" /></div>
        <div className="w-50 h-10 mt-7"><img src={Text} alt="Logo Text" className="drop-shadow-xl drop-shadow-black" /></div>
    </div>
  );
}
export default Logo;