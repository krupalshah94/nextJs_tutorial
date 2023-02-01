function CategoryArticle({ news, category }) {
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>
      </h1>
      {news.map((a, i) => {
        return (
          <div key={`article_details_${i}`}>
            <p>
              {a.id} | {a.title} | {a.description} | {a.category}
            </p>
            <hr />
          </div>
        );
      })}
    </>
  );
}
export default CategoryArticle;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  return {
    props: {
      news: data,
      category,
    },
  };
}
