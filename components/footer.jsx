import { ImFacebook, ImYoutube, ImTwitter } from "react-icons/im"
import Link from "next/link"
import Newsletter from "./newsletter"

export default function Footer() {
    return (
        <footer className='bg gray-100'>
            <Newsletter />
            <div className='container mx-auto flwx justify-center py-12'>
                <div className='flex gap-6 justify-center'>
                    <Link href={"https://www.facebook.com/"}><ImFacebook color="#999999" /></Link>
                    <Link href={"https://www.youtube.com/"}><ImYoutube color="#999999" /></Link>
                    <Link href={"https://twitter.com/"}><ImTwitter color="999999"/></Link>
                </div>

                <p className='py-5 text-gray-400 text-center'>Copyright &copy;2022</p>
            </div>

        </footer>
    )
}