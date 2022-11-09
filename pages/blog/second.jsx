import Layout, { siteTitle } from '../../components/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

function SecondBlog() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        <hr />
        <h1 className='text-center font-bold'>How to Get Others Involved</h1>
        <div className='py-10 m-auto'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quis accusantium. Sed delectus dolorem incidunt dolores recusandae amet nesciunt eligendi deserunt aspernatur! Iusto delectus, suscipit odit modi sequi necessitatibus possimus.</p>
        </div>
      </section>
    </Layout>
  )
}

export default SecondBlog