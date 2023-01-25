// import 'server-only'

import { invoiceFields } from './types';

const uri = 'http://localhost:3000';

export async function getData(id: String) {
  console.log('user id in dataFetch module is :', id)
  try {
    const res = await fetch(`${uri}/api/${id}`);
    const parsed = await res.json()
    return parsed;
  } catch (error) {
    console.log('Error in get DATA ',error);
  }
}

export async function getDataById(id: String) {
  const res = await fetch(`${uri}/api/${id}`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }
  return await res.json();
}

export async function getInvoiceDataById(id: String) {
  const res = await fetch(`${uri}/api/pay-invoice/${id}`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }
  return await res.json();
}

export async function submitData(data: invoiceFields) {
  console.log('data in SumbitData (BE) :', data)
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

export async function updateData(id: String, data: invoiceFields) {
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
