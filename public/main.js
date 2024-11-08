// Import testimonials data (assuming module support)
import { testimonialsData } from './data.js';

// component.js
import { tripData } from './data.js';

// main.js
import { stepsData } from './data.js';

import {servicesData} from './data.js';

import {destinationsData} from './data.js';






// Function to create the HTML for each destination card
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createDestinationCard({ imgSrc, title, price, tripDuration, altText }) {
    return `
      <div class="col-md-4 mb-4">
        <div class="card overflow-hidden shadow">
          <img class="card-img-top" src="${imgSrc}" alt="${altText}" />
          <div class="card-body py-4 px-3">
            <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
              <h4 class="text-secondary fw-medium">
                <a class="link-900 text-decoration-none stretched-link" href="#!">${title}</a>
              </h4>
              <span class="fs-1 fw-medium">${price}</span>
            </div>
            <div class="d-flex align-items-center">
              <img src="assets/img/dest/navigation.svg" style="margin-right: 14px" width="20" alt="navigation" />
              <span class="fs-0 fw-medium">${tripDuration}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Function to render all destinations
  function renderDestinations(containerId) {
    const container = document.getElementById(containerId);
    const destinationsHTML = destinationsData.map(createDestinationCard).join('');
    container.innerHTML = destinationsHTML;
  }
  
  // Initialize and render destinations into the container with ID 'destinations-container'
  document.addEventListener('DOMContentLoaded', () => {
    renderDestinations('destinations-container');
  });
  






// OUR CORE SERVICES 
////////////////////////////////////////////////////////////////////////////////////////////////////////
function createServiceCard({ imgSrc, imgWidth, title, description }) {
    return `
      <div class="col-lg-3 col-sm-6 mb-6">
        <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
          <div class="card-body p-xxl-5 p-4">
            <img src="${imgSrc}" width="${imgWidth}" alt="Service" />
            <h4 class="mb-3 mt-3">${title}</h4>
            <p class="mb-0 fw-medium">${description}</p>
          </div>
        </div>
      </div>
    `;
  }
  
  // Function to render all services
  function renderServices(containerId) {
    const container = document.getElementById(containerId);
    const servicesHTML = servicesData.map(createServiceCard).join('');
    container.innerHTML = servicesHTML;
  }
  
  // Initialize and render services into the container with ID 'services-container'
  document.addEventListener('DOMContentLoaded', () => {
    renderServices('services-container');
  });



//BOOKING STEPS COMPONENT
////////////////////////////////////////////////////////////////////////////////////////////////////////
function createStep({ bgColor, iconSrc, title, description }) {
    return `
      <div class="d-flex align-items-start mb-5">
        <div class="${bgColor} me-sm-4 me-3 p-3" style="border-radius: 13px;">
          <img src="${iconSrc}" width="22" alt="steps" />
        </div>
        <div class="flex-1">
          <h5 class="text-secondary fw-bold fs-0">${title}</h5>
          <p>${description}</p>
        </div>
      </div>
    `;
  }
  
  // Function to render all steps
  function renderSteps(containerId) {
    const container = document.getElementById(containerId);
    const stepsHTML = stepsData.map(createStep).join('');
    container.innerHTML = stepsHTML;
  }

 // Initialize and render steps into the container with ID 'steps-container'
document.addEventListener('DOMContentLoaded', () => {
    renderSteps('steps-container');
  });




// UPCOMING TRIP COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////////////

export function TripCard() {
  return `
   
      <div class="card position-relative shadow" style="max-width: 370px;">
        <div class="position-absolute z-index--1 me-10 me-xxl-0" style="right:-160px;top:-210px;">
          <img src="assets/img/steps/bg.png" style="max-width:550px;" alt="shape" />
        </div>
        <div class="card-body p-3">
          <img class="mb-4 mt-2 rounded-2 w-100" src="${tripData.tripImage}" alt="booking" />
          <div>
            <h5 class="fw-medium">${tripData.tripTitle}</h5>
            <p class="fs--1 mb-3 fw-medium">${tripData.tripDate}</p>
            <div class="icon-group mb-4">
              <a class="btn btn-outline-dark order-1 order-lg-0 fw-medium" href="#!">Book Now</a>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center mt-n1">
                <img class="me-3" src="${tripData.buildingIcon}" width="18" alt="building" />
                <span class="fs--1 fw-medium">${tripData.participants} people going</span>
              </div>
              <div class="show-onhover position-relative">
                <div class="card hideEl shadow position-absolute end-0 start-xl-50 bottom-100 translate-xl-middle-x ms-3" style="width: 260px;border-radius:18px;">
                  <div class="card-body py-3">
                    <div class="d-flex">
                      <div style="margin-right: 10px">
                        <img class="rounded-circle" src="${tripData.favoriteImage}" width="50" alt="favorite" />
                      </div>
                      <div>
                        <p class="fs--1 mb-1 fw-medium">Ongoing</p>
                        <h5 class="fw-medium mb-3">${tripData.tripTitle}</h5>
                        <h6 class="fs--1 fw-medium mb-2">
                          <span>${tripData.ongoingProgress}%</span> completed
                        </h6>
                        <div class="progress" style="height: 6px;">
                          <div class="progress-bar" role="progressbar" style="width: ${tripData.ongoingProgress}%;" aria-valuenow="${tripData.ongoingProgress}" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn">
                  <img src="assets/img/steps/heart.svg" width="20" alt="step" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

  `;
}


// Select the element where you want to append the component
const container = document.getElementById('trip-container');

// Render the TripCard and append it to the container
container.innerHTML = TripCard();




// TESTIMONIAL COMPONENT 
/////////////////////////////////////////////////////////////////////////////////////////////////////////


// Select the testimonials container
const testimonialsContainer = document.getElementById('testimonials-container');

// Function to create testimonials HTML dynamically

function renderTestimonials() {
  const testimonialsHTML = testimonialsData
    .map((testimonial, index) => {
      return `
        <div class="carousel-item position-relative ${index === 0 ? 'active' : ''}">
          <div class="card shadow" style="border-radius:10px;">
            <div class="position-absolute start-0 top-0 translate-middle">
              <img class="rounded-circle fit-cover" src="${testimonial.imgSrc}" height="65" width="65" alt="${testimonial.name}" />
            </div>
            <div class="card-body p-4">
              <p class="fw-medium mb-4">"${testimonial.testimonial}"</p>
              <h5 class="text-secondary">${testimonial.name}</h5>
              <p class="fw-medium fs--1 mb-0">from ${testimonial.country}</p>
            </div>
          </div>
          <div class="card shadow-sm position-absolute top-0 z-index--1 mb-3 w-100 h-100" style="border-radius:10px;transform:translate(25px, 25px)"></div>
        </div>
      `;
    })
    .join('');

  testimonialsContainer.innerHTML = testimonialsHTML;
}

// Call the function to render testimonials
renderTestimonials();