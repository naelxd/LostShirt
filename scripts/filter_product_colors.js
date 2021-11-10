(function() {
    const buttons = document.querySelectorAll('.slider-clr');
    const removeClass = 'th_unselected';
    const tshortsList = document.querySelectorAll('.tshirt')

    buttons.forEach(function(button) {

        button.addEventListener('click', function() {

            const colorBtn = button.getAttribute("name");
            
            const tshirt = document.querySelector(colorBtn)

            tshortsList.forEach(function(oneTshort) {
                oneTshort.classList.add(removeClass)
            })

            tshirt.classList.remove(removeClass)
        })

    })
})()