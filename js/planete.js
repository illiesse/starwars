var dowload=document.getElementById("dowload");
dowload.addEventListener("click",function (){load()});

function load() {
	fetch('http://swapi.co/api/planets/')
		.then(
			function (response){
				return response.json()
			}
		)
		.then(
			data=>{
				// console.log(data)
				var name = document.getElementById("name");
				for (let i = 0; i < 10; i++) {

					var name_p = document.createElement("p");
					name.appendChild(name_p);
					name_p.innerHTML+= (i+1)+"/ "+data.results[i].name

					var detail = document.getElementById("voir_details")
					var detail_p = document.createElement("p")
					detail.appendChild(detail_p)
					detail_p.innerHTML ="voir detail";
					detail_p.addEventListener("click", function (){explain(data.results[i].url)});
				}
					var next = document.getElementById("next");
					next.style.display = "inherit";
					var before = document.getElementById("before");
					before.style.display = "inherit";
			}
		)
}

function explain(x) {
	// console.log(x)
	fetch(x)
	.then(
		function (response){
			return response.json()
		}
	)
	.then(
		data=>{
		// console.log(data)
		var detail = document.getElementById("details");
		detail.innerHTML=""
		var detail_div =document.createElement("div");
		detail.appendChild(detail_div)
		detail.innerHTML= "Nom : "+data.name+"<br> Diamètre : "+data.diameter+"<br> Population : "+data.population+"<br>"
		name_residents(data.residents) 
		}
	)
}

function name_residents(x) {
	// console.log(x[0])
	for ( i = 0; i <x.length; i++) {
		fetch(x[i])
		.then(
			function (response){
				return response.json()
			}
		)
		.then(
			data=>{
				nam = document.createElement("p")
				nam.innerHTML = "Résidents : "+data.name
				var detail = document.getElementById("details");
				detail.appendChild(nam)

				y = data.name
				console.log(y)
		})
	}

	// data=>{
	// 	console.log(data[O])
		// for (let i = 0; i <data.lenght; i++) {
		// 	// data.name[i]
		// console.log(data[i])
		// }
	// }
}

var next=document.getElementById("next");
next.addEventListener("click",function (){affichage_suivant()});

var page=1;

function affichage_suivant(){
	page++;
	fetch("https://swapi.co/api/planets/?page="+page+"")
	.then(
		response => response.json()
	)
	.then(
		data=>{
			var name = document.getElementById("name");
			name.innerHTML="";
			var details = document.getElementById("details");
			details.innerHTML="";
			var voir_details = document.getElementById("voir_details");
			voir_details.innerHTML="";
			for (let i = 0; i < 10; i++) {
				var name_p = document.createElement("p");
				name.appendChild(name_p);
				name_p.innerHTML+= (i+1)+"/ "+data.results[i].name

				var detail = document.getElementById("voir_details")
				var detail_p = document.createElement("p")
				detail.appendChild(detail_p)
				detail_p.innerHTML ="voir detail";
				detail_p.addEventListener("click", function (){explain(data.results[i].url)});
			}
		}
	)
}

var before=document.getElementById("before");
before.addEventListener("click",function (){affichage_precedent()});
var page=1;
function affichage_precedent(){
	page--;
	if (page==0){
		page=1;
	}
	else{
		fetch("https://swapi.co/api/planets/?page="+page+"")
		.then(
			response => response.json()
		)
		.then(
			data=>{
				var name = document.getElementById("name");
				name.innerHTML="";
				var details = document.getElementById("details");
				details.innerHTML="";
				var voir_details = document.getElementById("voir_details");
				voir_details.innerHTML="";
				for (let i = 0; i < 10; i++) {
					var name_p = document.createElement("p");
					name.appendChild(name_p);
					name_p.innerHTML+= (i+1)+"/ "+data.results[i].name

					var detail = document.getElementById("voir_details")
					var detail_p = document.createElement("p")
					detail.appendChild(detail_p)
					detail_p.innerHTML ="voir detail";
					detail_p.addEventListener("click", function (){explain(data.results[i].url)});
				}
			}
		)
	}
}