import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Inter } from "next/font/google";
const Navbar = () => {
  return (
    <nav className={styles.mynav}>
      <ul>
        <Link style={{ textDecoration: 'none' }} href="/"><li>Home</li></Link>
        <Link style={{ textDecoration: 'none' }} href="/about"><li>About</li></Link>
        <Link style={{ textDecoration: 'none' }} href="/blog"><li>Blogs</li></Link>
        <Link style={{ textDecoration: 'none' }} href="/contact"><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar
