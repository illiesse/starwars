<?php

include ('header.php');
?>

<section id="recherche">		
	<button type="button" class="btn btn-light button_search">Chercher</button>
	<div id="formulaire">
		<table class="table-dark table-striped">
			<thead>
			    <tr>
			    	<th scope="col">Personnage</th>
			    </tr>
			</thead>
			<tbody id="character_list">
			</tbody>
		</table>
		<table class="table-dark table-striped">
			<thead>
			    <tr>
			    	<th scope="col">Planète</th>
			    </tr>
			</thead>
			<tbody id="planet_list">
			</tbody>
		</table>
	<div>
	<div class="modal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
		    <div class="modal-content">
		    	<div class="modal-header">
		        	<h5 class="modal-title">Recherche</h5>
		        	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          	<span aria-hidden="true">&times;</span>
		        	</button>
		      	</div>
		      	<div class="modal-body">
		        	<form id="formu">
		        		<div>
		        			Votre requête:<br>
								<input type="text" name="request" id="request">
							</div>
		        	</form>
		      	</div>
		      	<div class="modal-footer">
		        	<button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
		        	<button type="button" class="btn btn-primary" id="people_search">Sur les personnages</button>
		        	<button type="button" class="btn btn-primary" id="planet_search">Sur les planètes</button>
		      	</div>
		    </div>
		</div>
	</div>
</section>

<?php
$s_path  = "recherche.js";
include ('footer.php');