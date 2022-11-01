import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>"I love music", now thats in understament. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis nulla excepturi, blanditiis saepe sequi perspiciatis, ipsa minus delectus, ab enim id? Fuga consequatur, alias fugiat dolores ea quisquam quaerat? Nisi in repudiandae odit perspiciatis accusamus, iste sequi nemo esse et voluptas earum culpa fugiat maiores velit tenetur vel? Maiores.</p>
        <p>
          This is currnetly my go to song...
          <a href="https://open.spotify.com/track/3dr3IVp8wzEHbcOJ4qdqxd?si=b67e5f1f8e6f4444" target="blank">PUCKER UP</a>
        </p>
      </section>
    </Layout>
  );
}
