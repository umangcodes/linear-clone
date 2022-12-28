import {useState} from "react"
import Link from "next/link"

export default function Header() {
  const [loggedin, setLoggedin] = useState(true)

  const handleLogout = () => {
    console.log("handle logout");
    setLoggedin(false);
  }
  return (
    <div className="h-16 border-b flex justify-between items-center mx-48 z-40 sticky top-0 left-0 bg-clip-padding backdrop-blur-sm bg-opacity-60">
      <div className="flex gap-5" >
        <Link className="mx-5" href="/">Linear clone</Link>
        <Link href="/">Features</Link>
        <Link href="/">Github</Link>
        <Link href="/">Changes</Link>

      </div>
      <div className="mx-5">
        <ul className="flex gap-5">
          <li>
            { loggedin ? <button onClick={() => handleLogout()}>logout</button> : <Link href="/login" prefetch>Login</Link>}
          </li>
          <li>
            {loggedin ? <Link href="/dashboard">Dashboard</Link> : ""}
          </li>
        </ul>
      </div>
    </div>
  )
}
