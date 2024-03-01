import "./Costite.css";
import CostDate from "./CostDate";

function CostItem(props) {

    // const costDate = new Date(2021, 2, 12);
    // const costDescription = 'Холодильник';
    // const costAmount = 999.99;
    return (
    <div className="cost-item">
        <CostDate date={props.date}/>
        <div className="cost-item_description">
            <h2>{props.description}</h2>
            <div className="cost-item_price">{props.amount}</div>
        </div>
    </div>)
}

export default CostItem;