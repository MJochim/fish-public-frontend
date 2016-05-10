import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ConferenceListComponent } from './conference-list.component';

describe('Component: ConferenceList', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ConferenceListComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ConferenceListComponent],
      (component: ConferenceListComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ConferenceListComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ConferenceListComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-conference-list></app-conference-list>
  `,
  directives: [ConferenceListComponent]
})
class ConferenceListComponentTestController {
}

