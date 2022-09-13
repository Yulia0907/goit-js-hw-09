import Notiflix from 'notiflix';


const refs = {
  formEl: document.querySelector('.form'),
}

const {
  elements: {delay, step, amount},
} = refs.formEl;

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
     const shouldResolve = Math.random() > 0.3;

setInterval(() => {  
    if (shouldResolve) {
      resolve({ position, delay });
  } else {
    reject({ position, delay });
  }
  }, delay);
});
return promise;
};

refs.formEl.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(e) {
  e.preventDefault();
  let delayVal = Number(delay.value);
  const stepVal = Number(step.value);
  const amountVal = Number(amount.value);
  for (let i=1; i <= amountVal; i++) {
    createPromise(i, delayVal)
  .then(({ position, delay}) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
 delayVal += stepVal;
 } 
}

