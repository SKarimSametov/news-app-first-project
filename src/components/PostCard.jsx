import { Link } from "react-router-dom";

function PostCard(props){
    return(
        <Link to="/post" class="news-card">
        <div class="container">
            <h1>{props.id}</h1>
            <h3 class="news-card__title">{props.title}</h3>
            <span class="news-card__date">{props.date}</span>
            <span class="news-card__category">{props.category}</span>
        </div>
    </Link>
    );
}

export default PostCard;