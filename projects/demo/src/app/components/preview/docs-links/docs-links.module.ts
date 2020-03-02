import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsLinksComponent } from './docs-links.component';
import { DocsLinkComponent } from './docs-link/docs-link.component';



@NgModule({
  declarations: [DocsLinksComponent, DocsLinkComponent],
  imports: [
    CommonModule
  ]
})
export class DocsLinksModule { }
