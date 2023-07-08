// Thay vì sử dụng sự kiện "DOMContentLoaded"
window.addEventListener("load", function () {
    // Mã JavaScript sẽ được thực thi sau khi toàn bộ tài liệu HTML và các tài nguyên liên quan đã được tải
    var doubleSubmitButton = document.getElementById("double_submit");
    if (doubleSubmitButton) {
        doubleSubmitButton.addEventListener("click", search);
    }

    var singleSubmitButton = document.getElementById("single_submit");
    if (singleSubmitButton) {
        singleSubmitButton.addEventListener("click", search1);
    }

    // Các hàm search và search1 ở đây...
    function search() {
        var keyword = document.getElementById("double-search-keyword").value;
        var location = document.getElementById("double-search-location").value;

        if (keyword && location) {
            if (keyword.includes("đồ ăn") && !location.includes("hà nội")) {
                window.location.href = "search1.html";
            } else if (!keyword.includes("đồ ăn") && location.includes("hà nội")) {
                window.location.href = "search2.html";
            } else if (keyword.includes("đồ ăn") && location.includes("hà nội")) {
                window.location.href = "search3.html";
            } else {
                window.location.href = "search-notfound.html";
            }
        } else if (keyword) {
            if (keyword.includes("đồ ăn")) {
                window.location.href = "search1.html";
            } else {
                window.location.href = "search-notfound.html";
            }
        } else if (location) {
            if (location.includes("hà nội")) {
                window.location.href = "search2.html";
            } else {
                window.location.href = "search-notfound.html";
            }
        }
    }

    function search1() {
        var keyword = document.getElementById("single-search").value;
        console.log(keyword);
        if (keyword) {
            if (keyword.includes("đồ ăn") && keyword.includes("hà nội")) {
                window.location.href = "search3.html";
            } else if (keyword.includes("đồ ăn") && !keyword.includes("hà nội")) {
                window.location.href = "search1.html";
            } else if (!keyword.includes("đồ ăn") && keyword.includes("hà nội")) {
                window.location.href = "search2.html";
            } else {
                window.location.href = "search-notfound.html";
            }
        } else {

        }
    }

});

