import { fetchData } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconReject from './img/bi_x-octagon.png';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: '250',
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionClass: '',
  captionHTML: true,
  captionClass: 'captions',
  className: 'simpl-lightbox',
});
const loader = document.querySelector('.loader');
const form = document.querySelector('.form-search');
const galleryImg = document.querySelector('.gallery');
const buttonMore = document.querySelector('.button-more');

form.addEventListener('submit', handlerSubmit);
let textInput;
let page;
async function handlerSubmit(event) {
  event.preventDefault();
  loader.style.display = 'block';
  buttonMore.style.display = 'none';
  galleryImg.innerHTML = '';
  textInput = event.target.elements.text.value.trim();

  if (!textInput) {
    iziToast.show({
      message: 'Please fill in the search field.',
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      iconUrl: iconReject,
      position: 'topRight',
      progressBarColor: '#FFBEBE',
    });
    loader.style.display = 'none';
    return;
  }
  try {
    page = 1;
    const data = await fetchData(textInput, page);
    loader.style.display = 'none';
    if (data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
        iconUrl: iconReject,
        position: 'topRight',
        progressBarColor: '#FFBEBE',
      });
      event.target.reset();
      return;
    } else if (data.hits.length === data.totalHits) {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        backgroundColor: '#4E75FF',
        messageColor: '#FAFAFB',
        position: 'topRight',
        progressBarColor: '#6C8CFF',
      });
    } else {
      buttonMore.style.display = 'block';
    }
    const markup = createMarkup(data.hits);
    galleryImg.innerHTML = markup;

    gallery.refresh();

    const rect = galleryImg.children[0].getBoundingClientRect().height * 2;
    window.scrollBy({
      top: rect,
      behavior: 'smooth',
    });
  } catch (error) {
    loader.style.display = 'none';
    iziToast.show({
      message: 'The site is not responding or not found',
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      iconUrl: iconReject,
      position: 'topRight',
      progressBarColor: '#FFBEBE',
    });
  } finally {
    event.target.reset();
  }
}
buttonMore.addEventListener('click', handelClick);
async function handelClick(event) {
  buttonMore.style.display = 'none';
  loader.style.display = 'block';
  try {
    page += 1;
    const data = await fetchData(textInput, page);

    loader.style.display = 'none';

    if (
      data.hits.length === 0 ||
      (page - 1) * 15 + data.hits.length === data.totalHits
    ) {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        backgroundColor: '#4E75FF',
        messageColor: '#FAFAFB',
        position: 'topRight',
        progressBarColor: '#6C8CFF',
      });
    } else {
      buttonMore.style.display = 'block';
    }

    galleryImg.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    gallery.refresh();
    const rect = galleryImg.children[0].getBoundingClientRect().height * 2;

    window.scrollBy({
      top: rect,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.show({
      message: 'The site is not responding or not found',
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      iconUrl: iconReject,
      position: 'topRight',
      progressBarColor: '#FFBEBE',
    });
  }
}
