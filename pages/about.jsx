import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

function Profile() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
        <hr />
        <p>
          Just to give a idea of what kind of music I listen to here are a few of my favoritye songs...
          <ol>
            <li><a href="https://open.spotify.com/track/3dr3IVp8wzEHbcOJ4qdqxd?si=b67e5f1f8e6f4444" target="blank">PUCKER UP</a></li>
            <li><a href="https://open.spotify.com/track/7xyGX1zhc6vPRpWAdgUZMf?si=fad6c0a231724cd2" target="blank">I Love Color</a></li>
            <li><a href="https://open.spotify.com/track/0aR99yr1CNoxlZxm2veB65?si=18a2d01b528640d1" target="blank">At All</a></li>
            <li><a href="https://open.spotify.com/track/3OuG26d1OQADnacnOlsNtT?si=cfd0cb88d3244cc2" target="blank">Kontrol</a></li>
          </ol>
        </p>
      </section>
    </Layout>
  )
}

export default Profile