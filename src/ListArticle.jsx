import Article from "./Article";

const ListArticle = ({ articles }) => {
    return (
        <div>
            <ul>{
                articles.map((article, i) => { return <Article article={article} key={i} /> })
            }</ul>
        </div>
    );
}

export default ListArticle;