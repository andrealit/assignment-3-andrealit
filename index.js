/*
 * Add your JavaScript to this file to complete the assignment.  Don't forget
 * to add your name and @oregonstate email address below.
 *
 * Name: Andrea Tongsak
 * Email: tongsaka@oregonstate.edu
 */

/* Variables */

// General
var buttonSelect = document.getElementById('create-twit-button');
var modalBackground = document.getElementById('modal-backdrop');
var modalTwitSelect = document.getElementById('create-twit-modal');

// Store the removed nodes
var removedNodes = [];

// Modal Variables
var modalCancel = document.getElementsByClassName('modal-cancel-button');
var modalClose = document.getElementsByClassName('modal-close-button');
var modalAccept = document.getElementsByClassName('modal-accept-button');

var modalText = document.getElementById('twit-text-input');
var modalAuthor = document.getElementById('twit-attribution-input');

// Search Variables
var twitSearch = document.getElementsByClassName('twit');
var inputSearch = document.getElementById('navbar-search-input');
var itemSearch = document.querySelector('input[type="text"]');

var twitTextSearch = document.getElementsByClassName('twit-text');
var twitAuthorSearch = document.getElementsByClassName('twit-author');

/* EVENTS */

buttonSelect.addEventListener('click', showModal);

modalCancel[0].addEventListener('click', hideModal);
modalClose[0].addEventListener('click', hideModal);
modalAccept[0].addEventListener('click', createTwit);

itemSearch.addEventListener('input', searchTwit);

/*  10pts: Display the modal and its backdrop */
function showModal() {
  modalBackground.classList.remove("hidden");
  modalTwitSelect.classList.remove("hidden");
}

/* 10pts: Hide the modal and the backdrop */
function hideModal() {
  modalBackground.classList.add("hidden");
  modalTwitSelect.classList.add("hidden");
  /* 5pts: User input values are cleared */
  modalText.value = "";
  modalAuthor.value = "";
}

/* 30pts: Create the correctly formatted twit to the end of the page */
function createTwit() {
  /* 5pts: alert is given */
  if (modalText.value == "" || modalAuthor.value == "") {
    alert("You must specify both the twit and the author of the twit.")
  } else {

    // clone a twit outline
    var example = document.getElementsByClassName('twit')[0]
    var newTwit = example.cloneNode()

    var twitContainer = document.getElementsByClassName('twit-container')[0]

    /* 5pts: new twit creation is not vulnerable to attacks */
    console.log("== Cloned Author Attempt: " + newTwit.modalAuthor.value)
    console.log("== Cloned Text Attempt: " + newTwit.modalText.value)

    twitContainer.appendChild(newTwit);
  }
}

/* Twit Search */
function searchTwit () {
    repeatSearch()

    /* 5pts: live search (MUST LOOP BACKWARDS or loop forward and store elements) */
    for (var i = 0; i < twitTextSearch.length; i++) {
        if(!twitTextSearch[i].innerText.includes(inputSearch.value) && !twitAuthorSearch[i].innerText.includes(inputSearch.value)) {
            removedNodes.push(twitSearch[i])
            // remove the entire twit
            twitSearch[i].parentNode.removeChild(twitSearch[i])

            i--
        }
    }
}


/* 10pts: Re-searching enabled */
function repeatSearch () {
    var twitContainer = document.getElementsByClassName('twit-container')[0]

    for (var i = 0; i < removedNodes.length; i++) {
        twitContainer.append(removedNodes[i])
    }
    removedNodes = []
}