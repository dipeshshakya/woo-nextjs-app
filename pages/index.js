import Image from 'next/image'
import Header from '../src/components/layouts/header';
import Footer from '../src/components/layouts/footer';

export default function Home() {
  return (
    <div >
   
      <Header/>
      <main >
        <h1 >
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

    <Footer/>
    </div>
  )
}
