import { close, open, refresh } from "./AutomationHelper.js";
import { hi, name, obj } from "./NavHelper.js";

import { Batch11Helper } from "./Batch11Helper.js";
import { BrowserHelper } from "./BrowserHelper.js";

hi();
console.log(name);
console.log(obj);

Batch11Helper.funcA();
Batch11Helper.funcB();

console.log(BrowserHelper.browserName);
BrowserHelper.launch();

open();
close();
refresh();
