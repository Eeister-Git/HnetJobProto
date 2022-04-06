import './Card.css'

const Card = ({userData}) =>{
    return(
        <div className="card">
            <div className="card_body">
                <div className="card_image">
                    <img src = {userData.picture.large} alt = "job"/>
            </div>
            <div className="card_text">
                <div className="card_title">Interdisciplinary Scholar</div>
                <div className="card_title">Posted 28 days ago</div>
                </div>
            </div>
        </div>
    );

};

export default Card;