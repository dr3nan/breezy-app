// import 'server-only'

const uri = 'http://localhost:3000';

export async function getData() {

  try {
    const res = await fetch(`${uri}/api/hello`);
    console.log('getData response: ', await res.json());
    return await res.json();
  } catch (error) {
    console.log('error in getData: ', error);
  }
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
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateData(id, data) {
  try {

    const res = await fetch(`${uri}/api/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
