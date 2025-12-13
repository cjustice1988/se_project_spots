// declaring variables

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileModalCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostModalCloseBtn = newPostModal.querySelector(".modal__close-btn");

// End of variables
// Functionality of edit profile button
// open
editProfileBtn.addEventListener("click", function() {
  editProfileModal.classList.add("modal__is-opened")
});

// close
editProfileModalCloseBtn.addEventListener("click", function() {
  editProfileModal.classList.remove("modal__is-opened")
});

// Functionality of new post button
// open
newPostBtn.addEventListener("click", function() {
  newPostModal.classList.add("modal__is-opened")
});

// close
newPostModalCloseBtn.addEventListener("click", function() {
  newPostModal.classList.remove("modal__is-opened")
});
