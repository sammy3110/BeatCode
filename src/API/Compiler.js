const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://online-code-compiler.p.rapidapi.com/v1/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '0dc0b75f55mshb9af2ec61231884p1d1f07jsn3a2f0cdbf20e',
    'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
  },
  data: {
    language: 'python3',
    version: 'latest',
    code: 'a = input(); print(a);',
    input: '3'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}