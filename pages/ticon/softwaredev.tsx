import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/Site/SoftwareProd/Layout';
const Development: NextPage = () => {
    return (
    <div className="h-screen items-center justify-center w-full">
      <Head>
        <title>TiCON</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
      <Layout />
      </main>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.1/flowbite.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
    </div>
    );
}

export default Development;