import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          This was written by <span style={{fontSize: 1.2+'em', fontWeight:600, color:'red'}}>EB</span>
        </p>
      </main>

      <Footer />
    </div>
  )
}
