window.onload = function() {
    document.addEventListener('click', moveActions);


    //Actions (делегирование события click)


    function moveActions(e) {
        const targetElement = e.target;


        if (targetElement.classList.contains('button')) {

            let blocks = document.getElementsByClassName("an1");
            for (let i = 0; i < blocks.length; i++) {
                blocks[i].classList.toggle('foxyanim-2');
            }

        }

        if (targetElement.classList.contains('button')) {
            document.querySelector('.foxy-red').classList.remove('foxyanim3');
            document.querySelector('.foxy-red').classList.toggle('foxyanim');

            document.querySelector('.foxy2-red').classList.remove('foxyanim3');
            document.querySelector('.foxy2-red').classList.toggle('foxyanim');
        }



        if (targetElement.classList.contains('button3')) {

            let blocks = document.getElementsByClassName("an1");
            for (let i = 0; i < blocks.length; i++) {
                blocks[i].classList.remove('foxyanim-2');
            }
        }

        if (targetElement.classList.contains('button3')) {
            document.querySelector('.foxy-red').classList.remove('foxyanim');
            document.querySelector('.foxy-red').classList.toggle('foxyanim3');

            document.querySelector('.foxy2-red').classList.remove('foxyanim');
            document.querySelector('.foxy2-red').classList.toggle('foxyanim3');
        }

        if (targetElement.classList.contains('button-5')) {
            document.querySelector('.foxy-2').classList.remove('dblock');
            document.querySelector('.foxy-2').classList.add('dnone');
            document.querySelector('.foxy-1').classList.add('dblock');
        }

        if (targetElement.classList.contains('button-6')) {
            document.querySelector('.foxy-1').classList.remove('dblock');
            document.querySelector('.foxy-1').classList.add('dnone');
            document.querySelector('.foxy-2').classList.add('dblock');
        }

    }




}




/* function myFunction2() {
    document.body.classList.remove('bgcolor-2');
    document.body.classList.toggle('bgcolor-1');
}

function myFunction4() {
    document.body.classList.remove('bgcolor-1');
    document.body.classList.toggle('bgcolor-2');
}
console.log('hello!'); */