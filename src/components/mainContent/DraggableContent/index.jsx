import { useState, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./index.module.scss";
import tableLogo from "./../../../assets/icons/googleIcon.png";
import dollarIcon from "./../../../assets/icons/dollarIcon.png";

const data = [
  {
    title: "Cost Per conversion",
    subTitle: "Per conversion",
    value: "$32.98",
    id: "1",
  },
  {
    title: "Conversion",
    subTitle: "Page visit",
    value: "8.67",
    id: "2",
  },
  {
    title: "Conversion Rate",
    subTitle: "Conversion rate",
    value: "9.14%",
    id: "3",
  },
  {
    title: "Total Cost",
    subTitle: "Cost",
    value: "$10.04",
    id: "4",
  },
  {
    title: "Cost Per Click",
    subTitle: "Per click",
    value: "$4.23",
    id: "5",
  },
  {
    title: "Clicks Through Rate",
    subTitle: "CTR",
    value: "6.19%",
    id: "6",
  },
  {
    title: "Impression",
    subTitle: "The number of seen",
    value: "2,347",
    id: "7",
  },
  {
    title: "Clicks",
    subTitle: "Clicks on your campaign",
    value: "90",
    id: "8",
  },
];

const DraggableContent = () => {
  const [initialData, setInitialData] = useState({
    row1: data.slice(0, 4),
    row2: data.slice(4, 8),
  });

  const id2List = {
    droppable: "row1",
    droppable2: "row2",
  };

  const reorder = useCallback((list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }, []);

  const move = useCallback(
    (source, destination, droppableSource, droppableDestination) => {
      const sourceClone = Array.from(source);
      const destClone = Array.from(destination);
      const [removed] = sourceClone.splice(droppableSource.index, 1);

      destClone.splice(droppableDestination.index, 0, removed);

      const result = {};
      result[droppableSource.droppableId] = sourceClone;
      result[droppableDestination.droppableId] = destClone;
      return result;
    }
  );

  const getList = (id) => initialData[id2List[id]];

  const handleOnDragEnd = useCallback(
    ({ destination, source }) => {
      if (!destination) {
        return;
      }

      if (
        destination.index === source.index &&
        destination.droppableId === source.droppableId
      ) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        const items = reorder(
          getList(source.droppableId),
          source.index,
          destination.index
        );

        setInitialData((prev) => ({
          ...prev,
          [id2List[source.droppableId]]: [...items],
        }));
      } else {
        const result = move(
          getList(source.droppableId),
          getList(destination.droppableId),
          source,
          destination
        );

        if (result.droppable.length <= 3) {
          if (destination.index !== 4) {
            const [removed] = result.droppable2.splice(4, 1);
            result.droppable.splice(0, 0, removed);
          } else {
            const [removed] = result.droppable2.splice(0, 1);
            result.droppable.splice(4, 1, removed);
          }
        } else if (result.droppable2.length <= 3) {
          if (destination.index !== 4) {
            const [removed] = result.droppable.splice(4, 1);
            result.droppable2.splice(0, 0, removed);
          } else {
            const [removed] = result.droppable.splice(0, 1);
            result.droppable2.splice(4, 1, removed);
          }
        }

        if (result.droppable) {
          setInitialData((prev) => ({
            ...prev,
            row1: result.droppable,
          }));
        }
        if (result.droppable2) {
          setInitialData((prev) => ({
            ...prev,
            row2: result.droppable2,
          }));
        }
      }
    },
    [initialData]
  );

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={styles.mainContainer}
              style={{ overflow: "hidden" }}
            >
              {initialData?.row1.map(
                ({ title, subTitle, value, id }, index) => {
                  return (
                    <Draggable
                      style={(_isDragging, draggableStyle) => ({
                        ...draggableStyle,
                        position: "static",
                      })}
                      key={id}
                      draggableId={id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className={styles.dynamicCubeContainer}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className={styles.titleContainer}>
                            <h3>{title}</h3>
                            <img src={tableLogo} alt="googleIcon" />
                          </div>
                          <div className={styles.valueContainer}>
                            <div>
                              <h1>{value}</h1>
                              <span>{subTitle}</span>
                            </div>
                            <img src={dollarIcon} alt="DollarIcon" />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                }
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="droppable2" direction="horizontal">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={styles.mainContainer}
              style={{ overflow: "hidden" }}
            >
              {initialData?.row2.map(
                ({ title, subTitle, value, id }, index) => {
                  return (
                    <Draggable
                      style={(_isDragging, draggableStyle) => ({
                        ...draggableStyle,
                        position: "static",
                      })}
                      key={id}
                      draggableId={id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className={styles.dynamicCubeContainer}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className={styles.titleContainer}>
                            <h3>{title}</h3>
                            <div className={styles.dollarIcon}></div>
                          </div>
                          <div className={styles.valueContainer}>
                            <div>
                              <h1>{value}</h1>
                              <span>{subTitle}</span>
                            </div>
                            <img src={dollarIcon} alt="DollarIcon" />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                }
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DraggableContent;
