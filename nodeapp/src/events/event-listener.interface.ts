export default interface EventListenerInterface<P> {
	handleEvent(props: P): void;
}