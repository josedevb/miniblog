/* eslint-disable require-await */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const Airtable = require('airtable')

const db = new Airtable({
  apiKey: process.env.AIRTABLE_TOKEN,
}).base(process.env.AIRTABLE_BASE_ID)

const headers = {
  /* Required for CORS support to work */
  'Access-Control-Allow-Origin': '*',
  /* Required for cookies, authorization headers with HTTPS */
  'Access-Control-Allow-Credentials': true,
}

exports.handler = async function () {
  try {
    const articles = (await db('articles').select().all())
      .map((e) => ({
        _id: e.id,
        ...e.fields,
      }))
      .filter((e) => e.publish)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        articles,
      }),
    }
  } catch (e) {
    console.error(e)
    return {
      statusCode: 400,
      headers,
    }
  }
}
