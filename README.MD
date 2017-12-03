# ngx-text-highlight

## Installation
Angular Text highlight component
====

Angular component to highlight the text.

Live Demo : https://mraghuram3.github.io/ngx-text-highlight


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
<ng-ng-highlight [content]="actualText" [searchTerm]="searchText" [customClass]="'blue-highlight'" [caseSensitive]="true">
</ng-ng-highlight>
```

- **[content]**: string.

  the content in which the text needs to be highlighted.

- **[searchTerm]**: string.

  The string which needs to be highlighted.

- **[customClass]**: string.

  To add custom class to highlighted text, Optional.

- **[caseSensitive]**: boolean.

  Toggle between case sensitive and case insensitive search,  default `false`.

## License

MIT © [Raghu Ram M](mailto:mraghuram3@gmail.com)