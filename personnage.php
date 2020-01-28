<?php

include ('header.php');
?>

<section id="personnage">
	<div id="characters">
		<button id="dowload">Charger 10 personnages</button>
		<div id="choice">
			<button id="before">10 précédents</button>
			<button id="next">10 suivants</button>
		</div>

		<div id="stars">
			<div id="name"></div>
			<div id="details"></div>
		</div>
	</div>
</section>

<?php
$s_path  = "personnage.js";
include ('footer.php');
