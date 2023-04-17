export async function get() {
  const res = await fetch('http://localhost:1337/api/articles?populate=*');
  const data = await res.json();
  return { body: data};
}