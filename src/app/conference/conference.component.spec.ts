// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {
	beforeEach,
	beforeEachProviders,
	describe,
	expect,
	it,
	inject
} from "@angular/core/testing";
import {
	ComponentFixture,
	TestComponentBuilder
} from "@angular/compiler/testing";
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";
import {ConferenceComponent} from "./conference.component";

describe('Component: Conference', () => {
	let builder: TestComponentBuilder;

	beforeEachProviders(() => [ConferenceComponent]);
	beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
		builder = tcb;
	}));

	it('should inject the component', inject([ConferenceComponent],
		(component: ConferenceComponent) => {
			expect(component).toBeTruthy();
		}));

	it('should create the component', inject([], () => {
		return builder.createAsync(ConferenceComponentTestController)
			.then((fixture: ComponentFixture<any>) => {
				let query = fixture.debugElement.query(By.directive(ConferenceComponent));
				expect(query).toBeTruthy();
				expect(query.componentInstance).toBeTruthy();
			});
	}));
});

@Component({
	selector: 'test',
	template: `
    <app-conference></app-conference>
  `,
	directives: [ConferenceComponent]
})
class ConferenceComponentTestController {
}
