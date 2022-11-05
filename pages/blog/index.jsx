import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link'

function Blog() {
    return (
        <section className={utilStyles.headingMd}>
            <h1 className='text-center'>Here is a list of what I have written so far...</h1>
            <ul className='text-gray-400 sm:self-center text-xl border-t sm:border-none p-4 space-x-4 text-center'>
                <li className='sm:inline-block'><Link href='/blog/first'>My First Music Festival</Link></li>
                <li className='sm:inline-block'><Link href='/blog/second'>How to get others involved</Link></li>
            </ul>
        </section>
    )
}

export default Blog