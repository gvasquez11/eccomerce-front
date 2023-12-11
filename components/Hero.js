import heroVid from '../pages/assets/heroVid.mp4'

export default function Hero(){
return(
    <>
        <section className='min-h-screen'>
            <section className='flex justify-center items-end space-x-4 bg-transparent text-white transition-transform hover:cursor-pointer pt-2 text-lg text-center min-h-screen font-bold pb-4'>
                <section className='border border-white p-4 px-6 hover:bg-white hover:text-black hover:opacity-50 w-[11rem]'>Our Products</section>
                <section className='border border-white p-4 px-6 hover:bg-white hover:text-black hover:opacity-50 w-[11rem]'>Our Story</section>
            </section>
            <video src={require('../pages/assets/heroVid.mp4')} autoPlay muted loop className='w-full min-h-screen absolute top-0 -z-10 object-cover opacity-50' />
        </section>
    </>
)
}