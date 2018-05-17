/* global XMLHttpRequest */
let cars,
  nextPage,
  ffPage,
  page = 0,
  size = 3

const gallery = document.querySelector('#gallery__boxes')

// Ajax
const xhr = new XMLHttpRequest()
xhr.open('GET', './../data/cars.json', true)
xhr.responseType = 'text'
xhr.send()

// Fetch Data and Display
xhr.onload = () => {
  if (xhr.status === 200) {
    cars = JSON.parse(xhr.responseText)
    loadData()
  }
}

// Load Content
function loadData () {
  cars.slice(page, size).map((getData, index) => {
    const addCar =
            `<div class="gallery-box" key=${index}>
              <div class="top-image">
                <img src="${getData.attrs.img}" alt="gallery image" />
              </div>
              <div class="content">
                <span>${getData.attrs.make}</span>
                <h2>${getData.attrs.model}</h2>
                <small>Car ID: ${getData.attrs.carId}</small>
              </div>
            </div>`
    return (gallery.innerHTML += addCar)
  })
}

// const back = document.querySelector('.backward');
// const fastf = document.querySelector('.forward');
// const prev = document.querySelector('.prev')
// const next = document.querySelector('.next')

function handleClick (direction) {
  nextPage = direction === 'next' ? (page += 3, size += 3) : (page -= 3, size -= 3)
  // (page >= 0 && direction === 'prev') ?
  // prev.setAttribute("disabled", true) : prev.removeAttribute("disabled", true);
  // (page === totalPages && direction === 'next') ?
  // next.setAttribute("disabled", true) : next.removeAttribute("disabled", true);

  // Reset the Gallery container and Load data.
  gallery.innerHTML = ' '
  loadData()
}

handleClick()

function handleFastClicks (direction) {
  ffPage = direction === 'ff' ? (page += 6, size += 6) : (page -= 6, size -= 6)

  // Resset the Gallery container and Load data.
  gallery.innerHTML = ' '
  loadData()
}

handleFastClicks()
