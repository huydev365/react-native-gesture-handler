"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNextHandlerTag = getNextHandlerTag;
exports.registerHandler = registerHandler;
exports.unregisterHandler = unregisterHandler;
exports.findHandler = findHandler;
exports.findHandlerByTestID = findHandlerByTestID;
exports.handlerIDToTag = void 0;

var _utils = require("../utils");

const handlerIDToTag = {};
exports.handlerIDToTag = handlerIDToTag;
const handlers = new Map();
const testIDs = new Map();
let handlerTag = 1;

function getNextHandlerTag() {
  return handlerTag++;
}

function registerHandler(handlerTag, handler, testID) {
  handlers.set(handlerTag, handler);

  if ((0, _utils.isJestEnv)() && testID) {
    testIDs.set(testID, handlerTag);
  }
}

function unregisterHandler(handlerTag, testID) {
  handlers.delete(handlerTag);

  if ((0, _utils.isJestEnv)() && testID) {
    testIDs.delete(testID);
  }
}

function findHandler(handlerTag) {
  return handlers.get(handlerTag);
}

function findHandlerByTestID(testID) {
  const handlerTag = testIDs.get(testID);

  if (handlerTag !== undefined) {
    var _findHandler;

    return (_findHandler = findHandler(handlerTag)) !== null && _findHandler !== void 0 ? _findHandler : null;
  }

  return null;
}
//# sourceMappingURL=handlersRegistry.js.map