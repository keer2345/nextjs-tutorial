import styles from '../../styles/Keer.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { lists: data }
  }
}
const Keer = ({ lists }) => {
  return (
    <div>
      <h1>All Lists </h1>
      {lists.map((list) => (
        <Link href={'/keer/' + list.id} key={list.id}>
          <a className={styles.single}>
            <h3>{list.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}
export default Keer