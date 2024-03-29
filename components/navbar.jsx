import Link from 'next/link'
import Image from 'next/image'
import AuthLogin from './login-btn'

function Navbar() {
    return (
        <>
            <nav className='bg-black shadow-lg'>
                <div className='container mx-auto'>
                    <div className='sm:flex justify-around'>
                        <Link href="/" className='text-white text-3xl font-bold p-3'>
                            <Image
                                priority
                                src="/images/headphones.svg"
                                height={50}
                                width={50}
                                alt="headphones"
                            />
                            MUSIC BLOG</Link>
                        <ul className='text-gray-400 sm:self-center text-xl border-t sm:border-none'>
                            <li className='sm:inline-block'>
                                <Link href="/" className='p-3 hover:text-white'>Home</Link>
                            </li>
                            <li className='sm:inline-block'>
                                <Link href="/about" className='p-3 hover:text-white'>About</Link>
                            </li>
                            <li className='sm:inline-block'>
                                <Link href="/blog" className='p-3 hover:text-white'>Blog</Link>
                            </li>
                            <li className='sm:inline-block'>
                                <Link href="/playlist" className='p-3 hover:text-white'>Playlist</Link>
                            </li>
                        </ul>
                        <AuthLogin />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

{/* <ul>
<li>
    <Link href='/'>
        Home
    </Link></li>
<li>
    <Link href='/about'>
        About
    </Link>
</li>
<li>
    <Link href='/profile'>
        Profile
    </Link>
</li>
<li>
    <Link href='/blog'>
        Blog
    </Link>
</li>
</ul> */}