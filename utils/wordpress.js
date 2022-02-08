export async function getPosts() {
  const postsRes = await fetch("https://minant.lt/wp-json/wp/v2/posts");
  const posts = await postsRes.json();
  return posts;
}

export async function getPostsSlugs() {
  let elements = [];

  elements = await getPosts();

  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}
