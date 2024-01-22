
import { LOGO } from '../utils/constants'
const Header = () => {
  return (
    <>
      <div className='absolute z-30 bg-gradient-to-b from-black'>
        <img className="w-36 lg:w-52"  src={LOGO}  alt="" />
      </div>
    </>
  )
}

export default Header