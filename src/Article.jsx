const Article = (prop) => {
    console.log(prop.article);
    return (
        <article >
            <h1>{prop.article.title}</h1>
            <h2>{prop.article.subtitle}</h2>
            <img src={prop.article.image} />
            <i>{prop.article.date.toDateString()}</i>
            <p>{prop.article.content}</p>
        </article>
    );
}

export default Article;