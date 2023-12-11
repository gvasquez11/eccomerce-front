import Link from "next/link"
import Image from "next/image"
import logo from '../pages/assets/logo.png'

export default function Header(){
    return(
        <>
        <section className="bg-[#28282B] text-white flex justify-between px-2 items-center h-[5rem] w-full absolute z-10">
            <Link href={'/'}>
                <Image src={logo} width={250} height={31}></Image>
            </Link>
            <nav className=" space-x-4 pr-8">
                <Link href={'/'}> </Link>
                <Link href={'/products'} className="no-underline text-white hover:opacity-50" text-white>All Products </Link>
                <Link href={'/technicalguides'}  className="  no-underline text-white hover:opacity-50">Technical Guides</Link>
                <Link href={'/community' } className="no-underline text-white hover:opacity-50"> Community</Link>
                <Link href={'/company' } className="no-underline text-white hover:opacity-50">Company</Link>
                <Link href={'/support' } className="  no-underline text-white hover:opacity-50">Support</Link>
                <Link href={'/account' } className="   no-underline text-white hover:opacity-50">Account</Link>
                <Link href={'/cart'} className="no-underline text-white hover:opacity-50">Cart (0)</Link>
            </nav>
        </section>
        </>
    )
}