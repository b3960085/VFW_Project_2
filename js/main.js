// Jesse Read
// 1309 - VFW
// VFW Project 2
// 2013-09-11

/* Wait until the DOM is ready */
window.addEventListener("DOMContentLoaded", function(){

	// Retrieve element
	function el(x) {
		var element = document.getElementById(x);
		return element;
	}
	
	function getReleaseArtistValue() {
		var options = document.forms[0].releaseArtists;
		for (var i = 0; i < options.length; i++) {
			if (options[i].checked) {
				return options[i].value;
			}
		}
	}
	
	function isFavorite() {
		if (el('favorite').checked) {
			return "Yes";
		} else {
			return "No";
		}
	}
	
	function addEntity(){
		var key = Math.floor(Math.random()*20131104);
		var entity = {};
			entity.artistName = ["Album Artist: ", el('artistName').value];
			entity.albumName = ["Album Name: ", el('albumName').value];
			entity.releaseDate = ["Release Date: ", el('releaseDate').value];
			entity.releaseType = ["Release Type: ", el('releaseType').value];
			entity.releaseArtist = ["Release Artists: ", getReleaseArtistValue()];
			entity.songCount = ["Number of songs: ", el('songCount').value];
			entity.opinion = ["Opinion: ", el('opinion').value];
			entity.favorite = ["Favorite: ", isFavorite()];
		localStorage.setItem(key, JSON.stringify(entity))
	}

	function retrieveEntities() {
		var listingDiv = document.createElement('div');
		listingDiv.setAttribute("id", "entities");
		var entityList = document.createElement('ul');
		entityList.setAttribute("class", "entityList");
		listingDiv.appendChild(entityList);
		el('frame').appendChild(listingDiv);
		for (i = 0; i < localStorage.length; i++) {
			var entityLi = document.createElement('li');
			entityLi.setAttribute("class", "entityList");
			entityLi.setAttribute("id", "listEntry");
			entityList.appendChild(entityLi);
			var entity = JSON.parse(localStorage.getItem(localStorage.key(i)));
			var entityDetails = document.createElement('ul');
			entityDetails.setAttribute("class", "entityList");
			entityLi.appendChild(entityDetails);
			for (var property in entity) {
				var detailLi = document.createElement('li');
				detailLi.setAttribute("class", "entityList");
				detailLi.innerHTML = entity[property][0] + entity[property][1];
				entityDetails.appendChild(detailLi);
			}
		}
	}
	
	// Click events
	var displayLink = el('displayLink');
	displayLink.addEventListener("click", retrieveEntities);
	var clearLink = el('clearData');
/* 	clearLink.addEventListener("Click", clearLocalData); */
	var saveLink = el('submit');
	saveLink.addEventListener("click", addEntity);
	
});