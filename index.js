'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => {
      if (response.ok) {
      return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => {
      displayResults(responseJson)})
    .catch(error => {
      return $('#js-error-message').text(`Something went wrong please try again.`);
    });
};

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breed = $('input').val();
    $('#js-error-message').text(``)
    getDogImage(breed);
  });
}

$(function() {
  watchForm();
});