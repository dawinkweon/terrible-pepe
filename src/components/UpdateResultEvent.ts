type Listener = (result: boolean) => void;

export class UpdateResultEvent {
  private readonly listeners: Array<Listener> = [];

  addListener(listener: Listener) {
    this.listeners.push(listener);
  }

  removeListener(listener: Listener) {
    this.listeners.push(listener);
  }

  updateResult(result: boolean) {
    this.listeners.forEach((listener) => {
      listener.call(listener, result);
    });
  }
}
