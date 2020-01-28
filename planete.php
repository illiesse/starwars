<?php

include ('header.php');
?>

<section id="planete">
	<div id="planets">
		<button id="dowload">Charger 10 planètes</button>
		<div id="choice">
			<button id="before">10 précédents</button>
			<button id="next">10 suivants</button>
		</div>

		<div id="planet">
			<div id="name"></div>
			<div id="details"></div>
		</div>
	</div>
</section>

<?php
$s_path  = "planete.js";
include ('footer.php');