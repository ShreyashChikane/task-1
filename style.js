function sayHello() {
    let inputElement = document.getElementById('name-input');
    let name = inputElement.value;
  
    let outputElement = document.getElementById('output');
    outputElement.innerText = 'Hey wasup ' + name + ' Here is your interactive module';
  }
  
