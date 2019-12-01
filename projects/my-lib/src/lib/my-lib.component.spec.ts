import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibComponent } from './my-lib.component';
import { MyAbstractLibService, MY_IMPLEMENTATION } from './my-lib.service';

class MockLibService extends MyAbstractLibService {

  constructor() { 
    super();
  }

  public getName() {
    return "Name: my-lib implementation";
  }
}

describe('MyLibComponent', () => {
  let component: MyLibComponent;
  let fixture: ComponentFixture<MyLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibComponent ],
      providers: [
        { provide: MY_IMPLEMENTATION, useClass: MockLibService }
      ]  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
