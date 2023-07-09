document.addEventListener("DOMContentLoaded", function () {
    var doubleSubmitButton = document.getElementById("double_submit");
    if (doubleSubmitButton) {
        doubleSubmitButton.addEventListener("click", search);
    }

    var singleSubmitButton = document.getElementById("single_submit");
    if (singleSubmitButton) {
        singleSubmitButton.addEventListener("click", search1);
    }

    function search() {
        var keywordInput = document.getElementById("double-search-keyword");
        var locationInput = document.getElementById("double-search-location");

        var keyword = removeDiacritics(keywordInput.value.toLowerCase());
        var location = removeDiacritics(locationInput.value.toLowerCase());

        if (keyword && location) {
            if (keyword.includes("do an") && !location.includes("ha noi")) {
                window.location.href = "search1.html";
            } else if (!keyword.includes("do an") && location.includes("ha noi")) {
                window.location.href = "search2.html";
            } else if (keyword.includes("do an") && location.includes("ha noi")) {
                window.location.href = "search3.html";
            } else {
                window.location.href = "search-notfound.html";
            }
        } else if (keyword) {
            if (keyword.includes("do an")) {
                window.location.href = "search1.html";
            } else {
                window.location.href = "search-notfound.html";
            }
        } else if (location) {
            if (location.includes("ha noi")) {
                window.location.href = "search2.html";
            } else {
                window.location.href = "search-notfound.html";
            }
        }
    }

    function search1() {
        var keywordInput = document.getElementById("single-search");

        var keyword = removeDiacritics(keywordInput.value.toLowerCase());

        if (keyword) {
            if (keyword.includes("do an") && keyword.includes("ha noi")) {
                window.location.href = "search3.html";
            } else if (keyword.includes("do an") && !keyword.includes("ha noi")) {
                window.location.href = "search1.html";
            } else if (!keyword.includes("do an") && keyword.includes("ha noi")) {
                window.location.href = "search2.html";
            } else {
                window.location.href = "search-notfound.html";
            }
        }
    }

    function removeDiacritics(str) {
        const diacriticsMap = {
            'á': 'a',
            'à': 'a',
            'ả': 'a',
            'ã': 'a',
            'ạ': 'a',
            'ă': 'a',
            'ắ': 'a',
            'ằ': 'a',
            'ẳ': 'a',
            'ẵ': 'a',
            'ặ': 'a',
            'â': 'a',
            'ấ': 'a',
            'ầ': 'a',
            'ẩ': 'a',
            'ẫ': 'a',
            'ậ': 'a',
            'đ': 'd',
            'é': 'e',
            'è': 'e',
            'ẻ': 'e',
            'ẽ': 'e',
            'ẹ': 'e',
            'ê': 'e',
            'ế': 'e',
            'ề': 'e',
            'ể': 'e',
            'ễ': 'e',
            'ệ': 'e',
            'í': 'i',
            'ì': 'i',
            'ỉ': 'i',
            'ĩ': 'i',
            'ị': 'i',
            'ó': 'o',
            'ò': 'o',
            'ỏ': 'o',
            'õ': 'o',
            'ọ': 'o',
            'ô': 'o',
            'ố': 'o',
            'ồ': 'o',
            'ổ': 'o',
            'ỗ': 'o',
            'ộ': 'o',
            'ơ': 'o',
            'ớ': 'o',
            'ờ': 'o',
            'ở': 'o',
            'ỡ': 'o',
            'ợ': 'o',
            'ú': 'u',
            'ù': 'u',
            'ủ': 'u',
            'ũ': 'u',
            'ụ': 'u',
            'ư': 'u',
            'ứ': 'u',
            'ừ': 'u',
            'ử': 'u',
            'ữ': 'u',
            'ự': 'u',
            'ý': 'y',
            'ỳ': 'y',
            'ỷ': 'y',
            'ỹ': 'y',
            'ỵ': 'y',
        };

        return str.replace(/[^\u0000-\u007E]/g, function (a) {
            return diacriticsMap[a] || a;
        });
    }

    var keywordInput = document.getElementById("single-search");
    var wrapperSearchBar = keywordInput.closest(".wrapper-search-bar");

    keywordInput.addEventListener("focus", function () {
        // Thêm đoạn mã HTML vào phần tử cha
        var suggestDiv = document.createElement("div");
        suggestDiv.classList.add("suggest-single", "d-flex", "flex-column");

        var link1 = document.createElement("a");
        link1.href = "./search1.html";
        link1.textContent = "Chụp ảnh mỹ phẩm";

        var link2 = document.createElement("a");
        link2.href = "./search2.html";
        link2.textContent = "Chụp ảnh thời trang";

        var hr = document.createElement("hr");
        hr.style.margin = "0";
        hr.style.marginTop = "10px";

        var link3 = document.createElement("a");
        link3.href = "./search3.html";
        link3.textContent = "Hà Nội";

        var link4 = document.createElement("a");
        link4.href = "./search3.html";
        link4.textContent = "Đà Nẵng";

        suggestDiv.appendChild(link1);
        suggestDiv.appendChild(link2);
        suggestDiv.appendChild(hr);
        suggestDiv.appendChild(link3);
        suggestDiv.appendChild(link4);


        // Thêm phần tử mới vào phần tử cha
        wrapperSearchBar.appendChild(suggestDiv);
        var suggestDiv = wrapperSearchBar.querySelector(".suggest-single");
        suggestDiv.style.position = "absolute";
        suggestDiv.style.top = "55px";
        suggestDiv.style.left = "0";
        suggestDiv.style.backgroundColor = "hsl(252, 50%, 95%)";
        suggestDiv.style.padding = "10px 15px";
        suggestDiv.style.minHeight = "100px";
        suggestDiv.style.zIndex = "2";

        var suggestLinks = wrapperSearchBar.querySelectorAll(".suggest-single a");
        suggestLinks.forEach(function (link) {
            link.style.textDecoration = "none";
            link.style.color = "black";
            link.style.padding = "10px 0";
        });
    });

    keywordInput.addEventListener("blur", function () {
        // Xóa phần tử có lớp CSS "suggest-single" khỏi phần tử cha
        var suggestSingle = wrapperSearchBar.querySelector(".suggest-single");
        if (suggestSingle) {
            suggestSingle.remove();
        }
    });



    var keywordInputDK = document.getElementById("double-search-keyword");
    var wrapperSearchBarDK = keywordInputDK.closest(".wrapper-search-bar");
    keywordInputDK.addEventListener("focus", function () {
        // Thêm đoạn mã HTML vào phần tử cha
        var suggestDiv = document.createElement("div");
        suggestDiv.classList.add("suggest-single", "d-flex", "flex-column");

        var link1 = document.createElement("a");
        link1.href = "./search1.html";
        link1.textContent = "Chụp ảnh mỹ phẩm";

        var link2 = document.createElement("a");
        link2.href = "./search2.html";
        link2.textContent = "Chụp ảnh thời trang";

        suggestDiv.appendChild(link1);
        suggestDiv.appendChild(link2);


        // Thêm phần tử mới vào phần tử cha
        wrapperSearchBarDK.appendChild(suggestDiv);
        var suggestDiv = wrapperSearchBarDK.querySelector(".suggest-single");
        suggestDiv.style.position = "absolute";
        suggestDiv.style.top = "50px";
        suggestDiv.style.left = "0";
        suggestDiv.style.backgroundColor = "hsl(252, 50%, 95%)";
        suggestDiv.style.padding = "10px 15px";
        suggestDiv.style.minHeight = "100px";
        suggestDiv.style.zIndex = "2";

        var suggestLinks = wrapperSearchBarDK.querySelectorAll(".suggest-single a");
        suggestLinks.forEach(function (link) {
            link.style.textDecoration = "none";
            link.style.color = "black";
            link.style.padding = "10px 0";
        });
    });
    keywordInputDK.addEventListener("blur", function () {
        // Xóa phần tử có lớp CSS "suggest-single" khỏi phần tử cha
        var suggestSingle = wrapperSearchBarDK.querySelector(".suggest-single");
        if (suggestSingle) {
            suggestSingle.remove();
        }
    });


    var keywordInputDK = document.getElementById("double-search-location");
    var wrapperSearchBarDL = keywordInputDK.closest(".wrapper-search-bar");
    keywordInputDK.addEventListener("focus", function () {
        // Thêm đoạn mã HTML vào phần tử cha
        var suggestDiv = document.createElement("div");
        suggestDiv.classList.add("suggest-single", "d-flex", "flex-column");

        var link1 = document.createElement("a");
        link1.href = "./search1.html";
        link1.textContent = "Hà Nội";

        var link2 = document.createElement("a");
        link2.href = "./search2.html";
        link2.textContent = "Đà Nẵng";

        var link3 = document.createElement("a");
        link3.href = "./search3.html";
        link3.textContent = "Hồ Chí Minh";

        suggestDiv.appendChild(link1);
        suggestDiv.appendChild(link2);
        suggestDiv.appendChild(link3);

        // Thêm phần tử mới vào phần tử cha
        wrapperSearchBarDL.appendChild(suggestDiv);
        var suggestDiv = wrapperSearchBarDL.querySelector(".suggest-single");
        suggestDiv.style.position = "absolute";
        suggestDiv.style.top = "50px";
        suggestDiv.style.left = "60%";
        suggestDiv.style.backgroundColor = "hsl(252, 50%, 95%)";
        suggestDiv.style.padding = "10px 15px";
        suggestDiv.style.minHeight = "100px";
        suggestDiv.style.zIndex = "2";

        var suggestLinks = wrapperSearchBarDL.querySelectorAll(".suggest-single a");
        suggestLinks.forEach(function (link) {
            link.style.textDecoration = "none";
            link.style.color = "black";
            link.style.padding = "10px 0";
        });
    });
    keywordInputDK.addEventListener("blur", function () {
        // Xóa phần tử có lớp CSS "suggest-single" khỏi phần tử cha
        var suggestSingle = wrapperSearchBarDL.querySelector(".suggest-single");
        if (suggestSingle) {
            suggestSingle.remove();
        }
    });

});
