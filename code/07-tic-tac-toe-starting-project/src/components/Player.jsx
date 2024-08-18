import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  console.log(`render : isEditing = ${isEditing}`);

  function handleEditClick() {
    console.log(
      `handleEditClick before setIsEditing : idEditing = ${isEditing}`
    );

    setIsEditing((editing) => !editing);

    console.log(
      `handleEditClick after setIsEditing : idEditing = ${isEditing}`
    );

    if (isEditing) {
      /*
       1. 第一次啟動的 render 
            render : isEditing = false
       2. 點擊 button Edit
            handleEditClick before setIsEditing : idEditing = false
            handleEditClick after setIsEditing : idEditing = false
       3. 因為 setIsEditing 所以 rerender
            render : isEditing = true 
            且 button 字顯示成 Save
       4. 點擊 button Save
            handleEditClick before setIsEditing : idEditing = true
            handleEditClick after setIsEditing : idEditing = true
       5. 因為 idEditing = true 所以進入 if block
            handleEditClick if block : idEditing = true
            onChangeName
       6. 因為 setIsEditing 所以 rerender
            render : isEditing = false
            且 button 字顯示成 Edit

      */

      console.log(`handleEditClick if block : idEditing = ${isEditing}`);

      onChangeName(symbol, playerName);
    }
  }

  // two-way binding
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
