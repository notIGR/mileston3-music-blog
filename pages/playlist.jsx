import utilStyles from '../styles/utils.module.css';

function Playlist() {
    return (
        <section className={utilStyles.headingMd}>
            <h1 className="text-center font-bold">Find the right playlist for you...</h1>
            <hr />
            <div className='container mx-auto'>
                <div className='sm:flex justify-around'>
                    <ul className='sm:self-center text-xl border-t sm:border-none m-auto py-4 space-x-2'>
                        <li className='sm:inline-block'>
                            <iframe src="https://open.spotify.com/embed/playlist/3NM4MRaH5mOmO2ZUkcPvdW?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </li >
                        <li className='sm:inline-block'>
                            <iframe src="https://open.spotify.com/embed/playlist/5EwSngBoyXR2zsLFGi1aIL?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </li>
                        <li className='sm:inline-block'>
                            <iframe src="https://open.spotify.com/embed/playlist/45s94PcTWsAFwgjHsoAxhy?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </li>
                        <li className='sm:inline-block'>
                            <iframe src="https://open.spotify.com/embed/playlist/7ozmJelcgQZDYS0diIWKWM?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </li>
                        <li className='sm:inline-block'>
                            <iframe src="https://open.spotify.com/embed/playlist/4qmJ2DjBRy5FQG1vFZGQP6?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Playlist