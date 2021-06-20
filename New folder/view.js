window.addEventListener('load', () =>{
    const Stock = localStorage.getItem('STOCK');
    document.getElementsById("para").innerHTML = Stock;
})