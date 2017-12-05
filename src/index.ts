import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './ng-highlight.directive';
export * from './ng-highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective
  ],
  exports: [
    HighlightDirective
  ]
})
export class NgHighlightModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgHighlightModule
    };
  }
}
