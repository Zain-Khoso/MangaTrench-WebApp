// chapters.js - Holds all the logic behind chapter page.

// DOM Selectors.
const mainTag = document.getElementById("page-list");
const mangaHeading = document.getElementById("manga-heading");
const preloader = document.getElementById("preloader");

// mangaName and chapterNum in the query parameters.
const params = new URLSearchParams(window.location.search);
const mangaName = params.get("manga");
const chapterNum = params.get("chapter");

// Functions.

// This function loads the fetched data in the DOM.
async function dataLoader() {
    const data = await getPages();

    mangaHeading.textContent = `${getProperTitle(mangaName)} | ${getProperText(
        chapterNum
    )}`;

    const pagesHolder = document.createElement("div");
    pagesHolder.id = "pages-holder";
    mainTag.appendChild(pagesHolder);

    for (pageURL of data) {
        const page = document.createElement("img");
        page.src = pageURL;
        page.className = "manga-page";
        pagesHolder.appendChild(page);
    }
    preloader.style.display = "none";
}

// This function fetches the data from the database through API.
async function getPages() {
    res = await fetch(`http://127.0.0.1:8000/${mangaName}/${chapterNum}/`);

    return await res.json();
}

// This function returns the chapter number given to it in proper format.
function getProperText(chpNum) {
    const nums = chpNum.split("-");
    if (nums.length == 1) return `Chapter: ${chpNum}`;

    return `Chapter: ${nums[0]}.${nums[1]}`;
}

// This function gives the manga name given to it proper casing.
function getProperTitle(mangaName) {
    const words = mangaName.split("-");
    let title = "";

    for (let word of words) {
        title = title.concat(" ", word.toUpperCase());
    }

    return title.trim();
}

document.title = `Chapter: ${chapterNum} | ${getProperTitle(mangaName)}`;

dataLoader();
