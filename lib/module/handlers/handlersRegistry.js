import { isJestEnv } from '../utils';
export const handlerIDToTag = {};
const handlers = new Map();
const testIDs = new Map();
let handlerTag = 1;
export function getNextHandlerTag() {
  return handlerTag++;
}
export function registerHandler(handlerTag, handler, testID) {
  handlers.set(handlerTag, handler);

  if (isJestEnv() && testID) {
    testIDs.set(testID, handlerTag);
  }
}
export function unregisterHandler(handlerTag, testID) {
  handlers.delete(handlerTag);

  if (isJestEnv() && testID) {
    testIDs.delete(testID);
  }
}
export function findHandler(handlerTag) {
  return handlers.get(handlerTag);
}
export function findHandlerByTestID(testID) {
  const handlerTag = testIDs.get(testID);

  if (handlerTag !== undefined) {
    var _findHandler;

    return (_findHandler = findHandler(handlerTag)) !== null && _findHandler !== void 0 ? _findHandler : null;
  }

  return null;
}
//# sourceMappingURL=handlersRegistry.js.map