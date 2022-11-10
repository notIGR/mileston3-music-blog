import { ImSoundcloud, ImSpotify, ImLinkedin, ImGithub, ImYoutube} from "react-icons/im"
import { SiBeatport } from "react-icons/si"
import Link from "next/link"
import Newsletter from "./newsletter"

export default function Footer() {
    return (
        <footer className='bg gray-100'>
            <Newsletter />
            <div className='container mx-auto flwx justify-center py-12'>
                <div className='flex gap-6 justify-center'>
                    <Link href={"https://open.spotify.com/"} target="_blank"><ImSpotify color="#999999" /></Link>
                    <Link href={"https://soundcloud.com/"} target="_blank"><ImSoundcloud color="#999999" /></Link>
                    <Link href={"https://www.youtube.com/watch?v=c0-hvjV2A5Y"} target="_blank"><ImYoutube color="#999999" /></Link>
                    <Link href={"https://www.beatport.com/"} target="_blank"><SiBeatport color="999999"/></Link>
                    <Link href={"https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BP%2FikebizQZCba0BTljltXg%3D%3D"} target="_blank"><ImLinkedin color="999999" /></Link>
                    <Link href={"https://github.com/notIGR/mileston3-music-blog"} target="_blank"><ImGithub color="999999"/></Link>
                </div>

                <p className='py-5 text-gray-400 text-center'>Copyright &copy;2022</p>
            </div>

        </footer>
    )
}