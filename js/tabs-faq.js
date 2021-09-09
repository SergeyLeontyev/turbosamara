let items = document.querySelectorAll('.faq-box .faq-list')
let activeItemIndex = -1
Array.prototype.forEach.call(items, function(item, index) {
  const currentLink = item.querySelector('.faq-article')
  const currentAnswer = item.querySelector('.faq-answer')
  currentLink.addEventListener('click', function(){
    if (activeItemIndex !== -1 && activeItemIndex !== index) {
      items[activeItemIndex].querySelector('.faq-article').classList.remove('faq-article-active')
      items[activeItemIndex].querySelector('.faq-answer').classList.remove('faq-answer-active')
    }
    if (activeItemIndex !== index) {
      currentLink.classList.add('faq-article-active')
      currentAnswer.classList.add('faq-answer-active')
      activeItemIndex = index
    }
    else {
      currentLink.classList.remove('faq-article-active')
      currentAnswer.classList.remove('faq-answer-active')
      activeItemIndex = -1
    }
  })
})