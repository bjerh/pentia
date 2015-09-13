"use strict";

var FormWidget = (function(){
	var me = {};
	
	function getData() {
		Ajax.httpRequest("get", "assets/static/json.json", true, setupElements);
	}
	
	var setupElements = function(dataObject) {
		
		var container = document.getElementById("form"),
			formSections = dataObject.data.formData.sections;
		
		for (let i = 0; i < formSections.length; i++) { 
			var currentSection = formSections[i];
			
			
			var section = document.createElement("section"),
			    headline = document.createElement("h2");
				
			headline.innerText = currentSection.title;

			// Append til section
			section.appendChild(headline);

			for (let u = 0; u < currentSection.elements.length; u++) {
				var currentElement = currentSection.elements[u];
				
				var input = document.createElement("input");
				input.setAttribute("type", currentElement.type);
				
				switch(currentElement.type) {
					case "input":
						input.classList.add("text");
						input.setAttribute("aria-required", currentElement.required);
						input.required = currentElement.required;
						
						// Placeholder
						if (Toolbox.placeholderSupport) {
							input.setAttribute("placeholder",currentElement.placeholder);
						}
						else {
							input.setAttribute("data-placeholder", currentElement.placeholder);
						}
						break;
					case "radio":
						input.classList.add("radio");
						break;
					case "number":
						input.classList.add("number");
						break;
				}
				
				// Append til section
				section.appendChild(input);
			}
			
			
			// Append til container
			container.appendChild(section);
		}	
		
		
		
		setupBindings();
	}

	function setupBindings() {
		//do UI bindings
		console.log("setupBindings!");
	}

	me.init = function() {
		getData();
	}

	return me;
}());