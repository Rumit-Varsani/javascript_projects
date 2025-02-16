document.addEventListener('DOMContentLoaded', () => {
    const noteText = document.getElementById('note-text');
    const noteColor = document.getElementById('note-color');
    const addNoteBtn = document.getElementById('add-note');
    const notesContainer = document.getElementById('notes-container');

    addNoteBtn.addEventListener('click', addNote);

    function addNote() {
        if (noteText.value.trim() === '') return;

        const note = document.createElement('div');
        note.className = 'note';
        note.style.backgroundColor = noteColor.value;

        const noteContent = document.createElement('p');
        noteContent.textContent = noteText.value;
        note.appendChild(noteContent);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'delete-note';
        deleteBtn.addEventListener('click', () => {
            notesContainer.removeChild(note);
        });
        note.appendChild(deleteBtn);

        notesContainer.appendChild(note);

        noteText.value = '';
    }
});
