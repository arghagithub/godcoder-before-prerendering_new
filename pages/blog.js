import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link';
const blog = (props) => {
  //task 1: collect all data from blogdata directory
  //task 2: iterate them and display them
  const [blogs, setBlogs] = useState(props.allblogs);
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

export async function getServerSideProps(context) {
  let data= await fetch('http://localhost:3000/api/blogs');
  let allblogs= await data.json();
  return {

    props: {allblogs}, // will be passed to the page component as props
  }
}

export default blog
