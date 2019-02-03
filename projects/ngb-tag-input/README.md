# ngb-tag-input

This component extends the typeahead component of ng-bootstrap so that it supports multiselect. This enables the user to select multiple items from the list provided list of strings or objects.
When a list of object is supplied then the `[searchField]` property needs to be supplied to let the ngb-tag-input know which property of the objects it should use for searching.

# Quickstart

- Create an Angular app in Angular 7
- npm install --save bootstrap
- npm install --save jquery
- npm install --save popper
- npm install --save @ng-bootstrap/ng-bootstrap

Add `@import "~bootstrap"` In the styles.scss file in the root of your project. This will add bootstrap styling to your app.

Add the following import to app.module.ts

    import { NgbTagInputModule } from  'ngb-tag-input';
    import { FormsModule } from  '@angular/forms';

Then add `FormsModule` and `NgbTagInputModule` to the imports.

That's all. You can start using component now.

Add the following property to your app.component.ts

    selectedStates: string[] = [];
    states  = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado'];

Then Add the following html to app.component.html

    <ngb-tag-input [data]="states" [(ngModel)]="selectedStates"></ngb-tag-input>
