import backIcon from "../assets/images/menu.svg"
import imgBg from "../assets/images/bg.jpeg"
import { Link } from "react-router-dom";
function PostDetailPage() {
    return(

        <selection class="mobile-block">
        <Link to="/"class="back-button">

                <div class="container">
                    <img src="{backIcon}" alt="Back icon"/>
                    Назад
                </div>
            </Link>
            <div class="container">
                <div class="post-detail-block">
                    <h3 class="news-card__title">Найдены новые красивые обои на ваш ПК!</h3>
                    <span class="news_card__date">06.02.2024</span>
                    <p class="description">Красивые обои на ваш пк</p>
                    <img src="{imgBg}" alt="name"/>
                    <span class="author">Источник: <strong class="light-success-text">site.com</strong> </span>
                    <button class="tag-button">ПЕРЕЙТИ К ДЕТАЛЯМ</button>
                </div>


            </div>
    </selection>
    );



}

export default PostDetailPage;