const turista = prompt("Digite seu nome abaixo")
let cidades = ""
let contagem = 0

let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim"){
  let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você já visitou alguma outra cidade? (Sim/Não)")

}

alert(
  turista + " já visitou " + contagem + " cidades" +
  "\nCidades visitadas: " + "\n" + cidades
)
