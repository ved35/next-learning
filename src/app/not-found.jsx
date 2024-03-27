import Link from "next/link"

const NotFound = () => {
    return <div>
        <h2>Not-found</h2>
        <p>sorry, this page you looking for is not exist</p>

        <Link href='/' >Home</Link>
    </div>
}

export default NotFound