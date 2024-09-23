import categoryIcon from "../components/menu.svg";
import { Link } from "react-router-dom";
function Header(){
    return (
        <header class="header">
        <div class="container">
            <Link to="/categories"class="btn-category">
                <img src={categoryIcon} alt="Menu button"/>
                Назад
            </Link>
        </div>
    </header>

    );
}
export default Header;