'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const changedState = { ...state };
  const result = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(changedState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete changedState[key];
      }
    }

    if (action.type === 'clear') {
      for (const key in changedState) {
        delete changedState[key];
      }
    }
    result.push({ ...changedState });
  }

  return result;
}

module.exports = transformStateWithClones;
