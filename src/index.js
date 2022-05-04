// write your code here
const init = () => {
  const ramenMen = document.getElementById('ramen-menu')
  const bigImg = document.querySelector('div#ramen-detail img')
  const name = document.querySelector('div#ramen-detail h2')
  const resturauntT = document.querySelector('div#ramen-detail h3')
  const rating = document.querySelector('p span#rating-display')
  const comment = document.querySelector('p#comment-display')
  let selection = 0;

  fetch(`http://localhost:3000/ramens`)
    .then(resp => resp.json())
    .then(data => {
      for (rest of data) {
        const image = document.createElement("img")
        const thisImg = `${rest.image}`
        const thisName = `${rest.name}`
        const thisResturaunt = `${rest.restaurant}`
        const thisRating = `${rest.rating}`
        const thisComment = `${rest.comment}`

        image.className = 'detail-image'
        image.src = `${rest.image}`
        image.setAttribute('id', rest.restaurant)
        if (rest.id == 1) {
          selection = thisResturaunt
          name.textContent = thisName
          resturauntT.textContent = thisResturaunt
          bigImg.src = thisImg
          rating.textContent = thisRating
          comment.textContent = thisComment
        }

        image.addEventListener('click', () => {
          selection = thisResturaunt
          name.textContent = thisName
          resturauntT.textContent = thisResturaunt
          bigImg.src = thisImg
          rating.textContent = thisRating
          comment.textContent = thisComment
        })

        ramenMen.append(image)
      }
    })

    const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInp = document.querySelector('form input#new-name');
    const nameRest = document.querySelector('form input#new-restaurant');
    const nameImg = document.querySelector('form input#new-image');
    const nameRat = document.querySelector('form input#new-rating');
    const nameCom = document.querySelector('form textarea#new-comment');

    const newImg = document.createElement('img')
    newImg.src = `${nameImg.value}`
    newImg.setAttribute('id', nameRest.value)
    newImg.addEventListener('click', () => {
      selection = nameRest.value
      name.textContent = nameInp.value
      resturauntT.textContent = nameRest.value
      bigImg.src = nameImg.value
      rating.textContent = nameRat.value
      comment.textContent = nameCom.value
    })

    ramenMen.append(newImg)
  });

  const delSel = document.querySelector('form h4#delete-button')
  delSel.addEventListener('click', () => {
    const selRest = document.querySelector(`img#${selection}`)
    selRest.parentNode.removeChild(selRest)
  })
}

document.addEventListener('DOMContentLoaded', init);