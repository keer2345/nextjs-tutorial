import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Keer List | Home</title>
        <meta name="keywords" content="keer" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem enim excepteur ut tempor in. Aute et duis duis esse occaecat qui
          mollit incididunt amet sint. Sunt laboris cupidatat culpa eu cupidatat
          sunt culpa Lorem anim. Eu tempor non dolor tempor proident. Labore
          exercitation in velit nostrud fugiat ullamco et sint ad officia
          eiusmod tempor do. Exercitation Lorem eiusmod ipsum cillum cupidatat
          eiusmod duis amet minim esse culpa aute nulla. Sit deserunt ut officia
          laborum est eiusmod do culpa ad ut consectetur laborum minim.
        </p>
        <p className={styles.text}>
          Qui mollit non excepteur reprehenderit. Commodo ipsum quis irure quis
          dolore ullamco mollit ad enim cupidatat sint enim. Laboris dolor
          aliquip excepteur duis enim veniam ut adipisicing veniam id sit quis.
          Nisi veniam cupidatat esse voluptate culpa ex et cillum Lorem esse.
        </p>
        <Link href="/keer">
          <a className={styles.btn}>See Keer Listing</a>
        </Link>
      </div>
    </>
  )
}
