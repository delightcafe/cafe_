
// document.getElementById('searchInput').addEventListener('input', function () {
//     var searchValue = this.value.toLowerCase();
//     var items = document.querySelectorAll('.item');

//     items.forEach(function (item) {
//         var itemText = item.textContent.toLowerCase();

//         if (itemText.includes(searchValue)) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// });



// document.querySelectorAll('.cont p:nth-child(2)').forEach(function (priceElement) {
//     priceElement.innerHTML = '₹' + priceElement.innerHTML;
// });


// let loader = document.querySelector("#loader")

// setTimeout(function(){

//     loader.style.top = "-100%"

// },2500)


// document.querySelectorAll('.item').forEach(function (item) {
//     var priceElement = item.querySelector('p:nth-child(2)');

//     if (!priceElement.classList.contains('price')) {
//         priceElement.classList.add('price');
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    // Function to hide images with classes 'backimg1' to 'backimg10'
    function hideImages() {
        for (let i = 1; i <= 10; i++) {
            let image = document.querySelector('.backimg' + i);
            if (image) {
                image.style.display = 'none';
            }
        }
    }
input = document.getElementsByTagName("input");
    // Initial hide of images on page load
    if(input.textContent == 'a'){
    hideImages();
    }
    else{
        
    }

    // Your existing code for search functionality
    document.getElementById('searchInput').addEventListener('input', function () {
        var searchValue = this.value.toLowerCase();
        var items = document.querySelectorAll('.item');

        items.forEach(function (item) {
            var itemText = item.textContent.toLowerCase();

            if (itemText.includes(searchValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Hide images only when there is some input
        if (searchValue.trim() !== '') {
            hideImages();
        }
    });

    // Your existing code for formatting prices
    document.querySelectorAll('.cont p:nth-child(2)').forEach(function (priceElement) {
        priceElement.innerHTML = '₹' + priceElement.innerHTML;
    });

    // Your existing code for loader animation
    let loader = document.querySelector("#loader");
    setTimeout(function() {
        loader.style.top = "-100%";
    }, 2500);

    // Your existing code for adding 'price' class
    document.querySelectorAll('.item').forEach(function (item) {
        var priceElement = item.querySelector('p:nth-child(2)');
        if (!priceElement.classList.contains('price')) {
            priceElement.classList.add('price');
        }
    });
});
