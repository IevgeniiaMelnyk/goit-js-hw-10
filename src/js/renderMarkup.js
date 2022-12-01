export function renderMarkupList(element, countriesArr, markupCreating) {
    element.innerHTML = countriesArr.map(markupCreating).join(''); 
};

export function markupCreatingList({ flags: { svg: flag }, name: { official: name } }) {
    
    return `<li class="item-country">
          <img
            class="item-country-flag"
            src="${flag}"
            alt="${name}"
            height="20px"
            width="36px"
          />
          <p class="item-country-name">${name}</p>
        </li>`;
};

export function markupCreatingElement({ flags: { svg: flag }, name: { official: name }, capital: capital, population: population, languages:
  language }) {
  
  return `
        <div class="country-title">
          <img  class="country-flag"
                src="${flag}"
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
          <p class="country-specification-description">${Object.values(language).join(', ')}</p>
        </div>
  `   
};
