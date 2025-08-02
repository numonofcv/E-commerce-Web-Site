const mobileMenuIcon = document.getElementById('bar');
const closeNav = document.getElementById('close-nav');
const navList = document.querySelector('.nav-list');

mobileMenuIcon.addEventListener('click', () => {
  navList.classList.add('show');
});

closeNav.addEventListener('click', () => {
  navList.classList.remove('show');
});


        // Mahsulot detallarini yuklash
        document.addEventListener('DOMContentLoaded', function() {
            // localStorage'dan mahsulot ma'lumotlarini olish
            const productData = JSON.parse(localStorage.getItem('selectedProduct'));
            
            if (productData) {
                // Asosiy rasmni o'rnatish
                document.getElementById('mainImg').src = productData.mainImg;
                
                // Thumbnail rasmlarni o'rnatish
                const thumbImages = document.querySelectorAll('.small-img');
                if (thumbImages.length >= 4) {
                    thumbImages[0].src = productData.thumbImg1;
                    thumbImages[1].src = productData.thumbImg2;
                    thumbImages[2].src = productData.thumbImg3;
                    thumbImages[3].src = productData.thumbImg4;
                }
                
                // Mahsulot sarlavhasi, narxi va tavsifini o'rnatish
                document.getElementById('product-title').textContent = productData.title;
                document.getElementById('product-price').textContent = productData.price;
                document.getElementById('product-description').textContent = productData.description;
            }
            
            // Thumbnail rasmlarga bosilganda asosiy rasmni o'zgartirish
            const thumbnails = document.querySelectorAll('.small-img');
            thumbnails.forEach(thumb => {
                thumb.addEventListener('click', function() {
                    document.getElementById('mainImg').src = this.src;
                });
            });
            
            // Mobil menyu
            const mobileMenuIcon = document.getElementById('bar');
            const closeNav = document.getElementById('close-nav');
            const navList = document.querySelector('.nav');
            
            mobileMenuIcon.addEventListener('click', () => {
                navList.classList.add('show');
            });
            
            closeNav.addEventListener('click', () => {
                navList.classList.remove('show');
            });
        });