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
});
