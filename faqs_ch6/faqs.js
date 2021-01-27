"use strict";

// the event handler for the click event of each h2 element
const toggle = evt => {
	const linkElement = evt.currentTarget;
    const h2Element = linkElement.parentNode;                 // get the clicked h2 element
    const divElement = h2Element.nextElementSibling;     // get h2's sibling div

    //h2Element.classList.toggle("minus");
	if (h2Element.hasAttribute("class")) {
		h2Element.removeAttribute("class");
	} else {
		h2Element.className="minus";
	}
	
    //divElement.classList.toggle("open");
	if (divElement.hasAttribute("class")) {
		divElement.removeAttribute("class");
	} else {
		divElement.className="open"
	}

    evt.preventDefault();   // cancel default action of <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
    // get the h2 tags
    const linkElements = faqs.querySelectorAll("#faqs a");
    
    // attach event handler for each a tag(used to be for h2)	    
    for (let linkElement of linkElements) {
        linkElement.addEventListener("click", toggle);
    }
    // set focus on 1st <a> tag
    linkElements[0].focus();       
});