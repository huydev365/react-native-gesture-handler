import { BaseGesture } from './gesture';
export class TapGesture extends BaseGesture {
    config = {};
    constructor() {
        super();
        this.handlerName = 'TapGestureHandler';
    }
    minPointers(minPointers) {
        this.config.minPointers = minPointers;
        return this;
    }
    numberOfTaps(count) {
        this.config.numberOfTaps = count;
        return this;
    }
    maxDistance(maxDist) {
        this.config.maxDist = maxDist;
        return this;
    }
    maxDuration(duration) {
        this.config.maxDurationMs = duration;
        return this;
    }
    maxDelay(delay) {
        this.config.maxDelayMs = delay;
        return this;
    }
    maxDeltaX(delta) {
        this.config.maxDeltaX = delta;
        return this;
    }
    maxDeltaY(delta) {
        this.config.maxDeltaY = delta;
        return this;
    }
}
