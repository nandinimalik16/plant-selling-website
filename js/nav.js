const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class= "nav">
        <img src="img/logo.jpeg" class="brand-logo" alt="">
        <div class="nav-items">
            <div class="search"> 
                <input type="text" class="search-box" placeholder="Search your product"> 
                <button class="search-button"> Search</button >
            </div>
            <a href="#">
                <img src="img/user.jpeg" id="user-img"alt="">
                <div class="login-logout-popup hide">
                    <p class="account-info">Log in as, name</p>
                    <button class="btn" id="user-btn">Log out</button>
                </div>
            </a>
            <a href="#">
            <img src="img/cart.jpeg" alt="">
            </a>
        </div> 
    </div>
    <br> 
    <ul class="Links-container">
     <li class="Link-item">
     <a href="#" class="Link">home</a>
     </li> 
     <li class="Link-item">
     <a href="#" class="Link">plants</a>
     </li><li class="Link-item">
     <a href="#" class="Link">pots</a>
     </li>
     <li class="Link-item">
     <a href="#" class="Link">tools</a>
     </li>
     <li class="Link-item">
     <a href="#" class="Link">seeds</a>
     </li>
     </ul>`;
};
createNav();

//nav popup

const userImageButton = document.querySelector("#user-img");
const userPop = document.querySelector(".login-logout-popup");
const popuptext = document.querySelector(".account-info");
const actionBtn = document.querySelector("#user-btn");

userImageButton.addEventListener("click", () => {
  userPop.classList.toggle("hide");
});

window.onload = () => {
  let user = JSON.parse(sessionStorage.user || null);
  if (user != null) {
    //means user is logged in
    popuptext.innerHTML = `log in as,${user.name}`;
    actionBtn.innerHTML = "log out";
    actionBtn.addEventListener("click", () => {
      sessionStorage.clear();
      location.reload();
    });
  } else {
    //user is logged out
    popuptext.innerHTML = "log in to place order";
    actionBtn.innerHTML = "log in";
    actionBtn.addEventListener("click", () => {
      location.href = "/login";
    });
  }
};
