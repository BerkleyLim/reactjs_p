# Drag and Drop

- useDrag() 함수 목록

- useDrop() 함수 목록
API 정의
```
export declare function useDrop<DragObject = unknown, DropResult = unknown, CollectedProps = unknown>(specArg: FactoryOrInstance<DropTargetHookSpec<DragObject, DropResult, CollectedProps>>, deps?: unknown[]): [CollectedProps, ConnectDropTarget];

```
사용자가 쓸 함수 정의
```
const [collectedProps, connectedDropTarget]
    = useDrop (SpecArg, deps)
```
실제 구현시 보통 쓰는 방법
```
const [, connectedDopTarget] = useDrop(specArg,)
```

specArg 값 
```
  FactoryOrInstance<DropTargetHookSpec<DragObject, DropResult, CollectedProps>>
```

FactoryOrInstance 내용 (주로 직접 사용자 정의해서 사용)
```
    type: SourceType;
    item?: DragObject | DragObjectFactory<DragObject>;
    options?: DragSourceOptions;
    previewOptions?: DragPreviewOptions;
    canDrag?: boolean | ((monitor: DragSourceMonitor<DragObject, DropResult>) => boolean);
    isDragging?: (monitor: DragSourceMonitor<DragObject, DropResult>) => boolean;
    collect?: (monitor: DragSourceMonitor<DragObject, DropResult>) => CollectedProps;
```