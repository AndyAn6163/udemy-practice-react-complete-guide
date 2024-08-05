export default function Section({ title, children, ...props }) {
  /*
  props 不會自動 forward 到 section 裡
  例如在外面設了 id prop，如果沒有讓 section 接受 id attribute
  不會有 CSS 變化
  必須要 Section({title, children, id}) 然後 <section id={id}>
  
  解決方式 : 使用 rest property (group all remaining object properties into a new object) : ...props (named props in this case) 
  and then use spread operator to spread into section element {...props}
  */

  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
