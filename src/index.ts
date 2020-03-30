import { css, customElement, html, LitElement } from "lit-element";
import "./prismic-document";

@customElement("shell-component")
export class ShellComponent extends LitElement {
    public static get styles() {
        return css``;
    }

    public render() {
        return html`
            <prismic-document
                repository="anoblet"
                type="home"
                .template=${function() {
                    return this.data
                        ? html`
                              ${this.toText(this.data.title)}
                              ${this.toHtml(this.data.rich_text)}
                          `
                        : "";
                }}
            ></prismic-document>
        `;
    }
}

const el: any = document.createElement("shell-component");
document.body.appendChild(el);
