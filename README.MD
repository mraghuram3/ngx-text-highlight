# ngx-text-highlight

## Installation
Angular Text highlight Directive
====

Angular Directive to highlight the text.

Live Demo : https://mraghuram3.github.io/#/ngx-text-highlight


## Installation

Install it with npm

```bash
$ npm install ngx-text-highlight --save
```

## Usage

Import `NgHighlightModule` in the root module

```ts
import { NgHighlightModule } from 'ngx-text-highlight';

@NgModule({
  imports: [
    // ...
    NgHighlightModule,
    ...
  ]
})
```

In your template

```html
<div ngxTextHighlight [content]="actualText" [searchTerm]="searchText"  [caseSensitive]="true">
</div>
```

- **[content]**: string.

  the content in which the text needs to be highlighted.

- **[searchTerm]**: string.

  The string which needs to be highlighted.

- **[caseSensitive]**: boolean.

  Toggle between case sensitive and case insensitive search,  default `false`.

  ** Include the css provided in your index.html or create a css class as shown below as per ypur requirement **

```css
.ngx-text-highlight{
    background:yellow;
}

````
Note
===
To increase performance, the ngx-text-highlight is updated to a directive instead of
component.
## License

MIT © [Raghu Ram M](mailto:mraghuram3@gmail.com)