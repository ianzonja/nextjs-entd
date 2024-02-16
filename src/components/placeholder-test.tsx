import { useRef, useState } from "react";

//sakriti another-class divove -> predstavljaju placeholdere. dodati u donji desni kut novi div koji kada se dragga, i priblizi unutar 200px bilo kojem placeholderu, placeholder se treba pojaviti
export default function PlaceholderTest() {
  const [closePlaceholderIndexes, setClosePlaceholderIndexes] = useState<any[]>([]);
  const handleDragStart = (event: any) => {
    console.log('Dragging started...');
    event.dataTransfer.setData("text/plain", "dummy"); // Necessary for Firefox to enable dragging
  };

  const handleDragEnd = () => {
    console.log('Dragging ended...');
    setClosePlaceholderIndexes([])
  };

  const handleDragOver = (event: any, index: number) => {
    event.preventDefault();
  };

  const handleDrop = (event: any, index: any) => {
    event.preventDefault();
    alert(`Dropped to ${index + 1} placeholder`);
  };

  const handleDrag = (event: any) => {
    const mousePositionX = event.clientX;
    const mousePositionY = event.clientY;
    const draggableRect = event.currentTarget.getBoundingClientRect();
    const placeholders = Array.from(document.getElementsByClassName('placeholder') as HTMLCollectionOf<HTMLDivElement>);

    let indexes = []
    for (let i = 0; i<placeholders.length; i++) {
      const placeholderRect = placeholders[i].getBoundingClientRect();
      console.log(mousePositionY)
      const distanceY = Math.abs(mousePositionY - placeholderRect.y);
      const distanceX = Math.abs(mousePositionX - placeholderRect.x);
      
      if (distanceY < 200 && distanceX < 200) {
        indexes.push(i)
      }
    }
    setClosePlaceholderIndexes([...indexes])
  };

  return (
    <div>
      {[...Array(2)].map((_, index) => (
        <div>
          <div className="component">
          </div>
          <div
            key={index}
            className="placeholder"
            onDragOver={(event) => handleDragOver(event, index)}
            onDrop={(event) => handleDrop(event, index)}
            style={{ visibility: closePlaceholderIndexes.includes(index) ? 'visible' : 'hidden', width: closePlaceholderIndexes.includes(index) ? '150px' : '0px', height: closePlaceholderIndexes.includes(index) ? '50px':'0px'}}
          >
            Target
          </div>
        </div>
      ))}
      <div className="component"></div>
      <div
        className="draggable"
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
      >
        Drag me!
      </div>
    </div>
  );
}