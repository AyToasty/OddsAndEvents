function numEvents() {
  const state = {
    numberBank: [],
    odds: [],
    evens: []
  };


  const inputElement = document.getElementById('inputUser');
  const numberBankOutput = document.querySelector('#numberBank output');
  const oddsOutput = document.querySelector('#odds output');
  const evensOutput = document.querySelector('#evens output');
  const addButton = document.querySelector('button');
  const sortOneButton = document.querySelector('#sortOne');
  const sortAllButton = document.querySelector('#sortAll');


  function updateUI() {
    numberBankOutput.innerText = state.numberBank.join(', ');
    oddsOutput.innerText = state.odds.join(', ');
    evensOutput.innerText = state.evens.join(', ');
  }

  addButton.addEventListener('click', function(event) {
    event.preventDefault();
    const inputNum = Number(inputElement.value);
    if (!isNaN(inputNum)) {
      state.numberBank.push(inputNum);
      updateUI();
    }
  });

  sortOneButton.addEventListener('click', function() {
    if (state.numberBank.length > 0) {
      const numToSort = state.numberBank.shift();
      if (numToSort % 2 === 0) {
        state.evens.push(numToSort);
      } else {
        state.odds.push(numToSort);
      }
      updateUI();
    }
  });

  sortAllButton.addEventListener('click', function() {
    state.numberBank.forEach(function(num) {
      if (num % 2 === 0) {
        state.evens.push(num);
      } else {
        state.odds.push(num);
      }
    });
    state.numberBank = [];
    updateUI();
  });
};

numEvents();