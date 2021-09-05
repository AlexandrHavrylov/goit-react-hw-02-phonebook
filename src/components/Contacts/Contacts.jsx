import React from "react";

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => onDeleteContact(id)} type="button">
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
