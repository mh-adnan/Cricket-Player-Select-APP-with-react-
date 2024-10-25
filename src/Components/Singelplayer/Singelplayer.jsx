import "./Singelplayer.css";

const Singelplayer = ({ player, handelSelectedPlayer }) => {
    const { cricketer_name, country, role, image_url,price,id,cricketer_type } = player
    return (
        <div className="card">
            <img src={image_url} alt={cricketer_name}/>
            <p>Name : {cricketer_name}</p>
            <p>country : {country}</p>
           <p>price:{price}</p>
           <p>id : {id}</p>
           <p>type : {cricketer_type}</p>
           <button onClick={()=>handelSelectedPlayer(player)} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
    Choose Player
</button>


        </div>
    );
};

export default Singelplayer;
