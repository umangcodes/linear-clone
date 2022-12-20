// prefetch not working

import {useState} from "react"
import Link from "next/link"
export default function Header() {
  const [loggedin, setLoggedin] = useState(true)
  const handleLogout = () => {
    // dummy logout
    console.log("handle logout");
    setLoggedin(false);
  }
  return (
    <div className="h-24 border-b flex justify-between items-center">
      <div className="text-4xl mx-5">
        <Link href="/">Linear clone</Link>
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
