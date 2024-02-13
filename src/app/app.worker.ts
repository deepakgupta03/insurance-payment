/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  var premium = calculatePremium(data);
  postMessage(premium);
});

function calculatePremium(amount: number): number {
  // Add 5% tax to premium
 return amount+ amount*0.05;
}