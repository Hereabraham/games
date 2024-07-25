const animals = [
    { name: 'cat', image: 'images/cat.jpg' },
    { name: 'dog', image: 'images/dog.jpg' },
    { name: 'elephant', image: 'images/elephant.jpg' },
    { name: 'giraffe', image: 'images/giraffe.jpg' },
    { name: 'panda', image: 'images/panda.jpg' }
];

let currentAnimalIndex = 0;

window.onload = () => {
    showAnimal();
};

function showAnimal() {
    const animalImageContainer = document.getElementById('animal-image-container');
    animalImageContainer.innerHTML = `<img src="\${animals[currentAnimalIndex].image}" alt="animal">`;
}

function checkAnswer() {
    const answerInput = document.getElementById('answer-input');
    const feedback = document.getElementById('feedback');
    const userAnswer = answerInput.value.toLowerCase();

    if (userAnswer === animals[currentAnimalIndex].name) {
        feedback.textContent = 'Correct!';
        nextAnimal();
    } else {
        feedback.textContent = 'Try again!';
    }

    answerInput.value = '';
}

function nextAnimal() {
    currentAnimalIndex = (currentAnimalIndex + 1) % animals.length;
    showAnimal();
}