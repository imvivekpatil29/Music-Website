// Get the search input and music list elements
const searchInput = document.getElementById("searchInput");
const musicList = document.getElementById("musicList");

// Add an event listener to the search input to filter the music list
searchInput.addEventListener("keyup", () => {
  // Get the search query and convert it to lowercase
  const searchQuery = searchInput.value.toLowerCase();

  // Loop through the music list items and hide/show them based on the search query
  Array.from(musicList.children).forEach((musicItem) => {
    const musicName = musicItem.querySelector("figure").textContent.toLowerCase();
    if (musicName.includes(searchQuery)) {
      musicItem.style.display = "";
    } else {
      musicItem.style.display = "none";
    }
  });
});


// dark mode logic //
const toggleSwitch = document.querySelector('#toggle-mode');
toggleSwitch.addEventListener('change', function() {
  if(this.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }    
});




// //  Punjabi Songs
// const punjabiSongs = musicList.querySelectorAll('li[data-type="punjabiSongs"]');

// for (const item of punjabiSongs) {
//     item.style.display = 'block';
//   }
  
//   // Get the li element
// const punjabiSongsLink = document.querySelector('#punjabiSongs');

// // Get all the music items with the data-type attribute set to "punjabiSongs"
// // const punjabiSongs = musicList.querySelectorAll('li[data-type="punjabiSongs"]');

// // Add a click event listener to the li element
// punjabiSongsLink.addEventListener('click', function() {
//   // Loop through all the music items with the data-type attribute set to "punjabiSongs"
//   for (const item of punjabiSongs) {
//     // Show the item
//     item.style.display = 'block';
//   }
// });
