// import 'server-only'

const uri = 'http://localhost:3000';

export async function getData() {
  const res = await fetch(`${uri}/api/hello`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }
  const parsed = await res.json()
  console.log(parsed)

  return parsed;
}

export async function getDataById(id) {
  const res = await fetch(`${uri}/api/${id}`);
  console.log('res', res.body);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }
  return await res.json();
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
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateData(id, data) {
  console.log('id from param', id);
  console.log('data from param', data);
  try {
    const response = await fetch(`${uri}/api/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
