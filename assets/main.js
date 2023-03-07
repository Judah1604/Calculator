let body = document.body
let result = document.querySelector('.screen')
let keys = document.getElementsByClassName('key')
let equalsKey = document.querySelector('.equalsKey')
let deleteKey = document.querySelector('.deleteKey')
let resetKey = document.querySelector('.resetKey')
let toggleBtn = document.querySelector('.toggleBtn .button')
let mode = 'dark'

for (let key of keys) {
	key.addEventListener('click', function () {
		let keyValue = key.textContent
		let newTextNode = document.createTextNode(keyValue)
		result.appendChild(newTextNode)
	})
}

equalsKey.addEventListener('click', function () {
	let statement = result.innerHTML
	let solution = eval(statement)
	result.innerHTML = solution
})

deleteKey.addEventListener('click', function () {
	result.textContent = result.textContent.slice(0, result.textContent.length - 1)
})

resetKey.addEventListener('click', function () {
	result.textContent = ''
})

toggleBtn.addEventListener('click', function () {
	if (mode == 'dark') {
		mode = 'light'
	} else if (mode == 'light') {
		mode = 'purple'
	} else if (mode == 'purple') {
		mode = 'dark'
	}
	
	if (mode == 'dark') {
		toggleBtn.style.transform = 'translateX(0)'
		body.classList.remove('purple')
		body.classList.remove('light')
	}
	if (mode == 'light') {
		toggleBtn.style.transform = 'translateX(22px)'
		body.classList.remove('purple')
		body.classList.add('light')
	}
	if (mode == 'purple') {
		toggleBtn.style.transform = 'translateX(45px)'
		body.classList.add('purple')
		body.classList.remove('light')
	}
})
