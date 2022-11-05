import utilStyles from '../styles/utils.module.css';

function Home() {
    return (
        <section className={utilStyles.headingMd}>
        <h1 className="text-center">Hello all and welcome to my personal Music Blog!</h1>
        <hr />
        <div>
        <p className="text-center p- m-auto"> Here you will be able to read about all my music adventures. Here I will be posting anything and everything related to my personal musical adventures! Stories, playlist, and articels will all be shared on this site.</p>
        </div>
        </section>
    )
}

export default Home