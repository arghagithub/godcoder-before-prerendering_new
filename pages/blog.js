import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link';
const blog = () => {
  //task 1: collect all data from blogdata directory
  //task 2: iterate them and display them
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then((data) => {
      return data.json();
    }).then((parseddata) => {
      setBlogs(parseddata);
    })
  }, [])
  return (
    <main className={styles.main}>
      <div className={styles.blogs}>
        {
          blogs.map((blog, index) => {
            return (
              <div className={styles.blogitem} key={index}>
                <Link style={{ textDecoration: 'none', color: 'black' }} href={`/blogpost/${blog.slug}`} ><h3>{blog.title}</h3></Link>
                <p>
                  {blog.metadesc}
                </p>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

export default blog
