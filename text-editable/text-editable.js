/*
*   TEXT-EDIT
*
*put content in edit tag that you want to be editable
*if the element with the edit-container class is clicked, text with the edit tag is converted to input
*this only works when the edit-container class is in some parent element of an edit tag
*for a narrow focus, it may be helpful to span the edit tag and give the span the edit-container class
*/



//create list of all edit containers
var classEditText = document.querySelectorAll('.edit-container');

//for each edit container, add an event listener if the <edit> tag is found
for (var i = 0; i < classEditText.length; i++) {
    (function(i) {
        classEditText[i].addEventListener('click', function () {
        
            if(this.getElementsByTagName('edit')[0]) {
                var editElement = this.getElementsByTagName('edit')[0]
                    ,text = this.getElementsByTagName('edit')[0].textContent
                    ,inputElement = '<input class="edit-text-input" tabindex="0" type="text" value="' + text + '">';

                //replace the edit tag with inputElement
                editElement.outerHTML = inputElement;

                //focus and select new input
                document.getElementsByClassName('edit-text-input')[0].focus();
                document.getElementsByClassName('edit-text-input')[0].select();

                inputToText();
            }
        });
    })(i)
}

//when the input is unfocused, return input to edit tag with the new text value
function inputToText() {
    var classEditTextInput = document.getElementsByClassName('edit-text-input')[0];

    classEditTextInput.addEventListener('focusout', function() {
        classEditTextInput.outerHTML = '<edit>' + classEditTextInput.value; + '</edit>';
    });

}
