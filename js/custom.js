      $(function(){
        if ( typeof $.fn.slick !== 'function' ) {
          console.error('Slick not loaded');
          return;
        }
        $('.women-img').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,  // ✅ removed pagination
          adaptiveHeight: true
        });
      });



// Enable all popovers
      document.addEventListener("DOMContentLoaded", function () {
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        popoverTriggerList.map(function (popoverTriggerEl) {
          return new bootstrap.Popover(popoverTriggerEl)
        })
      })



    $('.discover-image').slick({
        slidesToShow: 12,   // show 5 products per row
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 6 }
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 2 }
            }
        ]
    });


        document.querySelectorAll('.product-title').forEach(el => {
            let words = el.innerText.trim().split(" ");
            if(words.length > 6){
                el.innerText = words.slice(0, 6).join(" ") + '...';
            }
        });

        //all image

      function previewImage(element, newSrc) {
        const container = element.closest('.product-container');
        const img = container.querySelector('.product-image');
        
        // Store the original image only once
        if (!img.dataset.original) {
          img.dataset.original = img.src;
        }

        // Change to hovered color image
        img.src = newSrc;
        img.dataset.active = newSrc; // store the active image path

        // Remove active class from all color options
        const allOptions = container.querySelectorAll('.color-option');
        allOptions.forEach(opt => opt.classList.remove('active-color'));

        // Add active class to this color
        element.classList.add('active-color');
      }

    function resetImage(element) {
      // We no longer reset the image visually here
      // because we keep the last hovered as active
    }

    //offcanvas of small device 
     document.querySelectorAll('.filter-title').forEach((title, index) => {
        title.addEventListener('click', function () {
            document
                .querySelectorAll('.filter-title')
                .forEach(item => item.classList.remove('active'));

            this.classList.add('active');

            document
                .querySelectorAll('.filter-options')
                .forEach(opts => opts.classList.remove('show'));

            document
                .querySelectorAll('.filter-options')[index]
                .classList.add('show');
        });
    });

    //collapse text
    document.querySelectorAll('.read-more-btn').forEach(btn => {
  btn.addEventListener('click', function(e){
    e.stopPropagation(); // prevent parent click if needed
    const paragraph = this.parentElement;
    const moreText = paragraph.querySelector('.more-text');

    if(moreText.style.display === 'inline') {
      // Collapse
      moreText.style.display = 'none';
      paragraph.style.whiteSpace = 'nowrap';
      this.textContent = ' Read More';
    } else {
      // Expand
      moreText.style.display = 'inline';
      paragraph.style.whiteSpace = 'normal';
      this.textContent = ' Read Less';
    }
  });
});

//WOW JS
    new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // animate.css class
    offset:       0,          // distance to start animation
    mobile:       true,       // animate on mobile
    live:         true
  }).init();

  //shop page
  document.addEventListener("DOMContentLoaded", function () {
    const row = document.querySelector("#category .category-row");
    if (!row) return;

    let scrollAmount = 0;
    const scrollStep = 2; // scrolling speed in px
    const delay = 20; // delay in ms between scroll steps

    function autoScroll() {
        if (window.innerWidth <= 991) { // only for small screens
            scrollAmount += scrollStep;
            row.scrollLeft = scrollAmount;

            // Reset smoothly when reaching the end
            if (scrollAmount >= row.scrollWidth - row.clientWidth) {
                scrollAmount = 0;
                row.scrollLeft = 0;
            }
        }
    }

    setInterval(autoScroll, delay);
});


document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.navbar-nav .nav-item.dropdown');

  navItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    link.addEventListener('click', e => {
      if (window.innerWidth < 992) {
        e.preventDefault();
        item.classList.toggle('open');
        // close others
        navItems.forEach(other => {
          if (other !== item) other.classList.remove('open');
        });
      }
    });
  });
});


