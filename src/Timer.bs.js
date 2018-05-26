// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var TimerUtils$ReactTemplate = require("./TimerUtils.bs.js");

var component = ReasonReact.reducerComponent("Timer");

function make(active, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */(function (param) {
              var newSelf = param[/* newSelf */1];
              if (newSelf[/* state */1][/* active */3] === false && active === true) {
                Curry._1(newSelf[/* send */3], /* Activate */1);
                var intervalId = setInterval((function () {
                        return Curry._1(newSelf[/* send */3], /* Tick */0);
                      }), 1000);
                Curry._1(newSelf[/* onUnmount */4], (function () {
                        clearInterval(intervalId);
                        return /* () */0;
                      }));
                newSelf[/* state */1][/* intervalId */0][0] = /* Some */[intervalId];
              }
              if (newSelf[/* state */1][/* active */3] === true && active === false) {
                Curry._1(newSelf[/* send */3], /* Deactivate */2);
                var match = newSelf[/* state */1][/* intervalId */0][0];
                if (match) {
                  clearInterval(match[0]);
                  return /* () */0;
                } else {
                  return /* () */0;
                }
              } else {
                return 0;
              }
            }),
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              return React.createElement("div", undefined, param[/* state */1][/* displayTime */2]);
            }),
          /* initialState */(function () {
              return /* record */[
                      /* intervalId */[/* None */0],
                      /* startTime */Date.now(),
                      /* displayTime */"00:00",
                      /* active */false
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              switch (action) {
                case 0 : 
                    return /* Update */Block.__(0, [/* record */[
                                /* intervalId */state[/* intervalId */0],
                                /* startTime */state[/* startTime */1],
                                /* displayTime */TimerUtils$ReactTemplate.getTimerData(state[/* startTime */1], Date.now()),
                                /* active */state[/* active */3]
                              ]]);
                case 1 : 
                    return /* Update */Block.__(0, [/* record */[
                                /* intervalId */state[/* intervalId */0],
                                /* startTime */state[/* startTime */1],
                                /* displayTime */state[/* displayTime */2],
                                /* active */true
                              ]]);
                case 2 : 
                    return /* Update */Block.__(0, [/* record */[
                                /* intervalId */state[/* intervalId */0],
                                /* startTime */state[/* startTime */1],
                                /* displayTime */state[/* displayTime */2],
                                /* active */false
                              ]]);
                
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
