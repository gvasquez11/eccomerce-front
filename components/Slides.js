import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import slide1 from '../pages/assets/slide1.jpg'
import slide2 from '../pages/assets/slide2.jpg'
import slide3 from '../pages/assets/slide3.jpg'
import slide4 from '../pages/assets/slide4.jpg'
import slide5 from '../pages/assets/slide5.jpg'
import slide6 from '../pages/assets/slide6.jpg'

export default function Slides(){

return(
    <section className=' border border-[#28282B]'>
      <Carousel data-interval={10} delay={0}>
        <Carousel.Item>
          <Image src={slide1}></Image>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={slide2}></Image>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={slide3}></Image>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
                <Carousel.Item>
          <Image src={slide3}></Image>
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
                <Carousel.Item>
          <Image src={slide3}></Image>
          <Carousel.Caption>
            <h3>Fith slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
                <Carousel.Item>
          <Image src={slide3}></Image>
          <Carousel.Caption>
            <h3>Sixth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
)
}