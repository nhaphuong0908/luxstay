const main = {
  isCurrent: true,
  isQnt: true,
  isSlideLocation: 1,
  isSlideSuggest: 1,
  isSlideDicover: 1,
  slideAutoAnimate() {
    let counter = 2;
    setInterval(() => {
      document.getElementById("radio" + counter).checked = true;
      counter++;
      if (counter > 2) {
        counter = 1;
      }
    }, 5000);
  },

  handerEvent() {
    const _this = this;
    const currentElement = document.querySelector(".currency-box");
    const qntElement = document.querySelector(".quality__form");
    const qntBtn = document.querySelector(".header__search-input-qnt");
    

    //modal change language
    document.querySelector(".navbar__country-wapper").onclick = function (e) {
      e.stopPropagation();
      currentElement.onclick = (e) => {
        e.stopPropagation();
      };
      _this.isCurrent = !_this.isCurrent;
      currentElement.classList.toggle("hiden-on-click", _this.isCurrent);
      if (!_this.isQnt) {
        _this.isQnt = true;
        qntElement.classList.add("hiden-on-click");
        qntBtn.classList.remove("active");
      }
    };

    
    // modal show qty custom
    qntBtn.onclick = function (e) {
      e.stopPropagation();
      qntElement.onclick = (e) => {
        e.stopPropagation();
      };
      _this.isQnt = !_this.isQnt;
      qntElement.classList.toggle("hiden-on-click", _this.isQnt);
      qntBtn.classList.toggle("active", !_this.isQnt);

      if (!_this.isCurrent) {
        _this.isCurrent = true;
        currentElement.classList.add("hiden-on-click");
      }
    };
    // close qty custom
    document.onclick = () => {
      if (!_this.isCurrent) {
        _this.isCurrent = true;
        currentElement.classList.add("hiden-on-click");
      }
      if (!_this.isQnt) {
        _this.isQnt = true;
        qntElement.classList.add("hiden-on-click");
        qntBtn.classList.remove("active");
      }
    };


    // slider
    (() => {
      const nextBtn = document.querySelector(".location-slides .btn-next");
      const prevBtn = document.querySelector(".location-slides .btn-prev");
      const disableBtn = document.querySelector(
        ".location-slides .btn-disable"
      );

      nextBtn.onclick = () => {
        _this.isSlideLocation++;
        document.getElementById(
          "radio-location" + _this.isSlideLocation
        ).checked = true;
        if (_this.isSlideLocation > 1) {
          disableBtn.style.display = "none";
        }
        if (_this.isSlideLocation > 3) {
          disableBtn.style.display = "block";
          disableBtn.style.left = "auto";
          if (window.innerWidth < 1023) {
            disableBtn.style.right = -8 + "px";
          } else {
            disableBtn.style.right = -21 + "px";
          }
        }
      };
      prevBtn.onclick = () => {
        _this.isSlideLocation--;
        document.getElementById(
          "radio-location" + _this.isSlideLocation
        ).checked = true;
        if (_this.isSlideLocation < 4) {
          disableBtn.style.display = "none";
        }
        if (_this.isSlideLocation < 2) {
          disableBtn.style.display = "block";
          disableBtn.style.right = "auto";
          if (window.innerWidth < 1023) {
            disableBtn.style.left = -8 + "px";
          } else {
            disableBtn.style.left = -21 + "px";
          }
        }
      };
    })();
    
    (() => {
      let nextBtn = document.querySelector(".suggest-slides .btn-next");
      let prevBtn = document.querySelector(".suggest-slides .btn-prev");
      const disableBtn = document.querySelector(".suggest-slides .btn-disable");
      nextBtn.onclick = () => {
        _this.isSlideSuggest++;
        document.getElementById(
          "suggest-radio" + _this.isSlideSuggest
        ).checked = true;
        if (_this.isSlideSuggest > 1) {
          disableBtn.style.display = "none";
        }
        if (_this.isSlideSuggest > 3) {
          disableBtn.style.display = "block";
          disableBtn.style.left = "auto";
          if (window.innerWidth < 1023) {
            disableBtn.style.right = -8 + "px";
          } else {
            disableBtn.style.right = -21 + "px";
          }
        }
      };
      prevBtn.onclick = () => {
        _this.isSlideSuggest--;
        document.getElementById(
          "suggest-radio" + _this.isSlideSuggest
        ).checked = true;
        if (_this.isSlideSuggest < 4) {
          disableBtn.style.display = "none";
        }
        if (_this.isSlideSuggest < 2) {
          disableBtn.style.display = "block";
          disableBtn.style.right = "auto";
          if (window.innerWidth < 1023) {
            disableBtn.style.left = -8 + "px";
          } else {
            disableBtn.style.left = -21 + "px";
          }
        }
      };
    })();

    (() => {
      let nextBtn = document.querySelector(".dicover-slides .btn-next");
      let prevBtn = document.querySelector(".dicover-slides .btn-prev");
      const disableBtn = document.querySelector(".dicover-slides .btn-disable");
      nextBtn.onclick = () => {
        _this.isSlideDicover++;
        document.getElementById(
          "dicover-radio" + _this.isSlideDicover
        ).checked = true;
        if (_this.isSlideDicover > 1) {
          disableBtn.style.display = "none";
        }
        if (_this.isSlideDicover > 3) {
          disableBtn.style.display = "block";
          disableBtn.style.left = "auto";
          if (window.innerWidth < 1023) {
            disableBtn.style.right = -8 + "px";
          } else {
            disableBtn.style.right = -21 + "px";
          }
        }
      };
      prevBtn.onclick = () => {
        _this.isSlideDicover--;
        document.getElementById(
          "dicover-radio" + _this.isSlideDicover
        ).checked = true;
        if (_this.isSlideDicover < 4) {
          disableBtn.style.display = "none";
        }
        if (_this.isSlideDicover < 2) {
          disableBtn.style.display = "block";
          disableBtn.style.right = "auto";
          if (window.innerWidth < 1023) {
            disableBtn.style.left = -8 + "px";
          } else {
            disableBtn.style.left = -21 + "px";
          }
        }
      };
    })();
  },
  start() {
    this.slideAutoAnimate();
    this.handerEvent();
  },
};

main.start();