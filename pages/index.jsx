import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

function Home() {
    return (
        <section className={utilStyles.headingMd}>
            <h1 className="text-center font-bold">Hello all and welcome to my personal Music Blog!</h1>
            <hr />
            <div>
                <p className="text-center py-10 m-10"> Here you will be able to read about all my music adventures. Here I will be posting anything and everything related to my personal musical adventures! Stories, playlist, and articels will all be shared on this site. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore accusamus libero sapiente repudiandae quidem, quis beatae neque quae, inventore pariatur dolores illo quo iste, quisquam tempora quasi alias ad.</p>
            </div>
        </section>
    )
}

export default Home