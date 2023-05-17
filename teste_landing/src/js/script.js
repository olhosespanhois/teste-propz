jsonGet();

async function jsonGet() {
    const json1 = await fetch('src/js/teste.json').then(resposta => resposta.json())

    json1.then(dados=>{
    console.log(dados)
    })
}




let texto = `{
    "nome": "Fulano",
    "idade": 90,
    "filmes_preferidos": [ "Pulp Fiction", "Clube da Luta" ],
    "contatos": {
        "telefone": "(11) 91111-2222",
        "emails": [ "fulano@gmail.com", "fulano@yahoo.com" ]
    }
}`;
// se o seu browser não suporta a template string acima, use a linha abaixo
//let texto = '{ "nome": "Fulano", "idade": 90, "filmes_preferidos": [ "Pulp Fiction", "Clube da Luta" ], "contatos": { "telefone": "(11) 91111-2222", "emails": [ "fulano@gmail.com", "fulano@yahoo.com" ] } }';

let json = JSON.parse(texto);
// imprimir nome
console.log(json.nome);
// imprimir filmes
json.filmes_preferidos.forEach(filme => console.log(filme));
// imprimir contatos
for (let [tipo, contato] of Object.entries(json.contatos)) {
    console.log(tipo, '=', Array.isArray(contato) ? contato.join() : contato);
}