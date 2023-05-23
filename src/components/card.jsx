import "../css/card.styles.css"

const Card = ({user})=> {
    const {studentName, id, bio, studentid} = user

    return(

            <div className="card-container" key = {id} >
                        <img alt = {`monster ${studentName}`}
                             src = {`https://robohash.org/${studentid}?set=set2&size=180x180`}
                        ></img>
                        <h2>{studentName}</h2>
                        <p>{bio}</p>
                        
            </div>
    )
        }

export default Card 