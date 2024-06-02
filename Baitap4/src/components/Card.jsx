import "./Card.css";
const Card = (props) => {
  const moModal = () => {
    document.getElementById("nenmodal-1").classList.toggle("active");
  };
  return (
    <>
      <div className="card" onClick={moModal}>
        <p className="student_id">ID:{props.id}</p>
        <p className="student_name">{props.name}</p>
        <span
          style={{ backgroundColor: props.total == "0 ₫" ? "#74b9ff" : "red" }}
        >
          {"Total:" + props.total}
        </span>
      </div>
      <div className="nenmodal" id="nenmodal-1">
        <div className="nenmodal2"></div>
        <div className="popup" id="popup">
          <p className="student_id">ID:{props.id}</p>
          <p className="student_name">{props.name}</p>
          <span
            style={{
              backgroundColor: props.total == "0 ₫" ? "#74b9ff" : "red",
            }}
          >
            {"Total:" + props.total}
          </span>
          <div className="closemodal">
            <button onClick={moModal}>OK</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
