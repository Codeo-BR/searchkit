// Compiled using typings@0.6.6
// Source: https://raw.githubusercontent.com/joemcelroy/DefinitelyTyped/8cd79728efa7652d934b2703feeb68bb4802aebb/react/react-addons-linked-state-mixin.d.ts
// Type definitions for React v0.14 (react-addons-linked-state-mixin)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare namespace __React {
    interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    interface LinkedStateMixin extends Mixin<any, any> {
        linkState<T>(key: string): ReactLink<T>;
    }

    interface HTMLAttributes {
        checkedLink?: ReactLink<boolean>;
        valueLink?: ReactLink<boolean | string | number>;
    }

    namespace __Addons {
        export var LinkedStateMixin: LinkedStateMixin;
    }
}

declare module "react-addons-linked-state-mixin" {
    var LinkedStateMixin: __React.LinkedStateMixin;
    type LinkedStateMixin = __React.LinkedStateMixin;
    export = LinkedStateMixin;
}