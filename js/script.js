document.addEventListener('DOMContentLoaded', function () {
    // Медиа запросы
    let match = [window.matchMedia("(max-width: 1170px)"), window.matchMedia("(max-width: 992px)")];

    // Слайдеры

    var promoSlider = new Swiper('.promo__swiper-container', {
        loop: true,
        autoplay: {
            delay: 7000,
        },
        pagination: {
            el: '.promo__swiper-pagination',
            clickable: true,
        },
    })

    var gallarySlider = new Swiper('.gallary-product__slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.gallary-product__pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.gallary-product__next',
            prevEl: '.gallary-product__prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }

    })

    var reviewsSlider = new Swiper('.reviews__slider-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 5000,
        },

        breakpoints: {

            500: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1170: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    })

    var partnersSlider = new Swiper('.partners__slider-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
        },

        navigation: {
            nextEl: '.partners__button-next',
            prevEl: '.partners__button-prev',
        },

        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            1170: {
                slidesPerView: 5,
                spaceBetween: 30
            },
        }
    })

    var productSldier = new Swiper('.product-card__sldier', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.product-card__pagination',
            clickable: true,
        },
    })

    var similarlySldier = new Swiper('.similarly-product__sldier', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.similarly-product__next',
            prevEl: '.similarly-product__prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: "auto",
                spaceBetween: 30,
            },

        }
    })

    var watchSldier = new Swiper('.watch-product__sldier', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.watch-product__next',
            prevEl: '.watch-product__prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: "auto",
                spaceBetween: 30,
            },

        }
    })

    if (document.querySelectorAll(".blog__slider").length > 0) {
        var blogSldier;

        function activeBlogSlider() {
            if (match[1].matches) {
                blogSldier = new Swiper('.blog__slider', {
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 30,
                    breakpoints: {
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    },
                    pagination: {
                        el: '.blog__pagination',
                        clickable: true,
                    },
                })
            } else {
                if (document.querySelector(".blog__slider").classList.contains("swiper-container-initialized")) {
                    blogSldier.destroy(true, true);
                }
            }
        }

        match[1].addListener(activeBlogSlider);
        activeBlogSlider();
    }

    var sliderBigProduct = new Swiper('.slider-big-product', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        loopAdditionalSlides: 10,
        pagination: {
            el: '.slider-big-product__pagination',
            clickable: true,
        },
    })

    sliderBigProduct.on('slideChange', function () {
        let hiddenEl = Array.prototype.slice.call(document.querySelectorAll(".js-hidden-video"));
        if (sliderBigProduct.slides[sliderBigProduct.activeIndex].classList.contains("--video")) {
            hiddenEl.forEach(el => {
                el.style.opacity = "0";
                el.style.visibility = "hidden";
            })
        } else {
            hiddenEl.forEach(el => {
                if (el.style.opacity == "0" && el.style.visibility == "hidden") {
                    el.style.opacity = "";
                    el.style.visibility = "";
                }
            })
        }
    });

    var sliderSmallProduct = new Swiper('.slider-small-product', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 15,
        loopAdditionalSlides: 10,
        slideToClickedSlide: true,
        breakpoints: {
            500: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
        },
    })

    sliderBigProduct.controller.control = sliderSmallProduct;
    sliderSmallProduct.controller.control = sliderBigProduct;

    var usageGalarySldier = new Swiper('.usage__galary-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.usage__galary-next',
            prevEl: '.usage__galary-prev',
        },

        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1170: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    })

    var sliderproductAccessories = new Swiper('.product-accessories__slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        loopAdditionalSlides: 10,
        pagination: {
            el: '.product-accessories__pagination',
            clickable: true,
        },
    })


    // Ограничение текта отзывов
    let blockReviewsIndexPage = document.querySelector(".reviews");

    if (blockReviewsIndexPage != null) {
        let arrReviews = Array.prototype.slice.call(blockReviewsIndexPage.querySelectorAll(".card-review__text"));
        arrReviews.forEach((element, i) => {
            if (element.textContent.length > 280) {
                element.textContent = element.textContent.substring(0, 270) + "...";
            }
        });
    }

    // Ограничение текста новостей
    let arrNews = Array.prototype.slice.call(document.querySelectorAll(".card-news__text"));

    arrNews.forEach((element, i) => {
        if (element.textContent.length > 280) {
            element.textContent = element.textContent.substring(0, 270) + "...";
        }
    });

    // Бургер
    let ham = document.querySelector(".js-ham");
    ham.addEventListener("click", function () {
        this.classList.toggle("active");
    })

    // Перенос элементов в мобильное меню
    let mobMenu = document.querySelector(".dl-menu");
    let arrMobMenuItem = Array.prototype.slice.call(document.querySelectorAll(".js-mob-menu"));
    let arrMobMenuElement = Array.prototype.slice.call(document.querySelectorAll(".js-mob-menu-el"));

    arrMobMenuItem.forEach(element => {
        let elClone = element.cloneNode(true);

        let link = Array.prototype.slice.call(elClone.querySelectorAll("a"));

        link.forEach(element => {
            if (element.classList.contains("animate-link")) {
                element.classList.remove("animate-link");
            }
        });

        if (elClone.querySelectorAll("ul") != null) {

            elClone.querySelectorAll("ul").forEach(element => {
                element.classList.add("dl-submenu");
            });
        }

        mobMenu.append(elClone);

    });

    arrMobMenuElement.forEach(element => {
        let elClone = element.cloneNode(true);

        let link = Array.prototype.slice.call(elClone.querySelectorAll("a"));

        link.forEach(element => {
            if (element.classList.contains("animate-link")) {
                element.classList.remove("animate-link");
            }
        });

        let wrap = document.createElement("li");
        wrap.classList.add("one-level");
        wrap.append(elClone);
        mobMenu.prepend(wrap);
    })

    let mobBasket = document.querySelector(".mob-menu__basket-wrap");
    mobBasket.append(document.querySelector(".fav").cloneNode(true));
    mobBasket.append(document.querySelector(".basket").cloneNode(true));

    let mobLogo = document.querySelector(".mob-menu__logo");
    mobLogo.append(document.querySelector(".logo-header").childNodes[0].cloneNode(true));

    let search = document.querySelector(".mob-menu__search");

    document.querySelector(".catalog-menu__wrapper").insertBefore(document.querySelector(".header-bottom__search").cloneNode(true), document.querySelector(".catalog-menu__group"))

    // Открытие попапов
    let popupAllElem = Array.prototype.slice.call(document.querySelectorAll(".modal"));
    let openButton = Array.prototype.slice.call(document.querySelectorAll(".js-modal-show"));
    let closeButton = Array.prototype.slice.call(document.querySelectorAll(".js-modal-close"));
    let popupOverlay = document.querySelector(".popup-overlay");
    let body = document.querySelector("body");

    function openPopup(e) {
        e.preventDefault();
        let modal = document.querySelector(`#${e.target.dataset.popup}`);

        modal.classList.add("active");
        modal.style.maxHeight = `${window.innerHeight}px`;

        body.classList.add("lock-modal");

        popupOverlay.classList.add("active");

        setTimeout(() => {
            modal.style.opacity = "1";
            popupOverlay.style.opacity = "1";
        }, 100)

        if (e.target.dataset.popup == "domain") {
            let domainList = modal.querySelector(".popup-domain__list");
            let domainWrap = modal.querySelector(".popup-domain__wrap");
            domainList.style.height = `${window.innerHeight - domainWrap.offsetHeight - 40}px`;
        }
    }

    function closePopup() {
        popupAllElem.forEach(element => {
            if (element.classList.contains("active")) {
                let modal = element;

                modal.style.maxHeight = ``;
                popupOverlay.classList.remove("active");
                setTimeout(() => {
                    modal.classList.remove("active");

                }, 300)

                modal.style.opacity = "0";
                popupOverlay.style.opacity = "0";

                body.classList.remove("lock-modal");
            }
        })
    }

    openButton.forEach(element => {
        element.addEventListener("click", (e) => {
            closePopup(e);

            openPopup(e);
        })
    })

    closeButton.forEach(element => {
        element.addEventListener("click", (e) => {
            closePopup();
        });
    });

    popupOverlay.addEventListener("click", () => {
        closePopup();
    });


    // Показать скрыть пароль
    let elViewPass = document.querySelector(".icon-view-password");

    elViewPass.addEventListener("click", (e) => {
        let inputPassword = e.target.parentNode.querySelector("input");

        if (inputPassword.getAttribute("type") == "text") {
            inputPassword.setAttribute("type", "password");
        } else {
            inputPassword.setAttribute("type", "text");
        }
    })

    // Сортирока поддоменов

    let itemDomain = Array.prototype.slice.call(document.querySelectorAll(".popup-domain__item"));

    itemDomain.sort(function (a, b) {
        // сортируем от а до я
        if (a.querySelector("a").textContent[0] < b.querySelector("a").textContent[0]) return -1;
        if (a.querySelector("a").textContent[0] > b.querySelector("a").textContent[0]) return 1;
        return 0;
    })

    itemDomain.forEach((el, index, array) => {
        // берем перую букву
        let wordFirst = el.querySelector("a").textContent[0];

        // берем следующий элемент после текущего
        let elemInsert = array[index + 1] ? array[index + 1].querySelector("a").textContent[0] : null;

        // создаем обертку для буквы
        let wordAppend = document.createElement("span");

        wordAppend.classList.add("first-word");

        // первому элементу сразу вставляем букву
        if (index == 0) {
            wordAppend.textContent = wordFirst;
            el.prepend(wordAppend);
        }

        // проверяем отличаются ли первые буквы текущего и следующего элемента
        if (wordFirst != elemInsert) {
            wordAppend.textContent = elemInsert;

            array[index + 1] ? array[index + 1].prepend(wordAppend) : null;
        }

        // вставляем букву слдеующему элементу за текущим
        el.parentNode.append(el);

    });

    function moveFirstWordMobil() {
        if (match[0].matches) {
            itemDomain.forEach(element => {
                element.querySelector("span") ? element.parentNode.insertBefore(element.querySelector("span"), element) : null;
            })
        } else {
            if (itemDomain[0].parentNode.querySelector(".first-word").parentNode == itemDomain[0].parentNode) {

                let arrSpan = Array.prototype.slice.call(itemDomain[0].parentNode.querySelectorAll(".first-word"));

                arrSpan.forEach(element => {
                    element.nextSibling.append(element);
                })
            }
        }
    }

    match[0].addListener(moveFirstWordMobil);
    moveFirstWordMobil();


    //Анимация иконок 
    let arrAnimIcon = Array.prototype.slice.call(document.querySelectorAll(".element-anim"));

    arrAnimIcon.forEach(element => {
        let activeAnim = true;
        element.addEventListener("mouseenter", () => {
            if (activeAnim == true) {
                Array.prototype.slice.call(element.querySelectorAll(".anim-item")).forEach(el => {
                    el.beginElement();
                })
                activeAnim = false;
                setTimeout(() => {
                    activeAnim = true;
                }, element.getAttribute("data-anim-time"))
            }
        })
    });

    // Количество товаров
    //===========================================МОЖНО УДАЛИТЬ==================================================================
    let buttonAdd = Array.prototype.slice.call(document.querySelectorAll(".quantity-order__add"));
    let buttonSub = Array.prototype.slice.call(document.querySelectorAll(".quantity-order__sub"));

    if (buttonAdd != null) {
        buttonAdd.forEach(el => {
            let productPriceContainer = el.parentNode.parentNode.querySelector(".price-product__current-price.js-price-quantity span");
            let productPrice = productPriceContainer ? parseInt(productPriceContainer.textContent.replace(/\s/g, '')) : null;
            el.addEventListener("click", () => {
                let inputQuantity = el.parentNode.querySelector(".quantity-order__input");
                inputQuantity.value = parseInt(inputQuantity.value) + 1;

                if (productPrice != null) {
                    productPriceContainer.textContent = productPrice + parseInt(productPriceContainer.textContent.replace(/\s/g, ''));
                }
            });
        })
    }

    if (buttonSub != null) {
        buttonSub.forEach(el => {
            let productPriceContainer = el.parentNode.parentNode.querySelector(".price-product__current-price.js-price-quantity span");
            let productPrice = productPriceContainer ? parseInt(productPriceContainer.textContent.replace(/\s/g, '')) : null;
            let inputQuantity = el.parentNode.querySelector(".quantity-order__input");
            el.addEventListener("click", () => {
                if (parseInt(inputQuantity.value) - 1 > 0) {
                    inputQuantity.value = parseInt(inputQuantity.value) - 1;

                    if (productPrice != null) {
                        productPriceContainer.textContent = parseInt(productPriceContainer.textContent.replace(/\s/g, '')) - productPrice;
                    }
                }
            });
        });
    }

    //=============================================================================================================

    // запуск видео

    let videoPrev = document.querySelector(".usage__video-prev");

    let videoContainer = document.querySelector(".usage__video-container");

    function YouTubeGetID(url) {
        var ID = '';
        url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
        return ID;
    }

    if (videoPrev != null) {

        let videoId = YouTubeGetID(videoContainer.dataset.videoId);

        let src = "https://www.youtube.com/embed/" + videoId;

        videoContainer.innerHTML = `<iframe class="usage__video" src="${src}" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0"></iframe>`


        videoPrev.addEventListener("click", () => {
            let videoFrame = document.querySelector(".usage__video");

            videoPrev.classList.add("active");
            videoFrame.classList.add("active");

            videoFrame.setAttribute("src", src + '?rel=0&showinfo=0' + '&autoplay=1');
        });
    }

    //Плавный якорь

    const anchors = document.querySelectorAll('a[href*="#"].--js-anchor-link')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }


    // Position sticky на js
    let stickyEl;
    if (document.querySelector(".product-reviews__group-all-rev") != null) {
        stickyEl = new Sticksy('.product-reviews__group-all-rev', { topSpacing: 140, listen: true }, true);
    }

    let stickyOrder;
    if (document.querySelector(".order-result") != null) {
        stickyOrder = new Sticksy('.order-result', { topSpacing: 0, listen: true }, true);
    }

    // Раскрытие отзывов 

    let reviewsContainer = document.querySelector(".product-reviews__list");
    let buttonViewAllRev = document.querySelector(".product-reviews__button-all");
    let arrReviewsItem = Array.prototype.slice.call(document.querySelectorAll(".product-reviews__item"));

    arrReviewsItem.forEach((el, index) => {
        if (index > 4) {
            el.style.height = "0px";
            el.classList.add("--hidden");
        }
        stickyEl.hardRefresh();
    });


    if (buttonViewAllRev != null) {
        buttonViewAllRev.addEventListener("click", (e) => {
            e.preventDefault();

            arrReviewsItem.forEach((el, index) => {
                if (index > 4) {
                    if (el.style.height == "0px") {
                        el.classList.remove("--hidden");
                        el.style.height = el.scrollHeight + "px";
                    } else {
                        el.classList.add("--hidden");
                        el.style.height = "0px";
                    }
                }
            });

            setTimeout(() => {
                stickyEl.hardRefresh();
            }, 300)

        })
    }

    //============================ПЕРЕКЛЮЧЕНИЕ ФОРМ ФИЗ И ЮР ЛИЦ, ЕСЛИ БУДЕТ ИСПОЛЗОВАТЬСЯ ОТ БИТРИКСА МОЙ СКРИПТ МОЖНО УДАЛЯТЬ============================
    // Переключение форм юр лица и физ лица
    let triggers = Array.prototype.slice.call(document.querySelectorAll(".js-trigger-legal"));

    triggers.forEach(el => {
        el.onchange = () => {
            let arrInputLegal = Array.prototype.slice.call(el.parentNode.parentNode.querySelectorAll(".js-from-wrap-input.--legal"));

            if (el.classList.contains("--legal") && el.querySelector("input").checked) {
                arrInputLegal.forEach(element => {
                    element.style.display = "block";
                });
            } else {
                arrInputLegal.forEach(element => {
                    element.style.display = "none";
                });
            }
        }
    });
    //============================================================================================================

    //==Рейтинг
    let arrRatingEl = Array.prototype.slice.call(document.querySelector(".popup-reviews-product__rating").querySelectorAll(".rating__item "));

    arrRatingEl.forEach((el, index, array) => {
        el.addEventListener("click", () => {
            array.forEach(element => element.classList.remove("added"));
            for (let i = index; i <= 4; i++) {
                array[i].classList.add("added");
            }
        });
    });

    //== Закрыть куки

    document.querySelector(".js-cookies-close").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".popup-cookies").style.display = "none";
    })

}, false);

//== Конфигуратор
let popupConfigurator = document.querySelector(".popup-configurator");
let buttonNext = Array.prototype.slice.call(document.querySelectorAll(".js-config-button-next"));
let buttonPrev = Array.prototype.slice.call(document.querySelectorAll(".js-config-button-prev"));
let elStep = Array.prototype.slice.call(document.querySelectorAll(".popup-configurator__wrap-step"));
let elProgressBar = Array.prototype.slice.call(document.querySelectorAll(".popup-configurator__bar-item"));
let elProgressRail = document.querySelector(".popup-configurator__rail-bar");
let stepConfig = document.querySelector(".popup-configurator__step");


function getParents(elem, className) {
    let parents;
    while (elem.parentNode && elem.parentNode.nodeName.toLowerCase() != 'body') {
        elem = elem.parentNode;
        if (elem.classList.contains(className)) {
            parents = elem;
        }
    }
    return parents;
}

let widthOneStep = 100 / 10;

if (popupConfigurator !== null) {
    // Проверка первого шага
    let stepOneItem = Array.prototype.slice.call(document.querySelectorAll(".step-one__checkbox input"));

    stepOneItem.forEach(element => {
        element.addEventListener("change", () => {
            for (let i = 0; i < stepOneItem.length; i++) {
                if (stepOneItem[i].checked) {
                    buttonNext[getParents(element, "popup-configurator__wrap-step").dataset.step - 1].classList.add("next-step-allowed");
                    break;
                } else {
                    buttonNext[getParents(element, "popup-configurator__wrap-step").dataset.step - 1].classList.remove("next-step-allowed");
                };
            };
        });
    });

    // Проверка второго шага
    let stepTwoItem = Array.prototype.slice.call(document.querySelectorAll(".step-two__value input"));

    stepTwoItem.forEach(element => {
        element.addEventListener("change", () => {
            let sumValue = 0;
            for (let i = 0; i < stepTwoItem.length; i++) {
                sumValue += parseInt(stepTwoItem[i].value);
            }
            if (sumValue > 0) {
                buttonNext[getParents(element, "popup-configurator__wrap-step").dataset.step - 1].classList.add("next-step-allowed");
            } else {
                buttonNext[getParents(element, "popup-configurator__wrap-step").dataset.step - 1].classList.remove("next-step-allowed");
            }
        });
    });

    // Проверка пятого шага
    let stepFiveItem = Array.prototype.slice.call(document.querySelectorAll(".step-five__checkbox input"));

    stepFiveItem.forEach(element => {
        element.addEventListener("change", () => {
            for (let i = 0; i < stepFiveItem.length; i++) {
                if (stepFiveItem[i].checked) {
                    buttonNext[getParents(element, "popup-configurator__wrap-step").dataset.step - 1].classList.add("next-step-allowed");
                    break;
                } else {
                    buttonNext[getParents(element, "popup-configurator__wrap-step").dataset.step - 1].classList.remove("next-step-allowed");
                };
            };
        });
    });


    elProgressRail.style.width = widthOneStep + "%";

    elStep.forEach(element => {
        if (element.classList.contains("current-step")) {
            stepConfig.textContent = "Шаг " + element.dataset.step;
        }
    });

    buttonNext.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();

            let currentStep = getParents(element, "popup-configurator__wrap-step");

            elStep[parseInt(currentStep.dataset.step) - 1].classList.remove("current-step");
            elStep[parseInt(currentStep.dataset.step)].classList.add("current-step");

            widthOneStep += 100 / 5;
            elProgressRail.style.width = widthOneStep + "%";

            stepConfig.textContent = "Шаг " + (parseInt(currentStep.dataset.step) + 1);

            elProgressBar[parseInt(currentStep.dataset.step)].classList.add("current");

            elProgressBar[parseInt(currentStep.dataset.step) - 1].querySelector("span").classList.remove("active");
            elProgressBar[parseInt(currentStep.dataset.step)].querySelector("span").classList.add("active");
        })
    });

    buttonPrev.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();

            let currentStep = getParents(element, "popup-configurator__wrap-step");

            elStep[parseInt(currentStep.dataset.step) - 1].classList.remove("current-step");
            elStep[parseInt(currentStep.dataset.step) - 2].classList.add("current-step");

            widthOneStep -= 100 / 5;

            elProgressRail.style.width = widthOneStep + "%";

            stepConfig.textContent = "Шаг " + (parseInt(currentStep.dataset.step) - 1);

            elProgressBar[parseInt(currentStep.dataset.step) - 1].classList.remove("current");

            elProgressBar[parseInt(currentStep.dataset.step) - 1].querySelector("span").classList.remove("active");
            elProgressBar[parseInt(currentStep.dataset.step) - 2].querySelector("span").classList.add("active");
        })
    });

}

//Табы профиля
let tabsButton = Array.prototype.slice.call(document.querySelectorAll(".profile-tabs__button"));
let tabsItem = Array.prototype.slice.call(document.querySelectorAll(".profile-tabs__item"));

if (tabsButton != null) {
    tabsButton.forEach(element => {
        element.addEventListener("click", () => {
            tabsButton.forEach(el => el.classList.remove("current"));
            tabsItem.forEach(el => el.classList.remove("current"));
            element.classList.add("current");
            document.querySelector(`#${element.dataset.item}`).classList.add("current");
        })
    });
}

$(document).ready(function () {

    // Меню каталога

    let matchCatalog = window.matchMedia("(max-width: 1170px)");

    $(".catalog-menu__mobil").on("click", function () {
        $(this).next().slideToggle();
        $(this).next().css({ "max-height": `${$(window).innerHeight() - 140}px` });
    })

    function activeClickCatalogMenuMobilResize() {
        if (matchCatalog.matches) {
            $(".catalog-menu__link").on("click", function () {
                if ($(this).next().hasClass("active")) {
                    $(this).next().slideUp();
                    $(this).next().removeClass("active");
                } else {
                    $(".catalog-menu__link").next().slideUp();
                    $(".catalog-menu__link").next().removeClass("active");
                    $(this).next().addClass("active");
                    $(this).next().slideDown();
                }
            })
        } else {
            $(".catalog-menu__link").off()
            $(".catalog-menu__link").next().attr('style', '');
        }
    }

    matchCatalog.addListener(activeClickCatalogMenuMobilResize);
    activeClickCatalogMenuMobilResize();

    // Галерея

    $(".lightgallery").lightGallery({
        selector: 'a'
    });

    // Мобильное меню

    $('#dl-menu').dlmenu({
        backLabel: "назад",
    });

    // Кастомный скроллбар
    $(".popup-domain__list").mCustomScrollbar({
        theme: "my-theme",
    });

    // $(".step-two__group").mCustomScrollbar({
    //     theme: "my-theme-2",
    // });

    // $(".step-three__list").mCustomScrollbar({
    //     theme: "my-theme-2",
    // });

    // $(".step-basket__list").mCustomScrollbar({
    //     theme: "my-theme-2",
    // });

    // $(".step-six__group").mCustomScrollbar({
    //     theme: "my-theme-2",
    // });

    // $(".popup-configurator").mCustomScrollbar({
    //     theme: "my-theme-2",
    // });

    $(".popup-configurator__wrap-scroll").mCustomScrollbar({
        theme: "my-theme-2",
    });

    // Nice select
    $('select').niceSelect();

    // Анимация скролла
    const animItems = $(".anim-items");

    if (animItems.length > 0) {
        $(window).on("scroll", animOnScroll);
        function animOnScroll() {
            $.each(animItems, function (index, val) {
                const animItem = animItems.eq(index);
                const animItemHeight = animItem.innerHeight();
                const animItemOffset = animItem.offset().top;
                const animStart = 10; // начало анимации при достижении скролом 1/10 части элемента

                let animItemPoint = $(window).height() - animItemHeight / animStart;

                if (animItemHeight > $(window).height()) {
                    animItemPoint = $(window).height() - $(window).height() / animStart;
                }

                if ($(window).scrollTop() > animItemOffset - animItemPoint && $(window).scrollTop() < animItemOffset + animItemHeight) {
                    animItem.addClass("animate");
                } else {
                    if (!animItem.hasClass("anim-no-scrollTop")) {
                        animItem.removeClass("animate");
                    }
                }
            });
        }
        setTimeout(animOnScroll, 0);
    }

    // Скролл к верху страницы

    $(window).scroll(function (e) {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });

    $('#scroller').click(function (e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 400);
    });


    // Маска номера телефона
    $("input[type=tel]").inputmask({
        mask: "+7 (Z99) 999-99-99",
        definitions: {
            Z: {
                validator: "[0-6,9]",
            },
        },
    });

});