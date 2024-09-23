import PostCard from "./PostCard";

function PostList(){


    const posts = [
        {
            id: 1,
            title: "Тест1",
            date: "2222",
            category: "тест3"

        },
        {
            id: 1,
            title: "Тест1",
            date: "2222",
            category: "тест3"

        },
        {
            id: 1,
            title: "Тест1",
            date: "2222",
            category: "тест3"

        }
    ]

    return(
        <div class="all-news-block">
            {posts.map((post, index) => (
                <PostCard
                    key={index}
                    id={post.id}
                    title={post.title}
                    date={post.date}
                    category={post.category}
                />

            ))}
        </div>
    );
}

export default PostList;