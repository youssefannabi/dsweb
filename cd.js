const partnerLogos = document.querySelectorAll('.partners .logos img');

partnerLogos.forEach((logo) => {
  logo.addEventListener('mouseenter', () => {
    logo.style.transform = 'scale(1.1)';
    logo.style.transition = 'transform 0.3s ease';
  });

  logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'scale(1)';
  });
});

const carouselImages = document.querySelectorAll('.carousel-image');
let currentCarouselIndex = 0;

if (carouselImages.length > 0) {
  carouselImages[currentCarouselIndex].classList.add('active');
}

function showNextCarouselImage() {
  carouselImages[currentCarouselIndex].classList.remove('active');
  currentCarouselIndex = (currentCarouselIndex + 1) % carouselImages.length;
  carouselImages[currentCarouselIndex].classList.add('active');
}

setInterval(showNextCarouselImage, 3000);

const timelineItems = document.querySelectorAll('.timeline-item');
const colors = ['#4CAF50', '#FF5722', '#2196F3'];

timelineItems.forEach((item, index) => {
  item.style.borderColor = colors[index % colors.length];
  const timelineText = item.querySelector('p');
  if (timelineText) {
    timelineText.style.backgroundColor = colors[index % colors.length];
  }
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

window.addEventListener('scroll', () => {
  timelineItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

const projBoxes = document.querySelectorAll('.proj-box');

projBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    box.classList.toggle('active');
  });
});

const correctAnswers = {
  q1: "2021",
  q2: "2024",
  q3: "IoT",
  q4: "Chelsea",
  q5: "22",
  q6: "Football",
  q7: "Arduino",
  q8: "Gestion de l'énergie",
  q9: "BAYGRID",
  q10: "Java",
  q11: "Systèmes embarqués",
};

function calculateScore() {
  const form = document.getElementById("quizForm");
  const questions = form.querySelectorAll(".question");
  let score = 0;

  questions.forEach((questionDiv, index) => {
    const questionName = "q" + (index + 1);
    const userAnswer = form.elements[questionName]?.value;

    if (userAnswer === correctAnswers[questionName]) {
      questionDiv.classList.add("correct");
      questionDiv.classList.remove("incorrect");
      score++;
    } else {
      questionDiv.classList.add("incorrect");
      questionDiv.classList.remove("correct");
    }
  });

  let message = '';
  let emoji = '';

  if (score === 0) {
    message = "Dommage ! Tu n'as aucune bonne réponse. 😞";
  } else if (score >= 1 && score <= 4) {
    message = "Tu as fait de ton mieux, mais il reste encore à apprendre ! 😕";
  } else if (score >= 5 && score <= 7) {
    message = "Bien ! Tu me connais bien, mais tu peux encore améliorer ! 😊";
  } else if (score >= 8 && score <= 10) {
    message = "Bravo ! Tu connais très bien mon histoire ! 🎉";
  } else if (score === 11) {
    message = "Wow, tu me connais vraiment très bien ! Tu m'aimes, non ? 😍";
  }

  alert(`Votre score : ${score} / ${questions.length}\n${message}`);
}
