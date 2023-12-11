import animation1 from '../pages/assets/fan.gif'
import animation2 from '../pages/assets/plant.gif'
import { useRef } from "react"
import Image from 'next/image'
import { Slide } from 'react-reveal'
import Spin from 'react-reveal/Spin';


export default function About() {


    return(
        <>
            <section className=" h-screen w-full ">
                <h1 className="pt-10 mt-24 text-center text-4xl">About Us</h1>
                <section className="grid grid-cols-2 justify-center items-center w-full h-full">
                    <Spin delay={350}>
                        <section className="flex justify-center items-center w-full h-full space-x-20">
                            <section>
                                <Image src={animation1} height={300} width={300}></Image>
                            </section>
                            <section>
                                <Image src={animation2} height={300} width={300}></Image>
                            </section>
                        </section>
                    </Spin>
                    <Slide right delay={350}>
                        <section className=" text-2xl px-14 text-center">
                            <p>AC Infinity Inc. is a technology company focused on environmental controls. Our team's primary vision is to design truly innovative systems for audio-video, HVAC, and agricultural applications. </p>
                        </section>
                    </Slide>
                </section>
            </section>
        </>
    )
}
