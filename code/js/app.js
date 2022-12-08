const count_set = document.querySelector('.result-amount'), 
   adder = document.querySelector('.add'),
   lower = document.querySelector('.remove');

   let count = 0;

   adder.addEventListener('click', function(){
      count_set.innerHTML = count++
   })

   lower.addEventListener('click', function(){
      count_set.innerHTML = count--
   })