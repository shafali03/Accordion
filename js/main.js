
const accordions = document.querySelectorAll('.accordion')

// Finds each accordion

const firstAccordion = accordions[0]
const secondAccordion = accordions[1]
const thirdAccordion = accordions[2]
const fourthAccordion = accordions[3]


// Find header for each accordion

const firstAccordionHeader = firstAccordion.querySelector('.accordion__header')

const secondAccordionHeader = secondAccordion.querySelector('.accordion__header')

const thirdAccordionHeader = thirdAccordion.querySelector('.accordion__header')

const fourthAccordionHeader = fourthAccordion.querySelector('.accordion__header')


// Adds event listeners to all accordion headers


firstAccordionHeader.addEventListener('click', event => {
  firstAccordion.classList.toggle('is-open')
})


secondAccordionHeader.addEventListener('click', event => {
  secondAccordion.classList.toggle('is-open')
})


thirdAccordionHeader.addEventListener('click', event => {
  thirdAccordion.classList.toggle('is-open')
})


fourthAccordionHeader.addEventListener('click', event => {
  fourthAccordion.classList.toggle('is-open')
})