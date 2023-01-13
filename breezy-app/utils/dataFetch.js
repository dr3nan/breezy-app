// import 'server-only'

const uri = 'http://localhost:3000';



export async function getData() {
  const res = await fetch(`${uri}/api/hello`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }
  console.log(res)
  return res.json();
}

export async function submitData(data) {
  try {
    const res = await fetch(`${uri}/api/hello`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

