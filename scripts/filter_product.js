(function() {

    const controlls = document.querySelectorAll('.menu__item');
    const activeClass = 'menu__item-selected';
    const cont = document.querySelectorAll('.description__filter')
    const removeClass = 'description-unselected'

    controlls.forEach(function(control) {

        control.addEventListener('click', function(e) {
            e.preventDefault();

            const filterName = control.getAttribute('href');

            const filterView = document.querySelector(filterName)

            cont.forEach(function(elem) {
                elem.classList.add(removeClass)
            })

            filterView.classList.remove(removeClass)


            controlls.forEach(function(link) {
                link.classList.remove(activeClass)
            })
            
            control.classList.add(activeClass);

        })
    })

})()