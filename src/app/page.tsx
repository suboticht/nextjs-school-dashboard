import Link from "next/link"

const Homepage = () => {
  return (
    <div className=''>
      <h1>Homepage</h1>
      <Link
        href={'/admin'}
      >
        Admin
      </Link>
    </div>
  )
}

export default Homepage