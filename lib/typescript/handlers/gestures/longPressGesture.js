import { BaseGesture } from './gesture';
export class LongPressGesture extends BaseGesture {
    config = {};
    constructor() {
        super();
        this.handlerName = 'LongPressGestureHandler';
    }
    minDuration(duration) {
        this.config.minDurationMs = duration;
        return this;
    }
    maxDistance(distance) {
        this.config.maxDist = distance;
        return this;
    }
}
