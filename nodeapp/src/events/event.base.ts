import EventListenerInterface from "./event-listener.interface";

export abstract class EventBase<P> {

	protected _listeners: EventListenerInterface<P>[] = [];

	constructor() {  }

	public raise(props: P): void {
		this._listeners.forEach((listener) => {
			listener.handleEvent(props);
		});
	}

	public register(listener: EventListenerInterface<P>): void {
		if (this._listeners.includes(listener)) return;
		this._listeners.push(listener);
	}
	
	public unregister(listener: EventListenerInterface<P>): void {
		this._listeners = this._listeners.filter((h) => h !== listener);
	}
	
	public clear(): void {
		this._listeners = [];
	}
}