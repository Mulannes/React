import background from '@/assets/bg-main-desktop.png'
// import cardFront from '@/assets/bg-card-front.png'
// import cardBack from '@/assets/bg-card-back.png'
import Image from 'next/image'

export default function Card(){
    return(
        <div className="w-full h-[100vh] bg-slate-900">
            <Image src={background} alt="cardFront" />   
            <div className="bg-[url('../../assets/bg-card-front.png')]">
            <p>0000000000000000</p>
            <p>Nome pessoa</p>
        </div>
        </div>
    )
}