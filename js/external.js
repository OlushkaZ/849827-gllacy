		var linkLogin = document.querySelector(".login-link");
		var buttonFeedback = document.querySelector(".contacts-button");
		var buttonSearch = document.querySelector(".header-addition-search");
		var linkCartFull = document.querySelector(".header-cart-full");
		var popupLogin = document.querySelector(".modal-login");
		var popupFeedback = document.querySelector(".modal-feedback");
		var popupSearch = document.querySelector(".modal-search");
		var popupCartFull = document.querySelector(".modal-basket");
		var searchInput = popupSearch.querySelector("[id=search]");
		var close = popupFeedback.querySelector(".modal-close");
		var login = popupLogin.querySelector("[id=user-login]");
		var password = popupLogin.querySelector("[id=user-password]");
		var userName = popupFeedback.querySelector("[id=feedback-name]");
		var userEmail = popupFeedback.querySelector("[id=feedback-email]");
		var userText = popupFeedback.querySelector("[id=feedback-text]");

		linkLogin.addEventListener("click", function(evt) {
		  evt.preventDefault();
		  popupLogin.classList.add("modal-show");
		  login.focus();
		});
		if (buttonFeedback) {
		  buttonFeedback.addEventListener("click", function(evt) {
		    evt.preventDefault();
		    popupFeedback.classList.add("modal-show");
		  });
		}
		buttonSearch.addEventListener("click", function(evt) {
		  evt.preventDefault();
		  popupSearch.classList.add("modal-show");
		  searchInput.focus();
		});
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
		    if (popupLogin.classList.contains("modal-show")) {
		      popupLogin.classList.remove("modal-show");
		      popupLogin.classList.remove("modal-error");
		    }
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
		popupLogin.addEventListener("submit", function(evt) {
		  if (!login.value || !password.value) {
		    evt.preventDefault();
		    popupLogin.classList.remove("modal-error");
		    popupLogin.offsetWidth = popupLogin.offsetWidth;
		    popupLogin.classList.add("modal-error");
		    if (!login.value) {
		      login.focus();
		    } else if (!password.value) {
		      password.focus();
		    }
		  }
		});
