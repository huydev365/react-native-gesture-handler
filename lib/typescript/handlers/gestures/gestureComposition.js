import { BaseGesture, Gesture } from './gesture';
function extendRelation(currentRelation, extendWith) {
    if (currentRelation === undefined) {
        return [...extendWith];
    }
    else {
        return [...currentRelation, ...extendWith];
    }
}
export class ComposedGesture extends Gesture {
    gestures = [];
    simultaneousGestures = [];
    requireGesturesToFail = [];
    constructor(...gestures) {
        super();
        this.gestures = gestures;
    }
    prepareSingleGesture(gesture, simultaneousGestures, requireGesturesToFail) {
        if (gesture instanceof BaseGesture) {
            const newConfig = { ...gesture.config };
            newConfig.simultaneousWith = extendRelation(newConfig.simultaneousWith, simultaneousGestures);
            newConfig.requireToFail = extendRelation(newConfig.requireToFail, requireGesturesToFail);
            gesture.config = newConfig;
        }
        else if (gesture instanceof ComposedGesture) {
            gesture.simultaneousGestures = simultaneousGestures;
            gesture.requireGesturesToFail = requireGesturesToFail;
            gesture.prepare();
        }
    }
    prepare() {
        for (const gesture of this.gestures) {
            this.prepareSingleGesture(gesture, this.simultaneousGestures, this.requireGesturesToFail);
        }
    }
    initialize() {
        for (const gesture of this.gestures) {
            gesture.initialize();
        }
    }
    toGestureArray() {
        return this.gestures.flatMap((gesture) => gesture.toGestureArray());
    }
}
export class SimultaneousGesture extends ComposedGesture {
    prepare() {
        const simultaneousArray = this.gestures
            .flatMap((gesture) => gesture.toGestureArray())
            .concat(this.simultaneousGestures);
        for (const gesture of this.gestures) {
            this.prepareSingleGesture(gesture, simultaneousArray, this.requireGesturesToFail);
        }
    }
}
export class ExclusiveGesture extends ComposedGesture {
    prepare() {
        const gestureArrays = this.gestures.map((gesture) => gesture.toGestureArray());
        let requireToFail = [];
        for (let i = 0; i < this.gestures.length; i++) {
            this.prepareSingleGesture(this.gestures[i], this.simultaneousGestures, this.requireGesturesToFail.concat(requireToFail));
            requireToFail = requireToFail.concat(gestureArrays[i]);
        }
    }
}
