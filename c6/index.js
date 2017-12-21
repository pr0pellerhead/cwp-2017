var btn = document.querySelector('.get-data-btn');

btn.addEventListener('click', function(){
	// console.log(this);


	fetch('https://jsonplaceholder.typicode.com/posts')

	.then(function(response){
		return response.json(); // JavaScript Object Notation JSON
	})

	.then(function(data){
		// console.log(data);

		data.forEach(function(v){
			var div = document.createElement('div');
			var h3 = document.createElement('h3');
			var p = document.createElement('p');
			var span = document.createElement('span');

			h3.innerText = v.title;
			p.innerText = v.body;
			span.innerText = 'userId: ' + v.userId + ', id: ' + v.id;

			div.appendChild(h3);
			div.appendChild(p);
			div.appendChild(span);

			document.querySelector('body').appendChild(div);
		});


	});


});