import axios from 'axios';
// import { configDotenv } from 'dotenv';

// configDotenv();

// const KEY = process.env.RAPID_API_KEY;
// const HOST = process.env.RAPID_API_HOST;

const KEY = '0dc0b75f55mshb9af2ec61231884p1d1f07jsn3a2f0cdbf20e'
const HOST = 'online-code-compiler.p.rapidapi.com'

export async function getAllLanguages() {

  const getOptions = {
    method: 'GET',
    url: 'https://online-code-compiler.p.rapidapi.com/v1/languages/',
    headers: {
      'X-RapidAPI-Key': KEY,
      'X-RapidAPI-Host': HOST
    }
  };

  try {
    const response = await axios.request(getOptions);
    console.log(response.data);
    return response.data;

  } catch (error) {
    console.error(error);
  }
  
}


export async function getCodeOutput(language, code, input){
  const postOptions = {
    method: 'POST',
    url: 'https://online-code-compiler.p.rapidapi.com/v1/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': KEY,
      'X-RapidAPI-Host': HOST
    },
    data: {
      language: language,
      version: 'latest',
      code: code,
      input: input
    }
  };

  try {
    const response = await axios.request(postOptions);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

