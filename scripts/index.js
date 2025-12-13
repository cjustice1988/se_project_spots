// declaring variables

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileModalCloseBtn =
  editProfileModal.querySelector(".modal__close-btn");
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostModalCloseBtn = newPostModal.querySelector(".modal__close-btn");

const editProfileText = document.querySelector(".profile__name");
const editProfileInput = document.querySelector("#profile-name-input");
const editDescriptionText = document.querySelector(".profile__description");
const editDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const editProfileForm = editProfileModal.querySelector(".modal__form");

// End of variables
// Functionality of edit profile button
// open
editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal__is-opened");
  editProfileInput.value = editProfileText.textContent;
  editDescriptionInput.value = editDescriptionText.textContent;
});

// Functionallity of save button

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  editProfileText.textContent = editProfileInput.value;
  editDescriptionText.textContent = editDescriptionInput.value;
  editProfileModal.classList.remove("modal__is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

// close
editProfileModalCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
});

// Functionality of new post button
// open
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal__is-opened");
});

// close
newPostModalCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal__is-opened");
});
