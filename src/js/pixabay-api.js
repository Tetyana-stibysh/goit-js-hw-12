import axios from 'axios';
export async function fetchData(searchedPhoto, pageUpdate) {
  const API_KEY = '47335569-2cc921a6a7f6f320b70df2266';
  const URL = 'https://pixabay.com/api/';
  const params = {
    key: API_KEY,
    q: searchedPhoto,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: pageUpdate,
    per_page: 15,
  };
  const response = await axios(URL, { params });
  return response.data;
  //   console.log(response.data);
}

// fetchData('cat');
// async function fetchPosts() {
//   // Change the number of items in the group here
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/posts?_limit=5'
//   );
//   return response.data;
// }
