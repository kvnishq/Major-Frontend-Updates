import "../css/cardlist.styles.css"
import Card from "./card";

const CardList = ({users})=>(
    //implicit return so no return() needed
        //const{monsters} = props
        
            <div className="card-list">
                {users.map((user)=>{

                    return (
                        <div>
                            <Card  user = {user} />
                        </div>
                    );
                }
                )}
            </div>
    )

export default CardList