function showmenu(){
	document.getElementById("overlay").style.display = "block";
	document.getElementById("menu").style.display = "block";
}

function coursepopup(need, course, description, prereq_complete){
	popup_s = '<a href="javascript:alert(\'This feature is not implemented.\')"><span class="nopad pt18"><img class="largeicon bottom" src="./Resources/Images/';
	if (need){
		popup_s += 'x.png" /><span class="nomargin midbox bold pt16 red">';
	} else {
		popup_s += 'check.png" /><span class="nomargin midbox bold pt16>';
	}
	popup_s += course;
	if (need){
		popup_s += '</span><img class="largeicon bottom" src="./Resources/Images/plus.png" /></a>';
	} else {
		popup_s += '</span><img class="largeicon bottom" src="./Resources/Images/no_plus.png" /></a>';
	}
	popup_s += '<p class="pt14">' + description + '</p><span class="pt11" style="position: absolute; bottom: .07in; left: .07in">Prereq: ';
	if (prereq_complete){
		popup_s += 'Completed</span>';
	} else {
		popup_s += 'Not Complete</span>';
	}
	popup_s += '<a class="vbold pt9" style="position: absolute; top: .02in; right: .06in" onclick="closepopup()">X</a>'
	document.getElementById("popup").innerHTML = popup_s;
	document.getElementById("overlay").style.display = "block";
	document.getElementById("popup").style.display = "block";
}

function closepopup(){
	document.getElementById("overlay").style.display = "none";
	document.getElementById("popup").style.display = "none";
	document.getElementById("menu").style.display = "none";
}