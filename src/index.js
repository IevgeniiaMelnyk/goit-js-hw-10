import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import { getRefs } from './js/refs';
import { markupCreatingElement, renderMarkupList } from './js/renderMarkup';
import { markupCreatingList } from './js/renderMarkup';
import { markupCreatingElement } from './js/renderMarkup';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
    e.preventDefault();
    clear();

    const searchQuery = refs.searchBox.value.trim();
       
    if (searchQuery === '') {
        return;
    }
    fetchCountries(searchQuery)
        .then((countriesArr) => {
            
            if (countriesArr.length > 10) {
                tooFewLetters();
            };
            if (countriesArr.length <= 10 && countriesArr.length >= 2) {
                renderMarkupList(refs.countriesUl, countriesArr, markupCreatingList);
            };
            if (countriesArr.length < 2) {
                renderMarkupList(refs.countryInfo, countriesArr, markupCreatingElement);
            };
        })
        .catch(onFetchError);    
};

function onFetchError() {
  Notiflix.Notify.failure("Oops, there is no country with that name")
};

function tooFewLetters() {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
};

function clear() {
    refs.countriesUl.innerHTML = '';
    refs.countryInfo.innerHTML = '';
};    


