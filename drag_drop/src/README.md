# Drag and Drop

- useDrag() 함수 목록
API 정의
```
export declare function useDrag<DragObject = unknown, DropResult = unknown, CollectedProps = unknown>(specArg: FactoryOrInstance<DragSourceHookSpec<DragObject, DropResult, CollectedProps>>, deps?: unknown[]): [CollectedProps, ConnectDragSource, ConnectDragPreview];
```


- useDrop() 함수 목록
API 정의
```
export declare function useDrop<DragObject = unknown, DropResult = unknown, CollectedProps = unknown>(specArg: FactoryOrInstance<DropTargetHookSpec<DragObject, DropResult, CollectedProps>>, deps?: unknown[]): [CollectedProps, ConnectDropTarget];
```


- 참조용 레퍼런스
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

FactoryOrInstance 메서드 내용 (주로 직접 사용자 정의해서 사용)
```
    type: SourceType;
    item?: DragObject | DragObjectFactory<DragObject>;
    options?: DragSourceOptions;
    previewOptions?: DragPreviewOptions;
    canDrag?: boolean | ((monitor: DragSourceMonitor<DragObject, DropResult>) => boolean);
    isDragging?: (monitor: DragSourceMonitor<DragObject, DropResult>) => boolean;
    collect?: (monitor: DragSourceMonitor<DragObject, DropResult>) => CollectedProps;
```

connectedDropTarget 함수 (사용자 정의시 drop(ref))
drop(ref) => ref 에서는 elementOrNode 값
```
export declare type ConnectDropTarget = DragElementWrapper<any>;
export declare type DragElementWrapper<Options> = (elementOrNode: ConnectableElement, options?: Options) => ReactElement | null;
```

ReactElement 값
```
interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
        type: T;
        props: P;
        key: Key | null;
    }
```