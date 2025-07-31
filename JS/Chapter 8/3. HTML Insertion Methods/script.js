let a=document.getElementsByTagName('div')[0]
// a.innerHTML=a.innerHTML+'<h1>Hello World</h1>'



let div=document.createElement('div');
div.innerHTML='<h1>Hello World!</h1>';
// a.appendChild(div)
// a.prepend(div) //becomes container's first child
// a.before(div)//this got outside the div container before container starts
// a.after(div)////this got outside the div container after the container
a.replaceWith(div)