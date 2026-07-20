import "../styles/StatCard.css";

function StatCard({ title , value , icon }){
    return (
        <div className="statcard">
            <div className="icon">
                {icon}
            </div> 
            <div>
                <h2>{value}</h2>
                <p>{title}</p>
            </div>       
    </div>
    );
}
export default StatCard;