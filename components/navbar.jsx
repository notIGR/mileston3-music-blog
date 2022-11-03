import Link from 'next/link'

function Navbar() {
    return (
        <ul>
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
        </ul>
    )
}

export default Navbar