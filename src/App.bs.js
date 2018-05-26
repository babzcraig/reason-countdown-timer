// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Timer$ReactTemplate = require("./Timer.bs.js");

var component = ReasonReact.reducerComponent("App");

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              return React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Timer$ReactTemplate.make(param[/* state */1][/* active */0], /* array */[])), React.createElement("button", {
                              onClick: (function () {
                                  return Curry._1(send, /* Start */0);
                                })
                            }, "Start"), React.createElement("button", {
                              onClick: (function () {
                                  return Curry._1(send, /* Stop */1);
                                })
                            }, "Stop"));
            }),
          /* initialState */(function () {
              return /* record */[/* active */false];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _) {
              if (action) {
                return /* Update */Block.__(0, [/* record */[/* active */false]]);
              } else {
                return /* Update */Block.__(0, [/* record */[/* active */true]]);
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */