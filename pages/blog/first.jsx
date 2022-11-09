import Layout, { siteTitle } from '../../components/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

function FirstBlog() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        <hr />
        <h1 className='text-center font-bold'>The Beauty of Live Music</h1>
        <div className='py-10 m-auto'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veritatis repellat ab, ea ratione quae eaque culpa vero necessitatibus quo ipsa obcaecati eveniet earum accusamus veniam? Ab dignissimos soluta rem!</p>
        </div>
      </section>
    </Layout>
  )
}

export default FirstBlog