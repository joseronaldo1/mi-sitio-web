let boxSlider = document.getElementById("boxSlider");

boxSlider.addEventListener("click",function() {
    if (boxSlider.classList.contains("box-slider-1")){
        boxSlider.classList.remove("box-slider-1");
        boxSlider.classList.add("box-slider-2");
    }
    else if(boxSlider.classList.contains("box-slider-2")){
        boxSlider.classList.remove("box-slider-2");
        boxSlider.classList.add("box-slider-3");
    }
    else if(boxSlider.classList.contains("box-slider-3")){
        boxSlider.classList.remove("box-slider-3");
        boxSlider.classList.add("box-slider-4");
    }
    else if(boxSlider.classList.contains("box-slider-4")){
        boxSlider.classList.remove("box-slider-4");
        boxSlider.classList.add("box-slider-5");
    }
});