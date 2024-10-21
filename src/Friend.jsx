
export default function Friend({friend}){

    // destructing the data
const {name,email }=friend;

const friendStyle={
     border: '2px solid aqua',
     margin:'8px',
     padding:'8px',
     borderRadius: '15px',
}
    return(
        <div style={friendStyle}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}