let areas = document.querySelectorAll('.price-area-label');
let packages = document.querySelectorAll('.price-package-type');

for (let package_type of packages) {
  package_type.addEventListener('click', () => {
    for (let j = 0; j < packages.length; j++) {
      packages[j].classList.remove('price-package-type-active');
    };
    package_type.classList.add('price-package-type-active');
  });
};

for (let area_type of areas) {
  area_type.addEventListener('click', () => {
    for (let j = 0; j < areas.length; j++) {
      areas[j].classList.remove('price-area-label-active');
    };
    area_type.classList.add('price-area-label-active');
  });
};

const calculate_price = () =>  {
  let area_type = document.querySelector('.price-area-label-active');
  let area_value = area_type.getAttribute('data-area');

  let package_type = document.querySelector('.price-package-type-active');
  let package_value = package_type.getAttribute('data-package-value');
  
  let price = (area_value * package_value);

  let area_display = document.querySelector('.price-square-value');
  let meter_display = document.querySelector('.price-meter-value');
  let object_display = document.querySelector('.price-object-value');

  area_display.innerHTML = (`${area_value} м<sup>2</sup>`);
  meter_display.innerHTML = (`${package_value} руб.`);
  object_display.innerHTML = (`${price} руб.`);
};
calculate_price();

for (let package_type of packages) {
  package_type.addEventListener('click', () => {
    calculate_price();
  })
};

for (let area_type of areas) {
  area_type.addEventListener('click', () => {
    calculate_price();
  })
};

let portfolio_links = document.querySelectorAll('.portfolio-category-link');
for (let link of portfolio_links) {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    for (let link_not_active of portfolio_links) {
      link_not_active.classList.remove('portfolio-category-link-active')
    };
    link.classList.add('portfolio-category-link-active');
  })
};
