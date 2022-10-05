import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { RegisterComponent } from './register.component';

let fb = new FormBuilder();
let userRegisterForm = fb.group({
  name: [''],
  lastName: [''],
  phone: [''],
  address: [''],
  email: [''],
  genre: [''],
  password: [''],
  confirmpassword: [''],
});

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const userResponse ={
    ok: true,
    msg: "Usuario encontrado",
    user: {
      address: "",
      birthday: "",
      code: "USR",
      email: "dario@gmail.com",
      genre: "",
      id: "-N2y-3O0iRiaITMI04aS",
      idRole: "",
      lastName: "Gomez",
      login: "Mintic",
      name: "Mintic",
      password: "827ccb0eea8a706c4c34a16891f84e7b",
      phone: "2222222"
    }
  }

  const userServiceMock = {
    login: jest.fn(),
    register: jest.fn(),
    update: jest.fn()
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: 
      [
        { provide: Router, useValue: { navigate: ()=>{} } },
        { provide: FormBuilder, useValue: { group: object => ({})}},
      ],
      imports: 
      [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run register in onRegister', () => {
    const spy = jest.spyOn(component, 'onRegister');
    component.userRegisterForm = userRegisterForm;
    component.loading = true;
    component.errorServer.existe = false;
    component.userRegisterForm.get('email')?.setValue('dario@gmail.com');
    component.userRegisterForm.get('password')?.setValue('12345');
    const spyUserService = jest.spyOn(userServiceMock, 'login').mockReturnValue(of(userResponse));
    expect(spyUserService).toBeUndefined();
    expect(spy).toBeCalled();
  });
});
