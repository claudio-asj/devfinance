async function getData() {
    let response = await fetch('../database/db.json');
    let dados = await response.json();
    return dados;
};


async function clicou(){
    console.log(await getData());
    alert("clicou");
}