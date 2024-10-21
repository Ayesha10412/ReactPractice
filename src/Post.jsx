
export default function Post({post}){
    const {id, userId, title,body}=post
    return(
        <div>
            <p>Id: {id}</p>
            <p>UserId: {userId}</p>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
        </div>
    )
}