		var buttonFeedback = document.querySelector(".contacts-button");
		var linkCartFull = document.querySelector(".header-cart-full");
		var popupLogin = document.querySelector(".modal-login");
		var popupFeedback = document.querySelector(".modal-feedback");
		var popupSearch = document.querySelector(".modal-search");
		var popupCartFull = document.querySelector(".modal-basket");
		var searchInput = popupSearch.querySelector("[id=search]");
		var close = popupFeedback.querySelector(".modal-close");
		var userName = popupFeedback.querySelector("[id=feedback-name]");
		var userEmail = popupFeedback.querySelector("[id=feedback-email]");
		var userText = popupFeedback.querySelector("[id=feedback-text]");

		if (buttonFeedback) {
		  buttonFeedback.addEventListener("click", function(evt) {
		    evt.preventDefault();
		    popupFeedback.classList.add("modal-show");
		  });
		}
		if (linkCartFull) {
		  linkCartFull.addEventListener("click", function(evt) {
		    evt.preventDefault();
		    popupCartFull.classList.add("modal-show");
		  });
		}
		close.addEventListener("click", function(evt) {
		  evt.preventDefault();
		  popupFeedback.classList.remove("modal-show");
		  popupFeedback.classList.remove("modal-error");
		});
		window.addEventListener("keydown", function(evt) {
		  if (evt.keyCode === 27) {
		    evt.preventDefault();
		    if (popupFeedback.classList.contains("modal-show")) {
		      popupFeedback.classList.remove("modal-show");
		      popupFeedback.classList.remove("modal-error");
		    }
		    if (popupCartFull.classList.contains("modal-show")) {
		      popupCartFull.classList.remove("modal-show");
		    }
		  }
		});
		popupFeedback.addEventListener("submit", function(evt) {
		  if (!userName.value || !userEmail.value || !userText.value) {
		    evt.preventDefault();
		    popupFeedback.classList.remove("modal-error");
		    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
		    popupFeedback.classList.add("modal-error");
		    if (!userName.value) {
		      userName.focus();
		    } else if (!userEmail.value) {
		      userEmail.focus();
		    } else if (!userText.value) {
		      userText.focus();
		    }
		  }
		});
