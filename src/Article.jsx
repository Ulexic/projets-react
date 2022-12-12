const Article = (prop, key) => {
    return (
        <li key={key}>
            <h1>{prop.article.title}</h1>
            <h2>{prop.article.subtitle}</h2>
            <p>{prop.article.date.getDate()}</p>
            <img src={prop.article.image} />
            <p>{prop.article.content}</p>
        </li>
    );
}

export default Article;