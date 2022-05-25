import React from 'react'
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    console.log(useParams());
    const {title}  = useParams();
    return (
        <div>
            Blog Details : {title}
        </div>
    )
}

export default BlogDetails
