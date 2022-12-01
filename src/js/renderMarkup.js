export function renderMarkupList(element, countriesArr, markupCreating) {
    element.innerHTML = countriesArr.map(markupCreating).join(''); 
};

export function markupCreatingList({ flags, name }) {
    
    return `<li class="item-country">
          <img
            class="item-country-flag"
            src="${flags}"
            alt="${name}"
            height="20px"
            width="36px"
          />
          <p class="item-country-name">${name}</p>
        </li>`;
};

export function markupCreatingElement({ flags, name, capital, population, languages }) {
  
  return `
        <div class="country-title">
          <img  class="country-flag"
                src="${flags}"
                alt="${name}"
                height="24px"
                width="40px"
          />
          <h2 class="country-name">${name}</h2>
        </div>
        <div class="country-specification">
          <p class="country-specification-title">Capital:</p>
          <p class="country-specification-description">${capital}</p>
        </div>
        <div class="country-specification">
          <p class="country-specification-title">Population:</p>
          <p class="country-specification-description">${population}</p>
        </div>
        <div class="country-specification">
          <p class="country-specification-title">Language:</p>
          <p class="country-specification-description">${Object.values(languages).join(', ')}</p>
        </div>
  `   
};
