import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { EventoDetailComponent } from './evento-detail.component';

describe('EventoDetailComponent', () => {
  let component: EventoDetailComponent;
  let fixture: ComponentFixture<EventoDetailComponent>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('1')
        }
      }
    });

    await TestBed.configureTestingModule({
      declarations: [EventoDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteSpy }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventoDetailComponent);
    component = fixture.componentInstance;
    mockActivatedRoute = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
