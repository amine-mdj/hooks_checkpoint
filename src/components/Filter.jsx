import img from "../recherhce.png"
const Filter = ({recherche}) => {
    return ( <div className="bareRecherche">
        <input type="text" name="input" id="input" placeholder="title ... " />
            <button onClick={()=>recherche((document.getElementById("input").value))}> <img src={img} alt="" /> </button>
    </div> );
}
 
export default Filter;