const inputBox = document.getElementById('tagBox');
const outputBox = document.getElementById('outputBox');
let tagCount = 0;
const tagsArray = []; // declare an empty array to store the tags

inputBox.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const value = inputBox.value.trim(); // trim extra white spaces from the beginning and end of the input
    const regex = /^[a-zA-Z\s]*$/; // use regex to check if the input contains only letters and spaces
    if (value.length > 0 && regex.test(value) && tagCount < 10) {
      const tagBox = document.createElement('div');
      tagBox.innerText = value;
      outputBox.appendChild(tagBox);
      inputBox.value = '';
      tagsArray.push(value); // add the new tag's value to the tagsArray
      tagCount++;
    } else {
      return;
    }
  }
});
