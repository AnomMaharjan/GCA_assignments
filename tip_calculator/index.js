function calculateTip() {
  let amount = document.getElementById('amount').value;
  let tip = document.getElementById('tip').value;

  let tip_amount = (amount * tip) / 100;
  document.getElementById('result').innerHTML = tip_amount;
}
