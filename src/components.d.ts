/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PokemonList {
        "color": string;
        "list": {
    name: string,
    url: string,
    image?: string;
  }[];
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPokemonListElement extends Components.PokemonList, HTMLStencilElement {
    }
    var HTMLPokemonListElement: {
        prototype: HTMLPokemonListElement;
        new (): HTMLPokemonListElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "pokemon-list": HTMLPokemonListElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PokemonList {
        "color"?: string;
        "list"?: {
    name: string,
    url: string,
    image?: string;
  }[];
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "pokemon-list": PokemonList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "pokemon-list": LocalJSX.PokemonList & JSXBase.HTMLAttributes<HTMLPokemonListElement>;
        }
    }
}
