function skillsMember(){
	// 1. Get the skill list
	var skillList = document.getElementById("skill-list");
	// 2. Get the skill input
	var skillInput = document.getElementById("skill-input");
	// 3. Get the skill button
	var skillButton = document.getElementById("skill-button");

	// 4. Add a new skill
	skillButton.addEventListener("click", addSkill);

	// 5. Remove a skill
	skillList.addEventListener("click", removeSkill);

	// 6. Clear all skills
	document.getElementById("clear-skills").addEventListener("click", clearSkills);

	// 7. Add a new skill
	function addSkill(){
		// 1. Get the skill input value
		var newSkill = skillInput.value;
		// 2. Create a new li element
		var newSkillElement = document.createElement("li");
		// 3. Create a new span element
		var newSkillElementSpan = document.createElement("span");
		// 4. Add the text to the span
		newSkillElementSpan.appendChild(document.createTextNode(newSkill));
		// 5. Add the span to the li
		newSkillElement.appendChild(newSkillElementSpan);
		// 6. Add the li to the ul
		skillList.appendChild(newSkillElement);
		// 7. Clear the input
		skillInput.value = "";
	}

	// 8. Remove a skill
	function removeSkill(e){
		// 1. Check if the target has the class "remove-skill"
		if(e.target.classList.contains("remove-skill")){
			// 2. Get the parent li
			var li = e.target.parentElement;
			// 3. Remove the li
			skillList.removeChild(li);
		}
	}

	// 9. Clear all skills
	function clearSkills(){
		// 1. Remove all the li
		skillList.innerHTML = "";
	}
}