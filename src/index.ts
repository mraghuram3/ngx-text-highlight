import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgHighlightComponent } from './ng-highlight.component';

export * from './ng-highlight.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgHighlightComponent
  ],
  exports: [
    NgHighlightComponent
  ]
})
export class NgHighlightModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgHighlightModule
    };
  }
}
