import React, { useState } from 'react';

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

import { Item } from './components';

import styles from './components/Item/Item.module.scss';

import { useSettings } from '@/hooks';

export interface Props {
  activationConstraint?: PointerActivationConstraint;
  coordinateGetter?: KeyboardCoordinateGetter;
  getNewIndex?: NewIndexGetter;
  handle?: boolean;
  removable?: boolean;
  style?: React.CSSProperties;
  useDragOverlay?: boolean;
  collections: any;
}

export const CollectionList = ({
  activationConstraint,
  coordinateGetter = sortableKeyboardCoordinates,
  handle = false,
  removable = true,
  useDragOverlay = false,
  collections
}: Props) => {
  const [items, setItems] = useState(collections.collections);
  const [activeId, setActiveId] = useState<string | null>(null);
  const { watchlist } = useSettings();

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint,
    }),
    useSensor(TouchSensor, {
      activationConstraint,
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter,
    })
  );

  const getIndex = (id: string) => items.findIndex((item: any) => item.id === id);
  const activeIndex = activeId ? getIndex(activeId) : -1;

  const handleRemove = removable
    ? (id: string): void =>
        watchlist.splice(watchlist.indexOf(id), 1) &&
        setItems((items) => items.filter((item: any) => item.id !== id))
    : undefined;

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
        setItems((items: any) => reorderItems(items, activeIndex, overIndex));
      }
    }
  };

  const animateLayoutChanges: AnimateLayoutChanges = (args) =>
    args.isSorting || args.wasDragging
      ? defaultAnimateLayoutChanges(args)
      : true;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={(event) => onDragStart(event)}
      onDragEnd={(event) => onDragEnd(event)}
      onDragCancel={() => setActiveId(null)}
      measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div>
          {items.map((item: any) => (
            <SortableItem
              key={item.id}
              id={item.id}
              item={item}
              handle={handle}
              onRemove={handleRemove}
              animateLayoutChanges={animateLayoutChanges}
              useDragOverlay={useDragOverlay}
            />
          ))}
        </div>
      </SortableContext>

      {useDragOverlay ? (
        <DragOverlay
          adjustScale={false}
          dropAnimation={{ ...defaultDropAnimation, dragSourceOpacity: 0 }}
        >
          {activeId ? (
            <Item
              key={items[activeIndex].id}
              id={items[activeIndex].id}
              item={items[activeIndex]}
              handle={handle}
              onRemove={handleRemove}
              className={styles.DragOverlay}
            />
          ) : null}
        </DragOverlay>
      ) : null}
    </DndContext>
  );
};

interface SortableItemProps {
  animateLayoutChanges?: AnimateLayoutChanges;
  id: string;
  handle: boolean;
  onRemove?(id: string): void;
  item: any;
  useDragOverlay?: boolean;
}

export function SortableItem({
  animateLayoutChanges,
  handle,
  id,
  item,
  onRemove,
  useDragOverlay,
}: SortableItemProps) {
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
      handle={handle}
      onRemove={onRemove ? () => onRemove(id) : undefined}
      transform={transform}
      transition={transition}
      listeners={listeners}
      dragOverlay={useDragOverlay}
      {...attributes}
    />
  );
}
