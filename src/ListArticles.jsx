import Article from "./Article";

const ListArticles = ({ articles }) => {
    return (
        <div>
            <ul>{
                articles.map((article, index) => { return <Article article={article} key={index} /> })
            }</ul>
        </div>
    );
}

export default ListArticles;