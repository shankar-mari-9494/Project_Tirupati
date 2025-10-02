let selectedRating = 0;

const stars = document.querySelectorAll('#starRating span');
stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    updateStars();
  });
});

function updateStars() {
  stars.forEach(star => {
    const value = parseInt(star.getAttribute('data-value'));
    star.classList.toggle('selected', value <= selectedRating);
  });
}

function submitReview() {
  const reviewText = document.getElementById('reviewText').value.trim();
  const reviewList = document.getElementById('reviewList');

  if (selectedRating === 0 || reviewText === '') {
    alert('Please select a rating and write a review.');
    return;
  }

  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');
  reviewElement.innerHTML = `
    <div>${'★'.repeat(selectedRating)}${'☆'.repeat(5 - selectedRating)}</div>
    <p>${reviewText}</p>
  `;
  reviewList.prepend(reviewElement);

  // Reset
  selectedRating = 0;
  updateStars();
  document.getElementById('reviewText').value = '';
}