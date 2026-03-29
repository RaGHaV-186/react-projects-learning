
function BlogCard({title,author,content}){

    return (
        <div>
            <h1>{title}</h1>
            <h4>{content}</h4>
            <p>{author}</p>
        </div>
    )
}

export default BlogCard