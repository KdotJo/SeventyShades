import spring from "../../Pages/Seasons/Spring.jsx"
import summer from "../../Pages/Seasons/Summer.jsx"
import fall from "../../Pages/Seasons/Fall.jsx"
import winter from "../../Pages/Seasons/Winter.jsx"




const Dropdown = () => {
    return (
        
        <div className="dropdown-menu">
            <ul className="Options">
                <li><a href="/spring">Spring</a></li>
                <li><a href="/summer">Summer</a></li>
                <li><a href="/fall">Fall</a></li>
                <li><a href="/winter">Winter</a></li>
            </ul>
        </div>
    )
}

export default Dropdown