let first=document.getElementById("first")
first.insertAdjacentHTML('beforebegin','<div class="test">beforebegin</div>')//outside element before the element at top
first.insertAdjacentHTML('afterbegin','<div class="test">AfterBegin</div>')//inside element at top
first.insertAdjacentHTML('beforeend','<div class="test">beforeend</div>')//inside element at bottom
first.insertAdjacentHTML('afterend','<div class="test">afterend</div>')//outside element after the element at bottom
first.remove()//removes the element with id first