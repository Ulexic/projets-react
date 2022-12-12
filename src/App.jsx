import Header from "./Header";
import Footer from "./Footer";
import ListArticle from "./ListArticle";

function App() {

  const articles = [
    {
      title: "Titre de l'article 1",
      image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
      subtitle: "Sous-titre de l'article 1",
      date: new Date("2021-01-01"),
      content: "Contenu de l'article 1",
      isPublished: true,
    },
    {
      title: "Titre de l'article 2",
      image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
      subtitle: "Sous-titre de l'article 2",
      date: new Date("2021-01-01"),
      content: "Contenu de l'article 2",
      isPublished: false,
    },
    {
      title: "Titre de l'article 3",
      image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
      subtitle: "Sous-titre de l'article 3",
      date: new Date("2021-01-01"),
      content: "Contenu de l'article 3",
      isPublished: true,
    },
  ];

  const publishedArticles = []
  for (let i in articles) {
    if (articles[i].isPublished) {
      publishedArticles.push(articles[i])
    }
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <ListArticle articles={publishedArticles} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
