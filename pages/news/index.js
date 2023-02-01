function News({ news }) {
  return (
    <>
      {news.map((data, i) => {
        return (
          <div key={`article_${i}`}>
            <p>
              {data.id} | {data.title} | {data.description} | {data.category}
            </p>
          </div>
        );
      })}
    </>
  );
}
export default News;

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
}
