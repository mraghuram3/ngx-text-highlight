import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-highlight',
  templateUrl: './ng-highlight.component.html',
  styleUrls: ['./ng-highlight.component.css']
})
export class NgHighlightComponent implements OnInit {
  separatedContent: string[];
  matchedContent: string[];
  private _content: string;
  private _searchTerm: string;
  patterForMatch: any;
  patternForSplit: any;
  splitFlag = '';
  matchFlag = '';
  private _customClass = '';

    @Input('content')
    set content(content: string){
      this._content = content;
    }
    get content(): string { return this._content; }

    @Input('searchTerm')
    set searchTerm(searchTerm: string){
      this._searchTerm = searchTerm;
      this.filterText();
    }
    get searchTerm(): string { return this._searchTerm; }

    @Input() caseSensitive: boolean;

    @Input('customClass')
    set customClass(customClass: string){
      console.log(customClass);
      this._customClass = customClass;
    }
    get customClass(): string { return this._customClass; }

    constructor() {
      this.caseSensitive = false;
      this._customClass = '';
    }

    ngOnInit() {  }

    filterText() {
      if (!this.caseSensitive) {
          this.splitFlag = 'i';
          this.matchFlag = 'gi';
      }else {
          this.splitFlag = '';
          this.matchFlag = 'g';
      }
      console.log(this._customClass);
      this.patterForMatch = new RegExp(this._searchTerm, this.matchFlag);
      this.patternForSplit = new RegExp(this._searchTerm, this.splitFlag);
      this.matchedContent = this._content.match(this.patterForMatch);
      this.separatedContent = this._content.split(this.patternForSplit);

    }
    getCssClass(): string {
      if (this._customClass.length > 0){
      return this._customClass;
      } else {
        return 'highlight';
      }
    }
}
