export const getStaticPaths = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map((list) => {
    return {
      params: { id: list.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()

  return {
    props: { keer: data }
  }
}
const Details = ({ keer }) => {
  return (
    <div>
      <h1>{keer.name}</h1>
      <p>{keer.email}</p>
      <p>{keer.website}</p>
      <p>{keer.address.city}</p>
    </div>
  )
}

export default Details
