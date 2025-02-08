<div id="purchaseModal" style="display: none; 
     position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
     background-color: rgba(0, 0, 0, 0.5); z-index: 1000;">
  <div style="width: 300px; margin: 100px auto; background-color: white; 
       padding: 20px; border-radius: 10px; text-align: center;">
    <h2>Покупка звёзд</h2>
    <p>Выберите вариант:</p>
    <button onclick="buyStars(100)">Купить 100 звёзд - $0.99</button><br><br>
    <button onclick="buyStars(500)">Купить 500 звёзд - $3.99</button><br><br>
    <button onclick="closePurchaseWindow()">Отмена</button>
  </div>
</div>