import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { ComboService } from 'src/app/services/combo.service';
import { CombosComponent } from './combos.component';


describe('CombosComponent', () => {
  let component: CombosComponent;
  let fixture: ComponentFixture<CombosComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CombosComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: 
      [
        { provide: ComboService, useValue: { buscarCombos: jest.fn(() => of({})) } },
      ],
      imports: 
      [
        TranslateModule.forRoot(),
        HttpClientTestingModule, 
      ]
    }).compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
