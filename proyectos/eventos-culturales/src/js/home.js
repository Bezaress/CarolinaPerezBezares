/*<script>

    document.addEventListener("DOMContentLoaded", ()=>{

        let slides = document.querySelectorAll(".hero-slide");
        let dots = document.querySelectorAll(".dot");

        let index = 0;

        function showSlide(i){

            slides.forEach(slide => slide.classList.remove("active"));
            dots.forEach(dot => dot.classList.remove("active"));
            slides.forEach(slide => slide.style.display = "none");

            slides[i].style.display = "block";
            slides[i].classList.add("active");
            dots[i].classList.add("active");
        }

        setInterval(()=>{

            index++;

            if(index >= slides.length){
            index = 0;
            }

            showSlide(index);

        },5000);

});

</script>*/