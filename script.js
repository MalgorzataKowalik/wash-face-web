const buttonBack = document.querySelector('button.back')

function uploadSections() {

    const scrollPosition = window.scrollY;


    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const five = document.querySelector('.five');


    // const oneHeight = one.offsetHeight
    const twoHeight = two.offsetHeight;
    const threeHeight = three.offsetHeight;
    const fourHeight = four.offsetHeight;
    const fiveHeight = five.offsetHeight;

    const oneFromTop = one.offsetTop;
    const twoFromTop = two.offsetTop;
    const threeFromTop = three.offsetTop;
    const fourFromTop = four.offsetTop;
    const fiveFromTop = five.offsetTop;


    if (scrollPosition >= ((twoFromTop - window.innerHeight)) + 0.2 * twoHeight) {      
        two.classList.remove('notUploaded');
        buttonBack.classList.remove('notUploaded');
    }
    if (scrollPosition >= ((threeFromTop - window.innerHeight)) + 0.2 * threeHeight) {
        three.classList.remove('notUploaded');
    }
    if (scrollPosition >= ((fourFromTop - window.innerHeight)) + 0.2 * fourHeight) {
        four.classList.remove('notUploaded');
    }
    if (scrollPosition >= ((fiveFromTop - window.innerHeight)) + 0.2 * fiveHeight) {
        five.classList.remove('notUploaded');
    }
    if (scrollPosition <= oneFromTop) {      
        buttonBack.classList.add('notUploaded');
    }

}


window.addEventListener('scroll', uploadSections)

buttonBack.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

