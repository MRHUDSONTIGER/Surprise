document.getElementById('quizBtn').addEventListener('click', function() {
    document.getElementById('quizContainer').classList.remove('hidden');
});

document.getElementById('answer1').addEventListener('input', checkAnswers);
document.getElementById('answer2').addEventListener('input', checkAnswers);

function checkAnswers() {
    const answer1 = document.getElementById('answer1').value.trim();
    const answer2 = document.getElementById('answer2').value.trim();

    const correctAnswer1 = '13/04/2024';
    const correctAnswer2 = '25/04/2024';

    if (answer1 === correctAnswer1 && answer2.toLowerCase() === correctAnswer2.toLowerCase()) {
        document.getElementById('submitBtn').disabled = false;
    } else {
        document.getElementById('submitBtn').disabled = true;
    }
}

document.getElementById('submitBtn').addEventListener('click', function() {
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('videoContainer').classList.remove('hidden');
    document.getElementById('birthdayVideo').play(); // Auto-play the video when revealed
});
