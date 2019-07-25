import React from 'react';

const selfStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '768px',
  margin: '50px auto',
  height: 'calc(100vh - 100px)',
};

const leftColumnStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '300px',
  backgroundColor: '#eeeeee',
  borderRadius: '5px',
  padding: '14px',
};

const rightColumnStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '300px',
  backgroundColor: '#cccccc',
  borderRadius: '5px',
  padding: '14px',
  overflow: 'auto',
};

const draggableItemStyles = {
  border: '1px solid #cccccc',
  borderRadius: '3px',
  padding: '5px',
  textAlign: 'center',
  width: '180px',
  cursor: 'pointer'
} 

const draggedItemStyles = {
  border: '1px solid #eeeeee',
  borderRadius: '3px',
  padding: '5px',
  width: '180px',
  marginBottom: '10px',
  outline: 'none',
} 

const App = () => {
  const handleOnDrop = e => {
    e.preventDefault();
    const container = e.target.id === 'draggsContainer' ? e.target : e.target.parentNode;
    const count = container.childElementCount;
    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('id', `draggedItem_${count + 1}`);
    input.setAttribute('placeholder', 'You dragged me');
    Object.assign(input.style, draggedItemStyles)
    container.appendChild(input);
  }

  const handleDragOver = e => e.preventDefault();

  return (
    <div style={selfStyles}>
      <div style={leftColumnStyles}>
        <div id="draggableItem" style={draggableItemStyles} draggable>I'm draggable item</div>
      </div>
      <div id="draggsContainer" style={rightColumnStyles} onDrop={handleOnDrop} onDragOver={handleDragOver}></div>
    </div>
  );
}

export default App;
