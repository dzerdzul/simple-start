"use strict"; 


document.getElementsByClassName("button")[0].addEventListener("mouseleave",function(event) {
    console.log(window.getComputedStyle(this,"::after"));
    
    
    console.log(event); 
})

let element = document.getElementsByClassName("block__item");
//console.log(element);
for (let i = 0; i < element.length; i++) {
    //console.log(element[i]);
    element[i].addEventListener("click", function (event) {
        if (this.classList.contains("block__item_active")) {
            this.classList.remove("block__item_active");
            this.firstElementChild.classList.remove("block__title_active");
            this.lastElementChild.classList.remove("block__text_active");
            return;
        }

        let deleteActive = [
            "block__item_active",
            "block__title_active",
            "block__text_active",
        ];
        deleteActive.forEach(function (value) {
            document.getElementsByClassName(value)[0]?.classList.remove(value);
        });

        this.classList.toggle("block__item_active");
        let childTitle = this.firstElementChild;
        childTitle.classList.toggle("block__title_active");
        let childText = this.lastElementChild;
        //console.log(childText);
        childText.classList.toggle("block__text_active");
    });
}