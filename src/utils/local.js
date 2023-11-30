let array_notes = [
    { id: 1, title: 'joging', body: 'Sore joging sama kawan', createdAt: '11/15/2023' },
    { id: 2, title: 'berenang', body: 'Minggu berenang sore sore', createdAt: '11/15/2023' },
    { id: 3, title: 'Naik Gunung', body: 'Hari kamis ke gunung burni telong sama kawan', createdAt: '11/15/2023' },
];

function addNote(new_note) {
    array_notes = [...array_notes, new_note];
  }
  
  function getNotes() {
    return array_notes;
  }
  
function deleteNote(deleted_id) {
    array_notes = array_notes.filter((note) => note.id !== deleted_id);
  }
  

  export { addNote, getNotes, deleteNote };