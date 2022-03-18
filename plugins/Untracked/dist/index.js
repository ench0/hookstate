'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PluginID = Symbol('Untracked');
function Untracked($this) {
    if ($this) {
        var th = $this;
        var _a = th.attach(PluginID); _a[0]; var controls_1 = _a[1];
        return {
            get: function () { return controls_1.getUntracked(); },
            set: function (v) { return controls_1.setUntracked(v); },
            merge: function (v) { return controls_1.mergeUntracked(v); }
        };
    }
    return {
        id: PluginID,
        init: function () { return ({}); }
    };
}

exports.Untracked = Untracked;
//# sourceMappingURL=index.js.map
