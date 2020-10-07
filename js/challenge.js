const counter = document.getElementById("counter")

let intervalId = setInterval(addSecond, 1000)

function addSecond(){
  let second = parseInt(counter.textContent) + 1
  counter.textContent = second
}

const plusBtn = document.getElementById('plus')
plusBtn.addEventListener("click", addSecond)


function subtractSecond(){
  let second = parseInt(counter.textContent) - 1
  counter.textContent = second
}

const minusBtn = document.getElementById('minus')
minusBtn.addEventListener("click", subtractSecond)

const likeBtn = document.getElementById('heart')

likeBtn.addEventListener("click", function(e){
  const likesUl = document.querySelector('.likes')
  const existing = likesUl.querySelectorAll(`li[data-counter *= "${counter.textContent}"]`)[0]
  if (existing) {
    existing.textContent = counter.textContent + `; likes: ${existing.likes++}`
    
  } else {
    const likeLi = document.createElement('li')
    likeLi.likes = 1
    likeLi.textContent = counter.textContent + `; likes: ${likeLi.likes}`
    likeLi.dataset.counter = counter.textContent
    likesUl.append(likeLi)
  
  }
})

const pauseBtn = document.getElementById('pause')
pauseBtn.addEventListener("click", function(e) {
  if (pauseBtn.textContent == 'pause') {
    clearInterval(intervalId)
    minusBtn.disabled = true
    plusBtn.disabled = true
    likeBtn.disabled = true
    pauseBtn.textContent = 'resume'
  } else {
    setInterval(addSecond, 1000)
    intervalId++
    minusBtn.disabled = false
    plusBtn.disabled = false
    likeBtn.disabled = false
    pauseBtn.textContent = 'pause'
  }
})

const commentForm = document.querySelector('#comment-form')

commentForm.addEventListener("submit", function(e){
  e.preventDefault()
  const commentInput = commentForm.comment.value

  const listDiv = document.querySelector('#list')
  const comment = document.createElement('p')

  comment.textContent = commentInput
  commentForm.reset()
  listDiv.append(comment)
})




