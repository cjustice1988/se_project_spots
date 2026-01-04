// declaring variables
const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with the morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

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
const addCardForm = newPostModal.querySelector(".modal__form");
const newLinkInput = newPostModal.querySelector("#card-image-input");
const newCaptionInput = newPostModal.querySelector("#card-caption-input");

const previewModal = document.querySelector("#preview_modal");
const previewModalCloseBtn = previewModal.querySelector(
  ".modal__close-btn_preview"
);
const previewImageElement = previewModal.querySelector(".modal__image");
const previewCaptionElement = previewModal.querySelector(".modal__caption");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

// End of variables

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  const cardDelBtn = cardElement.querySelector(".card__delete-btn");

  cardImageElement.alt = data.name;
  cardTitleElement.textContent = data.name;
  cardImageElement.src = data.link;

  cardImageElement.addEventListener("click", () => {
    previewImageElement.src = data.link;
    previewCaptionElement.textContent = data.name;
    previewImageElement.alt = data.name;
    openModal(previewModal);
  });

  cardDelBtn.addEventListener("click", () => {
    cardDelBtn.closest(".card").remove();
  });

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-btn_active");
  });

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

// Functionality of edit profile button
// open modal
editProfileBtn.addEventListener("click", function () {
  openModal(editProfileModal);
  editProfileInput.value = editProfileText.textContent;
  editDescriptionInput.value = editDescriptionText.textContent;
});

// Functionallity of save button
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  editProfileText.textContent = editProfileInput.value;
  editDescriptionText.textContent = editDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

// close modal
editProfileModalCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

// Functionality of new post button
// open modal
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

// close modal
newPostModalCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const cardElement = getCardElement({
    name: newCaptionInput.value,
    link: newLinkInput.value,
  });
  cardsList.prepend(cardElement);

  evt.target.reset()
  closeModal(newPostModal);
}

addCardForm.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
