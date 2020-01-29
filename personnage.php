<?php
include ('templates/header.php');
?>

<section id="personnage">
	<div id="characters">
		<button type="button" class="btn btn-light" id="dowload">Charger 10 personnages</button>
		<div id="choice">
			<button type="button" class="btn btn-light" id="before">10 précédents</button>
			<button type="button" class="btn btn-light" id="next">10 suivants</button>
		</div>

		<div id="stars">
			<div id="name"></div>
			<div id="voir_details"></div>
			<div id="details"></div>
		</div>
	</div>
</section>

<?php
$s_path  = "js/personnage.js";
$s_path2  = "js/starwars.js";
include ('templates/footer.php');
