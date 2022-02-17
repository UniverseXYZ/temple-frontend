import React, { FC, useState } from 'react';
import { Heading } from '@chakra-ui/react';

import {
  closestCenter,
  defaultDropAnimation,
  DragOverlay,
  DndContext,
  KeyboardSensor,
  KeyboardCoordinateGetter,
  Modifiers,
  MouseSensor,
  MeasuringConfiguration,
  MeasuringStrategy,
  PointerActivationConstraint,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core';

import {
  arrayMove as reorderItems,
  useSortable,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  NewIndexGetter,
  AnimateLayoutChanges,
  defaultAnimateLayoutChanges,
} from '@dnd-kit/sortable';

import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers';

import { Item, ISettingsItem } from '../../components';

import { useItems } from './useItems';

export const Content = (props: any) => {
  //
  const { onSectionVisibleChange, onSectionSortableChange } = props;

  const [sortedItems] = useItems();
  const [items, setItems] = useState(sortedItems);
  const [activeId, setActiveId] = useState<string | null>(null);

  console.log(sortedItems);

  // const sensors = useSensors(
  //   useSensor(MouseSensor, {
  //     activationConstraint,
  //   }),
  //   useSensor(TouchSensor, {
  //     activationConstraint,
  //   }),
  //   useSensor(KeyboardSensor, {
  //     coordinateGetter,
  //   })
  // );

  const getIndex = (id: string) => items.findIndex((item) => item.id === id);
  const activeIndex = activeId ? getIndex(activeId) : -1;

  const onDragStart = ({ active }: DragStartEvent) => {
    if (!active) {
      return;
    }

    setActiveId(active.id);
  };

  const onDragEnd = ({ over }: DragEndEvent) => {
    setActiveId(null);

    if (over) {
      const overIndex = getIndex(over.id);
      if (activeIndex !== overIndex) {
        setItems((items) => reorderItems(items, activeIndex, overIndex));
        onSectionSortableChange(activeIndex, overIndex);
      }
    }
  };

  const animateLayoutChanges: AnimateLayoutChanges = (args) =>
    args.isSorting || args.wasDragging
      ? defaultAnimateLayoutChanges(args)
      : true;

  return (
    <>
      <Heading as="h6" variant="h6" mb="20px">
        Custimize widgets
      </Heading>

      <DndContext
        //sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={(event) => onDragStart(event)}
        onDragEnd={(event) => onDragEnd(event)}
        onDragCancel={() => setActiveId(null)}
        measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div>
            {items.map((item) => (
              <SortableItem
                key={item.id}
                id={item.id}
                item={item}
                animateLayoutChanges={animateLayoutChanges}
                onChange={onSectionVisibleChange}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </>
  );
};

interface SortableItemProps {
  animateLayoutChanges?: AnimateLayoutChanges;
  id: string;
  item: ISettingsItem;
  onChange(id: string, visible: boolean): void;
}

export const SortableItem: FC<SortableItemProps> = (props) => {
  const { animateLayoutChanges, id, item, onChange } = props;

  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
    animateLayoutChanges,
  });

  return (
    <Item
      ref={setNodeRef}
      item={item}
      dragging={isDragging}
      sorting={isSorting}
      transform={transform}
      transition={transition}
      listeners={listeners}
      onChange={onChange}
      {...attributes}
    />
  );
};
