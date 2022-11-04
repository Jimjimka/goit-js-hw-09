import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay);
  });
  
}

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const { elements: delay, step, amount } = event.currentTarget;

  let numberOfDelay = Number(delay[0].value);
  let numberOfStep = Number(step.value);
  
  for (let i = 1; i <= amount.value; i += 1) { 
   
     createPromise((i), numberOfDelay)
      .then(({ position,  delay}) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
      .catch(({ position, delay }) => {
       Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

      })
    
    numberOfDelay += numberOfStep;
  }
});
