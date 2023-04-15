import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Blog.module.css'
const slug = () => {

    //task 1: Find the file corresponding to the slug
    //task 2: display the content of the file
    const [blog, setBlog] = useState();
    const router = useRouter();
    const { slug } = router.query;
    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((data) => {
            return data.json();
        }).then((parseddata) => {
            setBlog(parseddata);
        })
    }, [router.isReady])
    return (
        <main className={styles.main}>
            <h2 classche Name='my-3'>{blog && blog.title}</h2>
            <hr />
            <div className={styles.blog}>
                {blog && blog.desc}
            </div>
            <div className='d-flex justify-content-end my-5'>
               <b>Source:&nbsp; </b> {blog && blog.author}
            </div>
        </main>
    )
}

export default slug
