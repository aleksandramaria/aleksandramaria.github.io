document.addEventListener('DOMContentLoaded', function () {

    var arrow = document.querySelector('.list_arrow');
    console.log(arrow);
    var listPanel = document.querySelector('.list_panel');
    console.log(listPanel);

    // listPanel.style.display = 'none';
    arrow.addEventListener('click', function () {
        listPanel.style.display.toggle = 'block';
    })

    // arrow.addEventListener('click', function () {
    //     listPanel.style.display = 'none';
    // })
});