import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faYelp} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer(){
    return(
    <>
        <section className='pt-20 w-full pb-10 bg-[#f3f3f3]'>
            <section className='text-center text-lg'>
                <p className='pb-4'>Copyright <FontAwesomeIcon icon={faCopyright}/> AC Infinity - All Rights Reserved. </p>

                <p className='border border-white w-[10rem] mx-auto'></p>
                <section className='space-x-4 pt-4'>
                        <a href="#">
                        <FontAwesomeIcon icon={faFacebook} size='xl' className='hover:scale-125'/>
                        </a>
                    
                        <a href="#">
                        <FontAwesomeIcon icon={faInstagram} size='xl' className='hover:scale-125'/>
                        </a>

                        <a href="#">
                        <FontAwesomeIcon icon={faYelp}  size='xl' className='hover:scale-125' />
                        </a>
                </section>
            </section>
        </section>
    </>
    )
}