import React, { useState } from "react";
import styles from "./Notes.module.css";
import notesData from "../../../data/notes";

const Notes = () => {
  const [search, setSearch] = useState("");

  const filteredNotes = notesData.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.keyPoints.some((point) =>
        point.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className={styles.notesPage}>
      <h1 className={styles.title}>Notes</h1>
      <p className={styles.subtitle}>
        Concise study notes covering core concepts for quick review and
        revision.
      </p>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search notes"
      />
      <div className={styles.notesGrid}>
        {filteredNotes.length === 0 ? (
          <div className={styles.noResults}>No notes found.</div>
        ) : (
          filteredNotes.map((note) => (
            <div key={note.id} className={styles.noteCard}>
              <h2 className={styles.noteTitle}>{note.title}</h2>
              <ul className={styles.keyPoints}>
                {note.keyPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
