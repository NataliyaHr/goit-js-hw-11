export default class pixabayApi {
  BASE_URL = 'https://pixabay.com/api/';
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  getImageList(query) {
    const searchParams = new URLSearchParams({
      key: this.apiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });
    return fetch(`${this.BASE_URL}?${searchParams}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => {
        console.log(error);
      });
  }
}