// object destructuring
export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TABBUTTON COMPONENT EXECUTING");

  /*
   不能寫 handleClick()，因為這個要交給 react 自己執行 
   prop className 是 JSX 特有
  */
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
