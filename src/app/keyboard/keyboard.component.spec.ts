import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardComponent } from './keyboard.component';

describe('KeyboardComponent', () => {
  let component: KeyboardComponent;
  let fixture: ComponentFixture<KeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('has attribute to save input value', () => {
    expect(component.number).toBeTruthy();
  });
  it('controlClick method exists', () => {
    const event = {
      target: {
        getAttribute: () => 1
      }
    };
    function controlClickMock() {
      console.log('fake click');
    }
    // const spy = spyOn(component, 'controlClick').and.callFake(controlClickMock);

    component.controlClick(event);
    expect(component.controlClick).toBeTruthy();
  });
});
