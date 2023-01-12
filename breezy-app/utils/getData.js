import 'server-only'

const uri = 'http://localhost:3000';

export default async function getData() {
  const res = await fetch(`${uri}/api/hello`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }
  return res.json();
}

