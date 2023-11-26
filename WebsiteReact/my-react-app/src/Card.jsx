import profilePic from './assets/Foto.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Thomas Farel</h2>
            <p className="card-text">Ganteng Banget giilak</p>
        </div>
    );
}

export default Card