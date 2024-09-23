import menuIcon from "../pages/menu.svg";
import mineIcon from "../pages/mine.svg";
import megaIcon from "../pages/mega.svg";
import appIcon from "../pages/app.svg";
import { Link } from "react-router-dom";
function CategoriesPage(){
    return(

        <selection class="mobile-block">
        <div class="mobile-block__header is-warning">
            Категории
        </div>
        <div class="container">
            <div class="category-row">
                <Link to="/" class="category-item">
                    <img src="{menuIcon}" alt="Home" class="category-item__img"/>
                    <span class="category-item__title">Все новости</span>
                </Link>

                <Link to="/" class="category-item">
                    <img src=".{mineIcon}" alt="Games" class="category-item__img"/>
                    <span class="category-item__title">Развлечения</span>
                </Link>
                
                <Link to="/" class="category-item">
                    <img src="{appIcon}" alt="Football" class="category-item__img"/>
                    <span class="category-item__title">Приложение</span>
                </Link>
                
                <Link to="/" class="category-item">
                    <img src="{megaIcon}" alt="Football" class="category-item__img"/>
                    <span class="category-item__title">В разработке</span>
                </Link>
            </div>
        </div>

    </selection>

    );
}

export default CategoriesPage;