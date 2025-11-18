import MenuContent from "../../components/menuContent/MenuContent";

function menu() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '100vw',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      <MenuContent />
    </div>
  );
}

export default menu;
