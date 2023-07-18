
var notes = [];

function addNote() {
  var noteInput = document.getElementById("note-input");
  var noteText = noteInput.value.trim();

  if (noteText !== "") {
    var note = {
      text: noteText,
      timestamp: new Date().getTime()
    };

    notes.push(note);
    noteInput.value = "";

    displayNotes();
  }
}


function displayNotes() {
  var noteList = document.getElementById("note-list");
  noteList.innerHTML = "";

  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];

    var noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.innerHTML = note.text;

    noteList.appendChild(noteElement);
  }
}


window.onload = function() {
  displayNotes();
  
  var addButton = document.getElementById("add-button");
  addButton.addEventListener("click", addNote);
};
