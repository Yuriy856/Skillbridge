
function playVideo() {
    const video = document.querySelector('.video-element');
    const playButton = document.querySelector('.play-btn');
    const iconButton = document.querySelector('.play-icon');

    console.log(video.paused);
    if (video.paused) {
        video.play();
        video.controls = true;
        // iconButton.src = '../images/pause_icon.svg';
        playButton.style = 'display: none';

    } else {
        video.pause();
    }
}



// Pricing Section ******************************************

const pricingButtons = document.querySelectorAll('.pricing-button');

pricingButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.button-active').classList.remove('button-active');
        button.classList.add('button-active');

        const priceFreePlan = document.querySelector('.free-plan .pricing__item-price');
        const priceProPlan = document.querySelector('.pro-plan .pricing__item-price');

        if (button.classList.contains('button-yearly')) {
            priceFreePlan.innerHTML = `<span class="item-price__sum">$0</span>/year`;

            priceProPlan.innerHTML = `<span class="item-price__sum">$799</span>/year`;
        } else if (button.classList.contains('button-monthly')) {
            priceFreePlan.innerHTML = `<span class="item-price__sum">$0</span>/month`;

            priceProPlan.innerHTML = `<span class="item-price__sum">$79</span>/month`;
        }
    })
});

// Pricing Section ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^








// Accordion  **********************************************************************

const questionButtonsElement = document.querySelectorAll('.questions__item-button');


questionButtonsElement.forEach(questionButtonElement => {

    questionButtonElement.addEventListener('click', () => {


        if (questionButtonElement.classList.contains('item-button-active')) {
            questionButtonElement.classList.remove('item-button-active');
        } else {
            questionButtonsElement.forEach(questionButtonElement => {
                questionButtonElement.classList.remove('item-button-active');
                questionButtonElement.parentElement.nextElementSibling.classList.remove('item-bottom-open');
                questionButtonElement.parentElement.parentElement.classList.remove('questions__item-open');
            });
            questionButtonElement.classList.add('item-button-active');
        }



        const questionBottomContent = questionButtonElement.parentElement.nextElementSibling;
        const questionsItem = questionBottomContent.parentElement;


        if (questionButtonElement.classList.contains('item-button-active')) {

            questionBottomContent.classList.add('item-bottom-open');
            questionsItem.classList.add('questions__item-open');
            // console.log(questionButtonElement.scrollHeight);
        } else {
            questionBottomContent.classList.remove('item-bottom-open');
            questionsItem.classList.remove('questions__item-open');
        }
    });
})

// Accordion ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^