
export default function User({user}){
const {id,username}=user

    return(
        <div>
<p>User Id:{id}</p>
<p>User Name:{username}</p>
        </div>
    )
}