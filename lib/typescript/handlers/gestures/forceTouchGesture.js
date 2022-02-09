import { ContinousBaseGesture } from './gesture';
function changeEventCalculator(current, previous) {
    'worklet';
    let changePayload;
    if (previous === undefined) {
        changePayload = {
            forceChange: current.force,
        };
    }
    else {
        changePayload = {
            forceChange: current.force - previous.force,
        };
    }
    return { ...current, ...changePayload };
}
export class ForceTouchGesture extends ContinousBaseGesture {
    config = {};
    constructor() {
        super();
        this.handlerName = 'ForceTouchGestureHandler';
    }
    minForce(force) {
        this.config.minForce = force;
        return this;
    }
    maxForce(force) {
        this.config.maxForce = force;
        return this;
    }
    feedbackOnActivation(value) {
        this.config.feedbackOnActivation = value;
        return this;
    }
    onChange(callback) {
        // @ts-ignore TS being overprotective, ForceTouchGestureHandlerEventPayload is Record
        this.handlers.changeEventCalculator = changeEventCalculator;
        return super.onChange(callback);
    }
}
