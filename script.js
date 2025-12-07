const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const form = document.querySelector('form');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');


const USD = 4.87
const GBP = 6.08
const EUR = 5.32


amount.addEventListener('input', () => {
  const hasCharectersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharectersRegex, '');
}); 

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, 'US$');  
      break;
    case 'GBP':
      convertCurrency(amount.value, GBP, '£');  
      break;
    case 'EUR':
      convertCurrency(amount.value, EUR, '€');  
      break;
    default:
      alert('Please select a currency');
  }

}

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = R$ ${formatCurrencyBRL(price)}`;
    
    let total = amount * price;
    total = formatCurrencyBRL(total).replace('R$', '');
    result.textContent = `${total} Reais`;
    
    footer.classList.add('show-result');
  
  } catch (error) {

    footer.classList.remove('show-result');
    console.log(error);
    alert('Não foi possivel fazer a conversão. Tente mais tarde.');
  }

}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}


