export const createDogObjectFromUrl = (url) => {
  const breedWithDash = url.split("/")[4]
  const breedNormalized = breedWithDash.replace("-", " ")

  return {
    id: url, // só tem url como algo único nesse dado da API
    breed: breedNormalized,
    url: url
  }
}

/*
 Exemplo de url que a API retorna
 "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_2478.jpg"

 toda resposta da API devolve uma url nessa estrutura,
 então essa lógica abaixo sempre funcionará

1:
url.split("/") quebra a url em um array:

2:
[
  "https:",
  "",
  "images.dog.ceo",
  "breeds",
  "pinscher-miniature",
  "n02107312_2478.jpg"
]

3:
url.split("/")[4] pega o índice 4 do array
"pinscher-miniature"

4:
e retornamos um objeto estruturado com id, breed e url
{
  id: "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_2478.jpg",
  breed: "pinscher-miniature",
  url: "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_2478.jpg"
)

novamente, id só está se repetindo no objeto com o valor de url,
porque url é única e não existe outro valor nesse caso que funcione 100% como id
*/