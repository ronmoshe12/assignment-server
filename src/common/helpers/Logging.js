"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class Logging {
}
_a = Logging;
Logging.log = (args) => _a.info(args);
Logging.info = (args) => console.log((`[${new Date().toLocaleString()}] [INFO]`), typeof args === 'string' ? (args) : args);
Logging.success = (args) => console.log((`[${new Date().toLocaleString()}] [SUCCESS]`), typeof args === 'string' ? (args) : args);
Logging.warning = (args) => console.log((`[${new Date().toLocaleString()}] [WARN]`), typeof args === 'string' ? (args) : args);
Logging.error = (args) => console.log((`[${new Date().toLocaleString()}] [ERROR]`), typeof args === 'string' ? (args) : args);
exports.default = Logging;
