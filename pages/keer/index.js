import styles from '../../styles/Keer.module.css'

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
        <div key={list.id}>
          <a className={styles.single}>
            <h3>{list.name}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}
export default Keer
