import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Blog.module.css'
const slug = (props) => {

    //task 1: Find the file corresponding to the slug
    //task 2: display the content of the file
    const [blog, setBlog] = useState(props.myblog);
    return (
        <main className={styles.main}>
            <h2 className='my-3'>{blog && blog.title}</h2>
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

export async function getServerSideProps(context) {
    const { slug } = context.query;
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    let myblog = await data.json();
    return {
        props: { myblog }, // will be passed to the page component as props
    }
}

export default slug
