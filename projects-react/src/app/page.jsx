import icon1 from '../assets/icon-memory.svg'
import icon2 from '../assets/icon-reaction.svg'
import icon3 from '../assets/icon-verbal.svg'
import icon4 from '../assets/icon-visual.svg'
import Image from 'next/image'
import "./style.css"

export default function Home() {
  return (
    <div className="w-[100%] h-[100vh] overflow-hidden bg-white flex items-center justify-center font-hanken max-sm:items-start ">
      <div className="w-[37.5%] h-[50%] bg-white shadow-3xl rounded-3xl flex max-sm:flex-col max-sm:w-[100%] max-2xl:w-[60%] max-sm:h-[100%]">
        <div className="w-[50%] h-[100%] bg-gradient-to-b from-LightBGblue to-LightBGroyalblue rounded-3xl text-center flex flex-col items-center text-Paleblue max-sm:w-[100%] max-sm:rounded-tl-none max-sm:rounded-tr-none" >
          <p className=' mt-3 font-bold opacity-[0.7] text-[1.1em] max-lg:mt-3'>Your Result</p>
          <div className="min-w-[175px] min-h-[175px] max-w-[175px] max-h-[175px] rounded-full bg-gradient-to-b from-VioletBlue to-PersianBlue flex justify-center items-center flex-col mt-6 max-sm:min-w-[150px] max-sm:min-h-[150px] max-sm:max-h-[150px] max-lg:mt-4">
            <p className='text-[58px] font-[800] mb-1 h-10'>76</p>
            <p className='font-hanken opacity-[0.5] mt-4 text-[18px] '>of 100</p>
          </div>
          <p className='text-[28px] font-[700] my-2'>Great</p>
          <p className='text-[17px] font-[500] w-[68%] opacity-[0.7] mb-4'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className="w-[50%] h-[100%] flex flex-col p-8 max-sm:w-[100%]">
          <p className='text-Darkgrayblue font-bold text-[22px] mb-5'>Summary</p>

          {/* Cube 1 */}
          <div className="cube bg-LightRedBG max-sm:pl-8 max-sm:pr-8" >
            <div className='flex gap-2 items-center opacity-[0.7]'>
              <Image src={icon2} alt="icone" className='w-4 h-4' />
              <p className='text-LightRed text-[18px] font-bold'>Reaction</p>
            </div>
            <div>
                <p className='text-[18px]'> <strong className='text-Darkgrayblue opacity-100'>80</strong> <span className='opacity-[0.4] font-bold'>/ 100</span></p>
            </div>
          </div>

          {/* Cube 2 */}
          <div className="cube bg-OrangeyYellowBG">
            <div className='flex gap-2 items-center opacity-[0.7]'>
              <Image src={icon1} alt="icone" className='w-4 h-4' />
              <p className='text-OrangeyYellow text-[18px] font-bold'>Memory</p>
            </div>
            <div>
                <p className='text-[18px]'> <strong className='text-Darkgrayblue opacity-100'>92</strong> <span className='opacity-[0.4] font-bold'>/ 100</span></p>
            </div>
          </div>

          {/* Cube 3 */}
          <div className="cube bg-GreenTealBG ">
            <div className='flex gap-2 items-center opacity-[0.7]'>
              <Image src={icon3} alt="icone" className='w-4 h-4' />
              <p className='text-GreenTeal text-[18px] font-bold'>Verbal</p>
            </div>
            <div>
                <p className='text-[18px]'> <strong className='text-Darkgrayblue opacity-100'>61</strong> <span className='opacity-[0.4] font-bold'>/ 100</span></p>
            </div>
          </div>

          {/* Cube 4 */}
          <div className="cube bg-CobaltBlueBG">
            <div className='flex gap-2 items-center opacity-[0.7]'>
              <Image src={icon4} alt="icone" className='w-4 h-4' />
              <p className='text-CobaltBlue text-[18px] font-bold'>Visual</p>
            </div>
            <div>
                <p className='text-[18px]'> <strong className='text-Darkgrayblue opacity-100'>72</strong> <span className='opacity-[0.4] font-bold'>/ 100</span></p>
            </div>
          </div>
          <a href="/card"><button className='w-full bg-Darkgrayblue rounded-[100px] h-10 text-Paleblue font-bold text-[16px] text-center mt-5 hover:scale-105 transition-all '>Continue</button></a>
        </div>
      </div>
    </div>
  )
}
