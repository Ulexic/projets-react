const Article = (prop, key) => {
    const article = prop.article;
    return (
        <article key={article.id}>
            <h1>{article.title}</h1>
            <h2>{article.subtitle}</h2>
            <img src={article.image} alt={article.title} />
            <i><br />{article.date.toDateString()}</i>
            <p>{article.content}</p>
        </article>
    );
}

export default Article;